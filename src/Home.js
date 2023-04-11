import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()
  return (
    <div className='wrapper'>
        <button className='start' onClick={() => {navigate("/Game")}}>Start Game</button>
        

    </div>
  )
}

export default Home