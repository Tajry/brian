import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Level = () => {
    const navgate = useNavigate();
    const {game} = useParams();

    const NextToGame = (e)=>{
        const url = `/game/${game}+${e.target.id}`
        // console.log(url)
        navgate(url)
        
    }
    

    useEffect(()=>{
       
    },[])


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-6 '>
        
        <div id='easy' className='bg-gradient-to-b from-green-300 to-green-400 
        rounded-lg shadow-lg  w-64 h-64 flex items-center justify-center hover:scale-110 font-bold ' 
        onClick={NextToGame}
        >
            easy
        </div>
        <div id="middle" className='bg-gradient-to-b from-amber-200 to-amber-300 
        rounded-lg shadow-lg  w-64 h-64 flex items-center justify-center hover:scale-110 font-bold ' 
        onClick={NextToGame}
        >
            middle
        </div>
        <div id='hard' className='bg-gradient-to-b from-red-300 to-red-400 
        rounded-lg shadow-lg  w-64 h-64 flex items-center justify-center hover:scale-110 font-bold ' 
        onClick={NextToGame}
        >
            hard
        </div>
    </div>
  )
}
