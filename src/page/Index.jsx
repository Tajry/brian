import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Home } from './Home'
import { Header } from '../component/Header'
import background from '../assets/background.png'
import { Level } from './Level'
export const Index = () => {
  return (
    <div className="w-screen  bg-[url('./assets/background.png')] font-sans">
        <Header />
        <div className='p-2 pt-28 sm:pt-0 sm:h-screen   h-auto w-screen flex justify-center items-center me-0 flex-col '>
            <div className='content text-center grid p-10 gap-4'>
                <h1 className='text-2xl text-slate-50 sm:text-4xl'>Train your memory into pictures.</h1>
                <p className='text-slate-600 bg-slate-50 p-2 rounded-md'>Increase memory skills with the game of your choice</p>
            </div>
            <Routes>
           
                <Route path='/'  element={<Home />} />
            </Routes>
        </div>
    </div>
        
    
  )
}
