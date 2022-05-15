import { PlayerGeneral } from "../../services/player/player.model";
import './player.component.scss'
interface PlayerComponentProps{
    player : PlayerGeneral
}
const PlayerComponent = ({player}:PlayerComponentProps) => {

    return <div className="row player-component">
        <div className="col-4 player-image">
            <img src={player.picture} alt="" />
        </div>
        <div className="col-8 player-info">
            <div className="row player-name">
                <h4>{`${player.firstname} ${player.lastname}`}</h4>
            </div>
            <div className="row ">
                <div className="col-4 player-data">
                    <div className="label">
                        Rank
                    </div>
                    <div className="data">
                        #{player.rank}
                    </div>
                </div>
                <div className="col-4 player-data">
                    <div className="label">
                        Points
                    </div>
                    <div className="data">
                        {player.points}

                    </div>
                </div>
                <div className="col-4 player-data">
                    <div className="label">
                        Country
                    </div>
                    <div className="data">
                        {player.countryCode}

                    </div>
                </div>

            </div>

        </div>
    </div>


};

export default PlayerComponent;