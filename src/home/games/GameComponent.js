
const GameComponent = ({game} ) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-6">

                    <h4> {game.teams.away.team.name} 
                    </h4>
                </div>
                <div className="col-6">
                    <h4>{game.teams.home.team.name}</h4>
                </div>
            </div>
        </li>
    )

}
export default GameComponent;