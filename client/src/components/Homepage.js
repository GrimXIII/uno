import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
                <img src={require('../assets/logo.png').default} width='200px' />
                <div className='homepage-form'>
                    <div className='homepage-join'>
                        <Link to={`/play?roomCode=Lobby1`}><button className="game-button green">Lobby1</button></Link>
                        <Link to={`/play?roomCode=Lobby2`}><button className="game-button green">Lobby2</button></Link>
                        <Link to={`/play?roomCode=Lobby3`}><button className="game-button green">Lobby3</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
