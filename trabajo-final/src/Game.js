import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';
import Modal from "react-modal";


const Game = () => {

    const movimientos = ["Piedra", "Papel", "Tijera", "Spock", "Lagarto"];

    const [player, setMovimientoPlayer] = useState("");
    const [pc, setPc] = useState("");
    var [puntosPlayer,setPuntosPlayer] = useState(0);
    var [puntosPC,setPuntosPC] = useState(0);
    
    //Modal
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }



    const startGame = () => {
        setIsOpen(!isOpen);
        const movi = movimientos[Math.floor(Math.random() * movimientos.length)];
        setPc(movi);
        sumarPuntos()
    }

    const restartGame = () => {
        setPuntosPlayer(0);
        setPuntosPC(0);
    }

    function sumarPuntos() {
        if(verGanador() === "Ganaste") {
            setPuntosPlayer(puntosPlayer + 1)
        } else if (verGanador() === "Perdiste") {
            setPuntosPC(puntosPC + 1)
        }
    }

    const verGanador = () => {
        if (player === pc || (pc.length === 0) || player.length === 0) {
            return ("Empataste")
        } else if (
            (player === "Piedra" && pc === "Tijera") ||
            (player === "Tijera" && pc === "Papel") ||
            (player === "Papel" && pc === "Piedra") ||
            (player === "Piedra" && pc === "Lagarto") ||
            (player === "Lagarto" && pc === "Spock") ||
            (player === "Spock" && pc === "Tijera") ||
            (player === "Tijera" && pc === "Lagarto") ||
            (player === "Lagarto" && pc === "Papel") ||
            (player === "Papel" && pc === "Spock") ||
            (player === "Spock" && pc === "Piedra")
        ) {
            return ("Ganaste")
        } else {
            return "Perdiste"
        }

    }


    const elegirPiedra = () => {
        setMovimientoPlayer("Piedra")
    }

    const elegirPapel = () => {
        setMovimientoPlayer("Papel")
    }

    const elegirTijera = () => {
        setMovimientoPlayer("Tijera")
    }

    const elegirSpock = () => {
        setMovimientoPlayer("Spock")
    }

    const elegirLagarto = () => {
        setMovimientoPlayer("Lagarto")
    }

    return (

        <div className="Game">


            <div className="margin">
                <h1><Link to="/Home">Inicio</Link></h1>
            </div>

            <div className="score">
                <p>Jugador: {puntosPlayer}</p>
                <p>PC: {puntosPC}</p>
            </div>

            <button onClick={restartGame} className="btn btn-danger margin"> Reiniciar Juego</button>

            <h1>Elegir movimiento</h1>
            <div className="movimientos margin-top margin">
                <i onClick={elegirPiedra} className="fas fa-hand-rock fa-10x"></i>
                <i onClick={elegirPapel} className="fas fa-hand-paper fa-10x"></i>
                <i onClick={elegirTijera} className="fas fa-hand-scissors fa-10x"></i>
                <i onClick={elegirSpock} className="fas fa-hand-spock fa-10x"></i>
                <i onClick={elegirLagarto} className="fas fa-hand-lizard fa-10x"></i>
            </div>

            <button onClick={startGame} className="btn btn-success btn-lg"> Jugar</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="margin center">
                    <h3>
                        <div>Jugador: {player}</div>
                        <div>PC: {pc}</div>
                        <div>{verGanador()}</div>
                    </h3>
                </div>
                <div className="text-center">
                    <button className="btn btn-dark" onClick={toggleModal}>Cerrar</button>
                </div>

            </Modal>

        </div>
    )
}

export default Game;