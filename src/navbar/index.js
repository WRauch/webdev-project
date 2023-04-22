import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = (
 {
   active = ''
 }
) => {
  const { currentUser } = useSelector((state) => state.users);

 return (
   <div className="list-group">
     <Link to="/" className={`list-group-item
                     ${active === 'home'?'active':''}`}> Home </Link>
     <Link to="/search" className={`list-group-item
                    ${active === 'search'?'active':''}`}>
        Search
     </Link>
    {
    currentUser ? <Link to="/profile" className={`list-group-item
                      ${active === 'profile'?'active':''}`}> 
                           Profile
     </Link> :
     <Link to="/login" className={`list-group-item
     ${active === 'login'?'active':''}`}> 
          Login/Register
      </Link>
    }
    {
    currentUser && currentUser.isAdmin && 
     <Link to="/admin" className={`list-group-item
     ${active === 'admin'?'active':''}`}> 
          Admin
      </Link>
    }


   </div>
 );
};
export default NavigationSidebar;