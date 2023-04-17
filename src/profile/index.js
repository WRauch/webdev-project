import React, { useState, useEffect } from "react";
import * as userService from "../redux/users-service";
import { useNavigate, useParams } from "react-router-dom";
import { profileThunk, logoutThunk } from "../redux/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import NavigationSidebar from "../navbar";

function Profile() {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfile = async () => {
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    setProfile(user);
  };
  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);
  return (
    <div className="row">
    <div className="col-2">
    <NavigationSidebar active="profile"/>
    </div>
    <div className="col-10">
      <h1>
        Profile {username}
      </h1>
      {profile && (
        <div>
          <label>Username</label>
          {currentUser && (
            <input
              type="text"
              className="form-control"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />
          )}
          {!currentUser && <p>{profile.username}</p>}
          <label>First Name</label>
          {currentUser && (
            <input
              type="text"
              className="form-control"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
          )}
          {!currentUser && <p>{profile.firstName}</p>}
        </div>
      )}
      {currentUser && (
        <button onClick={() => logout()} className="btn btn-danger">
          Logout
        </button>
      )}
    </div>
    </div>

  );
}

export default Profile;
