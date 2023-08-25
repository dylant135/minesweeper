import { useNavigate } from 'react-router-dom'

export default function Home() {
    
    const navigate = useNavigate()

    function startGame() {
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