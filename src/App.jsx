import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import { Login } from './page/Login'
import { Index } from './page/Index'
import { Game } from './page/Game'
function App() {

  return (
    <Routes>
        <Route  path='/*' element={<Index />} />
        <Route  path='/game/:search' element={<Game />} />
        <Route  path='/signin' element={<Login />} />
    </Routes>
  )
}

export default App
