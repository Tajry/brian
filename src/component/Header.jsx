import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='bg-slate-500 z-50 p-2 bg-opacity-60 fixed top-0 left-0 w-screen shadow-xl '>
        <Link>
            <img src={logo} alt="logo brain" width={50}  className='' />
        </Link>

    </div>
  )
}
