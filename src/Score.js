import React from 'react'
import { useNavigate } from 'react-router-dom'

function Score() {
    const navigate = useNavigate()
  return (
    <div className='score'><h1>You have completed the game Successfully</h1>
    <button onClick={() => {navigate("/")}}>Play Again</button>
    </div>
  )
}

export default Score