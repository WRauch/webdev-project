import GameComponent from "./GameComponent";
import React from "react";
import games from './games.json'

const GamesList = () => {

    return (
        <ul className="list-group">
        {
          games.map(game =>
            <GameComponent game={game}/> )
        }
      </ul>

    );

};
export default GamesList;