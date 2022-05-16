import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlayerDetails } from "../../services/player/player.model";
import { getPlayerById } from "../../services/player/player.service";
import './player.scss';
const PlayerView = () => {
    const [player, setPlayer] = useState<PlayerDetails>();
    const { id } = useParams();
    const navigate = useNavigate();
    const fetshPlayerById = async () => {
        const result = await getPlayerById(id ? +id : -1);
        setPlayer(result);
    }

    useEffect(() => {
        fetshPlayerById();
    }, [])
    return <div className="player-details">
        <div className="row">
                <div className="exit" onClick={()=>navigate('/')}>
                <FontAwesomeIcon icon="xmark" /> X
                </div>
            </div>
        <div className="main-container">
            
            <div className="row">
                <div className="col-2 player-img">
                    <img src={player?.picture} alt="" />
                </div>
                <div className="col-10 player-info">
                    <div className="row">
                        <div className="col-8 player-name">
                            <div className="row firstname">
                                {player?.firstname}
                            </div>
                            <div className="row lastname">
                                {player?.lastname}
                            </div>
                        </div>
                        <div className="col-4 country">
                            <div className="row image">
                                <img src={player?.country.picture} alt="" />

                            </div>
                            <div className="row name">
                                {player?.country.code}
                            </div>
                        </div>

                    </div>
                    <div className="row player-detail">
                        <div className="col-4">
                            <div className="row label">
                                RANK

                            </div>
                            <div className="row data">

                            #{player?.rank}
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="row label">
                                POINT

                            </div>
                            <div className="row data">
                                {player?.points}

                            </div>

                        </div>
                        <div className="col-4">
                            <div className="row label">
                                COUNTRY

                            </div>
                            <div className="row data">

                                {player?.country.code}
                            </div>

                        </div>

                    </div>
                    <div className="row player-detail">
                        <div className="col-4">
                            <div className="row label">
                                AGE

                            </div>
                            <div className="row data">

                                {player?.age}
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="row label">
                                WEIGHT

                            </div>
                            <div className="row data">
                                {player?.weight} kg

                            </div>

                        </div>
                        <div className="col-4">
                            <div className="row label">
                                HEIGHT

                            </div>
                            <div className="row data">
                                {player?.height} cm

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
}
export default PlayerView;