import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { gameContext } from "../GameContext";

export default function Home() {
    
    const navigate = useNavigate()
    const { setIsReady } = useContext(gameContext)

    function startGame() {
        setIsReady(true)
        navigate('/game')
    }

    return (
        <div className="home">
            <h1 className="center">MineSweeper</h1>

            <div className='container center'>
                <button type='button' onClick={startGame}>Start Game</button>
            </div>
        </div>
    )
}