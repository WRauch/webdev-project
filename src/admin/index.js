import NavigationSidebar from "../navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as userService from "../redux/users-service";


function Admin() {
    let[elem, setElem] = useState([])

    const getUsers = async () => {
        const res = await userService.findAllUsers();
        setElem(res);
    };
    const deleteUser = async (id) => {
        await userService.deleteUser(id)
    }
    useEffect(() => {
        getUsers()
    }, [deleteUser])

    const { currentUser } = useSelector((state) => state.users);

    return(
        <div className="m-2">

        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="admin"/>
            </div>
        
            {currentUser && !currentUser.isAdmin && <h2>"You do not have access to this page"</h2>}
            {currentUser && currentUser.isAdmin && elem &&
                <div className="col-10">
                    <h1>
                        Admin
                    </h1>

                <h3>Users</h3>
                <ul className="list-group">

                    {
                        elem.map((user) => {
                            return(
                                <li className="list-group-item">
                                    {user.username}
                                    {currentUser._id !== user._id ? 
                                    <button className="btn bg-danger float-end" onClick={() => deleteUser(user._id)}>Delete</button>: 
                                    <h5 className="float-end"> (You)</h5>}
                                </li>
                            )}
                        )
                    }
                </ul>
                </div>
            }
        </div>
        </div>

    )

}

export default Admin;