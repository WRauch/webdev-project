import GameComponent from "./GameComponent";
import React from "react";

const GamesList = ({games}) => {

    return (
        <ul className="list-group">
            <div className="row">
                <div className="col-6 text-primary">
                    <h4> Away
                    </h4>
                </div>
                <div className="col-6 text-danger">
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