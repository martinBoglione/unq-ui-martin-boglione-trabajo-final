import { Link } from 'react-router-dom';
import './Game.css';

const Game = () => {
    return (
        <div className="Game">
            <div>
                <h1>Opciones</h1>
                <i class="far fa-hand-rock"></i>
                <i class="far fa-hand-paper"></i>
                <i class="far fa-hand-scissors"></i>
                <i class="far fa-hand-spock"></i>
                <i class="far fa-hand-lizard"></i>
            </div>
            <div>
                <h1><Link to="/Home">HOME</Link></h1>
            </div>
        </div>


    )
}

export default Game;