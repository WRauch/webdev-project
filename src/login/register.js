import React, { useState } from "react";
import NavigationSidebar from "../navbar";
import { Link } from "react-router-dom";

function Register () {
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
                <div class="input-group mt-2">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Role</label>
                </div>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>User</option>
                    <option value="1">Admin</option>
                </select>
                </div>

            </div>
            <div className="col-1">
            <Link className="btn bg-danger" to={'/profile'}>
                    Register
                </Link>
            </div>


        </div>
        </div>

    )

}
export default Register;