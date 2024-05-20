import React from 'react'
import wordimg from '../assets/wordImg.png';
import numberimg from '../assets/numberImg.png';
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-6 '>
        <Link className='sm:text-xl text-slate-900 font-bold' to={'/game/number'}>
            <div className='bg-gradient-to-b from-amber-300 to-amber-400 
            rounded-lg shadow-lg  w-64 h-64 flex flex-col  items-center justify-center hover:scale-110 '>
                <img src={numberimg} width={100} className="rounded-xl"  alt="" />
                number
            </div>
        </Link>
        <Link className='sm:text-xl text-slate-900 font-bold' to={'/game/word'}>
            <div className='bg-gradient-to-b from-amber-300 to-amber-400 
            rounded-lg shadow-lg  w-64 h-64 flex flex-col items-center justify-center hover:scale-110 '>
                <img src={wordimg}   width={100}  alt="" />
                word
            </div>
        </Link>
        <Link className='sm:text-xl text-slate-900 font-bold' to={'/'}>
            <div className='bg-gradient-to-b from-amber-300 to-amber-400 
            rounded-lg shadow-lg  w-64 h-64 flex items-center justify-center hover:scale-110 '>
                card
            </div>
        </Link>
    </div>
  )
}
