import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerComponent from '../../components/player/player.components';
import { PLAYER_DETAILS_ROUTE } from '../../routes';
import { PlayerGeneral } from '../../services/player/player.model';
import { getAllPlayers } from '../../services/player/player.service';
import Config from '../../utils/Config';
import './home.scss'

const HomeView = () => {

    const [players, setPlayers] = useState<PlayerGeneral[]>([])
    const [search,setSearch] = useState<string>('');
    const navigate = useNavigate();

    const fetchPlayers = async () => {
        const result = await getAllPlayers();
        setPlayers(result);
    }

    useEffect(() => {
        fetchPlayers();
    })

    const onSearch=(evt:any)=>{
        setSearch(evt.target.value);
    }

    const isSearchResult=(player : PlayerGeneral)=>{
        if(search=='')
            return true;

        if(player.firstname.toLowerCase().includes(search.toLowerCase())
            || player.lastname.toLowerCase().includes(search.toLowerCase())
            || player.countryCode.toLowerCase().includes(search.toLowerCase()) )

            return true
            
        return false
    }

    return <div className='home '>
        
        <div className='row main-content'>
        <div className='row  '>
            <div className='col-4 search-input'>
                <input type="text" placeholder='Rechercher un joueur' value={search} onChange={onSearch} />
            </div>
        </div>
        <div className='col-4 players'>
            {players && players.filter(x=>isSearchResult(x)).map((player, index) => 
                <div className='row player' onClick={()=>navigate(PLAYER_DETAILS_ROUTE.replace(':id',player.id.toString()))}>
                    <PlayerComponent player={player} />
                </div> 
            )}
        </div>

        </div>
       
    </div>
}
export default HomeView;