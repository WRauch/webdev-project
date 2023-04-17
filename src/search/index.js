import React, { useState, useEffect } from "react";
import NavigationSidebar from "../navbar";
import { findTeams } from "./search-service";
import { json, Navigate } from "react-router";
import {useDispatch, useSelector}
  from "react-redux";
  import { Link, useNavigate, useParams } from "react-router-dom";

function Search () {
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    let[search, setSearch] = useState(searchTerm)
    let[results, setResults] = useState([])

    const searchNHL = async () => {
        const res = await findTeams('https://statsapi.web.nhl.com/api/v1/teams');
        setResults(res);
        navigate(`/search/${search}`);
    };
    useEffect(() => {
        if(searchTerm) {
            setSearch(searchTerm);
            searchNHL();
        }
    }, [])

    return(
        <div className="m-2">

        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="search"/>
            </div>
        
            <div className="col-10">
                <h2>
                    Search For Teams
                </h2>
                <button className="btn bg-danger" onClick={searchNHL}>Search</button>

                <input className="form-control" placeholder="Search" onChange={(x) => setSearch(x.target.value)}/>
                
                <ul className="list-group mt-2">
                {results.map((result) => {
                  return (
                    <>
                    {(result.name).toLowerCase().includes(search.toLowerCase()) &&
                        <li className="list-group-item">
                        {result.name} <Link to={`/details/${result.id}`} className="float-end"> details</Link>
                        </li>
                    }
                    </>
                  );
                })}

                </ul>

                
            </div>

            {JSON.stringify(results)}

        </div>
        </div>

    )

}
export default Search;