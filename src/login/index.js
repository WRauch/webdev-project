import React from "react";
import NavigationSidebar from "../navbar";
import { Link } from "react-router-dom";

function Login () {
    return(
        <div className="m-2">


        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="login"/>
            </div>
        
            <div className="col-6">
                <input className="form-control" placeholder="Username" name="username">
                </input>
                <input  className="form-control mt-2" placeholder="Password" name="password">
                </input>

                <div className="mt-2">
                    Or Register Here 
                    <Link to="/register" className="btn bg-primary float-end">Register</Link>

                </div>

            </div>
            <div className="col-1">
            <button className="btn bg-danger">
                    Login
                </button>
            </div>

        </div>
        </div>

    )

}
export default Login;