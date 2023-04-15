import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <Link to="/" className={`list-group-item
                     ${active === 'home'?'active':''}`}> <i class="bi bi-house-door-fill"></i> Home </Link>
     <Link to="/search" className={`list-group-item
                    ${active === 'search'?'active':''}`}>
        Search
     </Link>
    {
    true ? <Link to="/profile" className={`list-group-item
                      ${active === 'profile'?'active':''}`}> 
                           Profile
     </Link> :
     <Link to="/login" className={`list-group-item
     ${active === 'login'?'active':''}`}> 
          Profile
      </Link>
    }


   </div>
 );
};
export default NavigationSidebar;