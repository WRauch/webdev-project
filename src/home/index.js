import React from "react";
import GamesList from "./games"
import NavigationSidebar from "../navbar";
import axios from 'axios';
import { useEffect, useState } from "react";

export const findScheduleToday = async (link) => {
    const response = await axios.get(link);
    const data = response.data.dates;
    return data;
}
function Home () {
    let[results, setResults] = useState([])

    const searchNHL = async (link) => {
        const res = await findScheduleToday(link)
        setResults(res[0].games);
    }
    useEffect(() => {
        searchNHL('https://statsapi.web.nhl.com/api/v1/schedule')    
    }, [])
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

            <div>
                { results.length > 0 ? <div> <h2>
                    Today's Games
                </h2>

                <GamesList games={results}/> </div> : 'There Are No Games Today'}


            </div>
            </div>

            <pre>{JSON.stringify(results, null, 2)}</pre>

        </div>
        </div>

    )

}
export default Home;