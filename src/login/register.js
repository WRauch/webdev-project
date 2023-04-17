import React, { useState } from "react";
import NavigationSidebar from "../navbar";
import { useNavigate } from "react-router-dom";
import * as usersService from "../redux/users-service"
import { Link } from "react-router-dom";

function Register () {
    const [user, setUser] = useState({
        username: "",
        password: "",
        isAdmin: false,
      });
      const navigate = useNavigate();
      const register = async () => {
        console.log(user.isAdmin);
        await usersService.register(user);
        navigate("/profile");
      };
    return(
        <div className="m-2">
        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="login"/>
            </div>
        
            <div className="col-6">
                <input className="form-control" placeholder="Username" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                <input  className="form-control mt-2" placeholder="Password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                <div className="input-group mt-2">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Role</label>
                </div>
                <select className="form-select" id="inputGroupSelect01" onChange={(e) => setUser({ ...user, isAdmin: Boolean(e.target.value)})}>
                    <option selected value={false}>User</option>
                    <option value={true}>Admin</option>
                </select>
                
                </div>
                <div className="mt-2">
                    Or Login Here 
                    <Link to="/login" className="btn bg-primary float-end">Login</Link>

                </div>
            </div>
            <div className="col-1">
            <button className="btn bg-danger" onClick={register}>
                    Register
                </button>
                
            </div>
        </div>
        </div>

    )

}
export default Register;