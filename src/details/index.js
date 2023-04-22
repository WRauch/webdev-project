import React, { useState, useEffect } from "react";
import NavigationSidebar from "../navbar";
import axios from 'axios';
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { followTeam } from "../redux/teams-service";
import * as teamsService from "../redux/teams-service";

function Details() {
    const { currentUser } = useSelector((state) => state.users);
    const { teamId } = useParams();
    let[results, setResults] = useState()
    let[followers, setFollowers] = useState()
    let[render, setRender] = useState('')
    const findTeamData = async (link) => {
        const response = await axios.get(link);
        const data = response.data.teams;
        return data[0];
    }
    const searchNHL = async () => {
        const res = await findTeamData(`https://statsapi.web.nhl.com/api/v1/teams?teamId=${teamId}&expand=team.roster&expand=team.stats`);
        setResults(res);  
    };
    const getFollows = async () => {
        const follow = await teamsService.getTeamFollowers(teamId)
        setFollowers(follow);
    }

    useEffect(() => {
        searchNHL();

    }, []);
    useEffect(() => {
        getFollows()
    },[render])


    return(
        <div className="m-2">

        <div className="row">
            <div className="col-2">
            <NavigationSidebar/>
            </div>
        
            <div className="col-10">
                {results && <>
                <div>
                <h2 className="d-inline">
                    {results.name}
                </h2>
                { currentUser && followers && followers.filter((tuit) => tuit._id !== currentUser._id).length < 1 &&   <button className="btn bg-primary float-end" 
                onClick={() => {followTeam({teamId: results.id, name: results.name})
                setRender('g')}}>
                    Follow
                </button> }
                </div>

                <div className="mt-2 text-warning">
                <h4> Record: {results && results.teamStats[0].splits[0].stat.wins}-
                {results.teamStats[0].splits[0].stat.losses}- 
                {results.teamStats[0].splits[0].stat.ot} 
                <div className="float-end">Points: ({results.teamStats[0].splits[0].stat.pts})</div>
                </h4>
                </div>

                <h4 className="text-primary">Followers</h4>
                <ul className="list-group">
                {followers && 
                followers.map((f) => {
                    return (
                        <li key={f.userId} className="list-group-item">
                            {f.username} <Link to={`/profile/${f.username}`} className="float-end"> profile</Link>
                        </li>
                    )
                })
                }
                </ul>


                <h4 className="text-success mt-2">
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
                </ul></>}
                               
            </div>

        </div>
        </div>

    )

}

export default Details;