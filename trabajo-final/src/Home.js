import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">

      <div className="margin">
        <h1>Bienvenido a </h1>
        <h2>¡Piedra, Papel, Tijera, Lagarto o Spock!</h2>
      </div>

      <div className="margin">
        <h1>Reglas</h1>
        <h5>
          <ul>
            <li>Tijera corta a Papel</li>
            <li>Papel tapa a Piedra</li>
            <li> Piedra aplasta a Lagarto</li>
            <li>Lagarto envenena a Spock</li>
            <li>Spock rompe a Tijera</li>
            <li>Tijera decapita a Lagarto</li>
            <li>Lagarto devora a Papel</li>
            <li>Papel desautoriza a Spock</li>
            <li>Spock vaporiza a Piedra</li>
            <li>Piedra aplasta a Tijera</li>
          </ul>
        </h5>

      </div>

      <div>
        <h1><Link to="/Game">Ir al Juego</Link></h1>
      </div>

    </div>
  );
}

export default Home;
