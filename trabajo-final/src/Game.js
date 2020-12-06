import { Link } from 'react-router-dom';
import './Game.css';

const Game = () => {
    return (
        <div className="Game">

            <div className="margin">
                <h1><Link to="/Home">Home</Link></h1>
            </div>

            <div className="score">
                <p>Player: 0</p>
                <p>PC: 0</p>
            </div>

            <button className="btn btn-dark margin"> Restart Game</button>

            <h1>Elegir movimiento</h1>
            <div className="movimientos margin-top">
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