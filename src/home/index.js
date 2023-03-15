import React from "react";
import GamesList from "./games"
import NavigationSidebar from "../navbar";
function Home () {
    return(
        <div className="m-2">


        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="home"/>
            </div>
        
            <div className="col-10">
            <h1>
                NHL Homepage
            </h1>

            <h2>
                Games

            </h2>
            <GamesList/>
            </div>

        </div>
        </div>

    )

}
export default Home;