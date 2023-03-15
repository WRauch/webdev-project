
const GameComponent = ({game} ) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-6">
                    <h4>{game.away}</h4>
                </div>
                <div className="col-6">
                    <h4>{game.home}</h4>
                </div>
            </div>
        </li>
    )

}
export default GameComponent;