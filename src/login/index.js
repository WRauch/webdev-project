import React, {useState} from "react";
import NavigationSidebar from "../navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk } from "../redux/users-thunks";
function Login () {
    const { currentUser } = useSelector((state) => state.users);
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
      const logout = async () => {
        await dispatch(logoutThunk());
      };
    return(
        <div className="m-2">


        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="login"/>
            </div>


        
            {currentUser ? <h2 className="col-6"> You Are Logged In</h2> :
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
}
            <div className="col-1">
                {currentUser ?          <button className="btn bg-danger" onClick={logout}>
                    Logout
                </button>:             <button className="btn bg-danger" onClick={login}>
                    Login
                </button>}

            </div>

        </div>
        </div>

    )

}
export default Login;