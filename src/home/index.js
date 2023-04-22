import React from "react";
import GamesList from "./games"
import NavigationSidebar from "../navbar";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as usersService from "../redux/users-service"
import { Link } from "react-router-dom";

export const findScheduleToday = async (link) => {
    const response = await axios.get(link);
    const data = response.data.dates;
    return data;
}
function Home () {
    const { currentUser } = useSelector((state) => state.users);

    let[results, setResults] = useState([])
    let[followers, setFollowers] = useState()

    const searchNHL = async (link) => {
        const res = await findScheduleToday(link)
        setResults(res[0].games);
    }
    useEffect(() => {
        searchNHL('https://statsapi.web.nhl.com/api/v1/schedule')    
    }, [])

    const getFollows = async () => {
        const follow = await usersService.getUserFollowers(currentUser._id)
        setFollowers(follow);
    }
    useEffect(() => {
        getFollows()
    },[results])

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

            {currentUser &&    
            <div>

            <h4 className="mt-3 text-warning">Teams You Follow</h4>
            <ul>


            {followers && 
                followers.map((f) => {
                    return (
                        <li key={f.teamId} className="list-group-item">
                            {f.teamName}<Link to={`/details/${f.teamId}`} className="float-end"> details</Link>
                        </li>
                    )
                })
                }
            </ul>
            </div>

            }
            </div>
        </div>
        </div>

    )

}
export default Home;