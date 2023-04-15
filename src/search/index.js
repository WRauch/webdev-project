import React, { useState, useEffect } from "react";
import NavigationSidebar from "../navbar";
import { findScheduleToday } from "./search-service";
import { json } from "react-router";
import {useDispatch, useSelector}
  from "react-redux";
function Search () {
    let[search, setSearch] = useState('')
    let[results, setResults] = useState([])

    const searchNHL = async (link) => {
        const res = await findScheduleToday(link)
        setResults(res);
    }
    useEffect(() => {
        searchNHL('https://statsapi.web.nhl.com/api/v1/players')    }, [])

    return(
        <div className="m-2">


        <div className="row">
            <div className="col-2">
            <NavigationSidebar active="search"/>
            </div>
        
            <div className="col-10">
                <h2>
                    Search For Players
                </h2>
                <input className="form-control" placeholder="Search" onChange={(x) => setSearch(x.target.value)}>
                </input>
                <button className="btn bg-danger">Search</button>
                <ul className="list-group">
                    {
                        results.map(res => {
                            <li>
                                {res}
                            </li>
                        })
                    }
                    

                </ul>

                
            </div>

            {JSON.stringify(results)}

            


        </div>
        </div>

    )

}
export default Search;