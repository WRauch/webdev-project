import React, { useState, useEffect } from "react";
import * as userService from "../redux/users-service";
import * as friendsService from "../redux/friends-service";

import { useNavigate, useParams, Link } from "react-router-dom";
import { profileThunk, logoutThunk } from "../redux/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import NavigationSidebar from "../navbar";

function Profile() {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState();
  const [editing, setEditing] = useState(false);
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();

  let[render, setRender] = useState('')

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
  const updateUser = async () => {
    await userService.updateUser(profile);
  };
  const getFollows = async () => {
    if (profile) {
        const follow = await friendsService.getUserFriends(profile._id)
        setFollowers(follow)
    }
  }
  const getFollowing = async () => {
    if (profile) {
        const follow = await friendsService.getUserFollowers(profile._id)
        setFollowing(follow)
    }
  }
  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    if (username) {
        if(username === currentUser.username) {
            navigate('/profile')
        } else {
            getUserByUsername();

        }
    } else {
      getProfile();
    }
    console.log(currentUser)
  }, [username, render]);

  useEffect (() => {
    getFollows()
  }, [profile, render])
  useEffect (() => {
    getFollowing()
  }, [profile, render])


  return (
    <div className="m-2">
    <div className="row">
    <div className="col-2">
    <NavigationSidebar active="profile"/>
    </div>
    <div className="col-10">
        <h1>
        {currentUser && !username ? currentUser.isAdmin 
        ? 'Your Profile (Admin)': 'Your Profile': <div>{username}</div>}
        {currentUser && !username && (
        <button onClick={logout} className="btn btn-danger mt-2 float-end">
          Logout
        </button>
      )}
      </h1>



      {currentUser && !username && (
        <button onClick={() => {setEditing(!editing); updateUser()}} className={`btn float-end ${editing ? 'btn-success' : 'btn-primary'}`} >
          {editing? 'Save': 'Edit'}
        </button>
      )}
      {profile && 
        <div>
          {currentUser && !username && 
          <div>
          
          <label><h4 className="text-primary">Username</h4></label>
          
            <p>{profile.username}</p>

          </div>
          }
          {currentUser && username && username!== currentUser.username &&
          followers && followers.filter((tuit) => tuit._id !== currentUser._id).length < 1 &&
          
          <div>

            <button className="btn float-end btn-success" 
            onClick={() => {
                friendsService.createFriend({follower: currentUser._id, following: profile._id, followerUsername: currentUser.username, followingUsername: profile.username})
                setRender('')
            }}>Follow</button>

          </div>
          }


<label><h4 className="text-danger mt-2">Bio</h4></label>
          {currentUser && editing && (
            <input
              type="text"
              className="form-control"
              value={profile.bio}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
            />
          )}
          {currentUser && !editing && <p>{profile.bio}</p>}

          {!currentUser && <p>{profile.bio}</p>}



        </div>
      }
        {followers && 
            <div>
                {followers.length > 0 && <h4 className="text-warning mt-2">Followers</h4>}
                <ul className="list-group">

            {followers.map((f) => {
                return (
                    <li key={f._id} className="list-group-item">
                        {f.followerUsername}<Link to={`/profile/${f.followerUsername}`} className="float-end"> profile</Link>
                    </li>
                )
            })}
            </ul>
            </div>
            }

        {following && 
            <div>
                {following.length > 0 && <h4 className="text-success mt-2">Following</h4>}
                <ul className="list-group">

            {following.map((f) => {
                return (
                    <li key={f._id} className="list-group-item">
                        {f.followingUsername}<Link to={`/profile/${f.followingUsername}`} className="float-end"> profile</Link>
                    </li>
                )
            })}
            </ul>
            </div>
            }

    </div>
    </div>
    </div>

  );
}

export default Profile;
