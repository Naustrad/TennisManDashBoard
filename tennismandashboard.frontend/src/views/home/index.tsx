import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerComponent from '../../components/player/player.components';
import { PLAYER_DETAILS_ROUTE } from '../../routes';
import { PlayerGeneral } from '../../services/player/player.model';
import { getAllPlayers } from '../../services/player/player.service';
import { statistics } from '../../services/statistic/statistic.model';
import { getStatistic } from '../../services/statistic/statistic.service';
import './home.scss'

const HomeView = () => {

    const [players, setPlayers] = useState<PlayerGeneral[]>([])
    const [search, setSearch] = useState<string>('');
    const [statistics, setStatistics] = useState<statistics>();
    const navigate = useNavigate();

    const fetchPlayers = async () => {
        const result = await getAllPlayers();
        setPlayers(result);
    }

    const fetchStatistic = async () => {
        const result = await getStatistic();
        setStatistics(result);

    }

    useEffect(() => {
        fetchPlayers();
        fetchStatistic();
    },[])

    const onSearch = (evt: any) => {
        setSearch(evt.target.value);
    }

    const isSearchResult = (player: PlayerGeneral) => {
        if (search == '')
            return true;

        if (player.firstname.toLowerCase().includes(search.toLowerCase())
            || player.lastname.toLowerCase().includes(search.toLowerCase())
            || player.countryCode.toLowerCase().includes(search.toLowerCase()))

            return true

        return false
    }

    return <div className='home '>

        <div className='row main-content'>
            <div className='row  '>
                <div className='col-xl-5 col-lg-6 col-md-12 search-input'>
                    <input type="text" placeholder='Rechercher un joueur' value={search} onChange={onSearch} />
                </div>
            </div>
            <div className='col-xl-5 col-lg-6 col-md-12  players'>
                <div className='scroll'>
                    {players && players.filter(x => isSearchResult(x)).map((player, index) =>
                        <div className='row player' onClick={() => navigate(PLAYER_DETAILS_ROUTE.replace(':id', player.id.toString()))}>
                            <PlayerComponent player={player} />
                        </div>
                    )}
                </div>

            </div>
            <div className='col-xl-7 col-lg-6 col-md-12 stats'>
                <div className='row country'>
                    <div className='col-6 label'>
                        Pays qui a le plus grand ratio de parties gagnées :
                    </div>
                    <div className='col-6 data'>
                        <h3> {statistics&&statistics.countryWithMostWinRation.code} </h3>
                        <img src={statistics?.countryWithMostWinRation.picture} alt="" />
                    </div>
                </div>
                <div className='row avg-bmi'>
                    <div className='col-6 label'>
                        IMC moyen de tous les joueurs :
                    </div>
                    <div className='col-6 data'>
                        <h3>{statistics?.playersAvgBMI.toFixed(2)}</h3>
                    </div>
                </div>
                <div className='row median-height'>
                    <div className='col-6 label'>
                        La médiane de la taille des joueurs :
                    </div>
                    <div className='col-6 data'>
                        <h3>{statistics?.playersMedianHeight} cm</h3>
                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default HomeView;