import React, { useState, useEffect } from "react";
import NavigationSidebar from "../navbar";
import axios from 'axios';
import { useSelector } from "react-redux";


import { findTeams } from "../search/search-service";
import { Link, useParams } from "react-router-dom";
function Details() {
    const { currentUser } = useSelector((state) => state.users);
    let[results, setResults] = useState({})
    const findTeamData = async (link) => {
        const response = await axios.get(link);
        const data = response.data.teams;
        return data;
    }

    const searchNHL = async () => {
        const res = await findTeamData('https://statsapi.web.nhl.com/api/v1/teams?teamId=6&expand=team.roster&expand=team.stats');
        setResults(res[0]);
        console.log(results);

    };
    useEffect(() => {
        searchNHL();
    }, [])

    return(
        <div className="m-2">

        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="search"/>
            </div>
        
            <div className="col-10">
                <div>
                <h2 className="d-inline">
                    {results.name}
                </h2>
                <button className="btn bg-primary float-end">
                    Follow
                </button>
                </div>

                <h4> Record: {results.teamStats[0].splits[0].stat.wins}- 
                {results.teamStats[0].splits[0].stat.losses}- 
                {results.teamStats[0].splits[0].stat.ot} <div className="float-end">Points: ({results.teamStats[0].splits[0].stat.pts})</div></h4>
                <h4>
                    Roster
                </h4>
                <ul className="list-group">
                {results.roster.roster.map((x) => {
                    return(
                        <li className="list-group-item">
                            {x.person.fullName}: ({x.jerseyNumber})
                            <div className="float-end">
                            Position: {x.position.abbreviation}
                            </div>
                        </li>
                    )
                })}
                </ul>
                
                {JSON.stringify(results)}

                
            </div>


        </div>
        </div>

    )

}

export default Details;