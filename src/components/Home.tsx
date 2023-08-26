import { useNavigate } from 'react-router-dom'

export default function Home() {
    
    const navigate = useNavigate()

    function startGame() {
        navigate('/game')
    }

    return (
        <div className="home">

            <div className='container center'>
                <button type='button' className='mainbtn' onClick={startGame}>Start Game</button>
            </div>

            <p className='rules'>
                There are 10 bombs hidden. You lose the game by clicking on one, you win the game by flagging all 10. The numbers indicate how many bombs are touching that tile.
            </p>
        </div>
    )
}