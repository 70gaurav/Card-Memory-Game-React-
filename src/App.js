import React from 'react'
import Home from './Home'
import Game from './Game'
import "./Game.css"
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/Game' element={<Game/>}> </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App