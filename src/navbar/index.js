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
     <Link to="/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}> 
     Profile
     </Link>
   </div>
 );
};
export default NavigationSidebar;