import React, {useState} from "react";
import NavigationSidebar from "../navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/users-thunks";
function Login () {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
      //const navigate = useNavigate();
      const dispatch = useDispatch();
      const login = async () => {
        try {
            await dispatch(loginThunk(user));
            //navigate("/profile");
          } catch (e) {
            alert("hello");
          }
      };
    return(
        <div className="m-2">


        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="login"/>
            </div>
        
            <div className="col-6">
                <input className="form-control" 
                placeholder="Username" 
                name="username"           
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                <input  className="form-control mt-2" placeholder="Password" name="password"
                value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                <div className="mt-2">
                    Or Register Here 
                    <Link to="/register" className="btn bg-primary float-end">Register</Link>

                </div>

            </div>
            <div className="col-1">
            <button className="btn bg-danger" onClick={login}>
                    Login
                </button>
            </div>

        </div>
        </div>

    )

}
export default Login;