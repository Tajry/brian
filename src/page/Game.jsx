import React from 'react'
import { Routes , Route, useParams } from 'react-router-dom'
import { Home } from './Home'
import { Header } from '../component/Header'
import background from '../assets/background.png'
import { Level } from './Level'
import { useDispatch , useSelector } from 'react-redux'
import { NumberGame } from './number/NumberGame'
import { WordGame } from './word/WordGame'


export const Game = () => {

    const {search} = useParams();
    let page;
    if (search == 'number') {
        page = <NumberGame />
    }else if (search == 'word') {
        page = <WordGame />
    }else {
        
    }


  return (
    <div className="  bg-[url('./assets/background.png')] rounded-md " style={{padding:'10px'}}>
        <Header />
        {page}
    </div>
        
    
  )
}
