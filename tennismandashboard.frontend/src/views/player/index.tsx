import { useParams } from "react-router-dom";

const PlayerView = () =>{
    const {id} = useParams();
    return <div>
        player {id}
    </div>
}
export default PlayerView;