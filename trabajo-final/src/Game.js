import { Link } from 'react-router-dom';
import './Game.css';

const Game = () => {
    return (
        <div className="Game">
            <div>
                <h1><Link to="/Home">Home</Link></h1>
            </div>
            <div>
                <p>Player: 0</p>
                <p>PC: 0</p>
            </div>


            <button className="btn btn-dark"> Restart Game</button>
            <div>
                <h1>Elegir movimiento</h1>
                <i class="fas fa-hand-rock fa-10x"></i>
                <i class="fas fa-hand-paper fa-10x"></i>
                <i class="fas fa-hand-scissors fa-10x"></i>
                <i class="fas fa-hand-spock fa-10x"></i>
                <i class="fas fa-hand-lizard fa-10x"></i>
            </div>
        </div>
    )
}

export default Game;