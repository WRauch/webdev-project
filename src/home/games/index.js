import GameComponent from "./GameComponent";
import React from "react";

const GamesList = ({games}) => {

    return (
        <ul className="list-group">
            <div className="row">
                <div className="col-6">
                    <h4> Away
                    </h4>
                </div>
                <div className="col-6">
                    <h4>Home</h4>
                </div>
            </div>
        {
          games.map(game =>
            <GameComponent game={game}/> )
        }
      </ul>

    );

};
export default GamesList;