import React, { useEffect, useState } from 'react'

const NumberItems = ({data , time ,result }) => {

    const [closeNumber , setCloseNumber] = useState(true);
    const [textStyle  , setTextStyle ]  = useState('text-slate-400');
    const checkNumber = (e)=>{
        
        if (e.target.value == data) {
           
            setTextStyle('text-green-400')
        }else {
            setTextStyle('text-red-400')
        }
    }

    const close = <p className='absolute w-full h-full top-0 left-0 bg-blue-300 shadow-md rounded-md
    flex items-center p-2 '>
        <input type="number" className='w-full border-b-2 border-blue-900 text-center
        focus:outline-0 text-slate-50' min={0} max={9} maxLength={1} style={{background:'none'}}
        onChange={checkNumber}
        />
    </p>

    useEffect(()=>{
        if (time <= 0 ) {
            setCloseNumber(false)
        }

        if(result) {

        }else {
            setCloseNumber(true)
        }
        
        

    },[time ,result ])


  return (
    <p className={`p-6 relative m-2 text-5xl font-bold ${textStyle}`}>
        {closeNumber  ? '' : close   }
        {data}
        
    </p>
  )
}

export default NumberItems