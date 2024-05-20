import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import WordItems from './WorldItems';
import csvjson from './csvjson.json';


export const WordGame = () => {
    
    
    const [word  , setWord] = useState([]);  // เก็บข้อมูลคำศัพท์
    const [style , setStyle] = useState('text-green-400');
    const [level , setLevel] = useState('Easy') // เก็บเลเวล
    const navgate = useNavigate();
    const [keepNumber , setKeepNumber]  = useState([]);
    const [result , setResult] = useState(true) // ตัวดำเนินการเฉลบ
    const [score , setCore] = useState(0); //คะแนนที่ทำได้ อยู่ในระหว่างพัฒนายังไม่เสร็จ
    const CountNumber = useSelector((state)=> state.numberCount ); //นำข้อมูลจาก  redux มาใช้
    const dispatch = useDispatch(); //ส่งข้อมูลไป redux
    // นำข้อมูล คำศัพท์เข้ามา
    const WordNoun = csvjson.filter((e)=> e.pos == 'noun').map((e)=> e.headword)



    //Time เวลานับถอยหลัง
    let fixedTime = 30;
    let time = fixedTime;
    const [timeshow , setTimeshow] = useState(0);
    const timesup = async (data)=>{
        let inter
        setTimeshow(time)
        
        if (timeshow > 0 && timeshow < fixedTime ) {
            return false
        }else {
            inter = setInterval(() => {
               time--
               setTimeshow(time)
               // Time's up
               if (time <= 0) {
                   clearInterval(inter)
    
                   Swal.fire({
                       position: "center",
                       icon: "warning",
                       title: "Time's up!!",
                       showConfirmButton: false,
                       timer: 2000
                   });

                   setKeepNumber(data)

                   setTimeout(()=>{
                       time = fixedTime
                   },2000)

               }
           }, 1000);

           return true

        }


    }



    // radom word สุ่มคำศัพท์
    const RanDomNumber = async ()=>{
        let arr = []
        if (word.length > 0) {
            setWord([]);
        }

        // loop word  จำทะการลูปคำออกมา แสด
        for(let i = 0 ; i < CountNumber ;i++) {
            const math = Math.floor(Math.random() * WordNoun.length) //สุ่มเลข index
            arr = await [...arr , WordNoun[math]] // นำตัวเลขมาใส่ อินเด็ก แล้วเก็บไว้ในตัวแปร ar 
        }
        setWord(arr)
        setResult(true)


        // function time ใช้ฟังชั่น เวลา
       if(!timesup(arr)) {
        console.log('dd')
        window.location.href = '/game/word'
       }
       

    }



    useEffect(()=>{
        if (CountNumber <= 15)  {
            setStyle('text-green-400')
            setLevel("Easy")
        }else if (CountNumber > 15 && CountNumber < 30){
            setStyle("text-yellow-400")
            setLevel("Middle")

        }else {
            setLevel("Hard")
            setStyle("text-red-400")
        }
        if (CountNumber == 0) {
            setWord([])
        }
        
    },[CountNumber ,result])
    

  return (
    <div className='' style={{minHeight:'100vh',background:'#fff' ,
    marginTop:'4.5rem',borderRadius:'20px',padding:'20px'}} >
        <h1 className='p-2 text-4xl text-pink-600 font-bold'>Word Game</h1>
        <div className='flex gap-2 justify-center sm:justify-start flex-wrap    flex-col sm:flex-row'>
            <div className='p-2 border-2 border-slate-500 rounded-md'>
                <p className='font-bold text-lx text-slate-500'>number</p>
                <input type="text"  name=""  className='border-2 text-center font-bold text-xl border-black rounded-sm p-2 w-12/12  sm:w-auto p-4 rounded-md
                ' id="" 
                value={CountNumber <= 0 ? 0 : CountNumber} 
                />
            </div>
            <button className='p-2  shadow-md text-slate-50 rounded-md w-12/12 font-bold  sm:w-2/12 bg-green-600' onClick={()=> dispatch({type:'INCREMENT'})} >Increment</button>
            <button className='p-2  shadow-md text-slate-50 rounded-md w-12/12 font-bold sm:w-2/12 bg-red-600' onClick={()=> dispatch({type:'DECREMENT'})} >Decrement</button>
            <button className='p-2  shadow-md text-slate-50 rounded-md w-12/12 font-bold sm:w-2/12 bg-yellow-500' onClick={()=> dispatch({type:'CLEAR'})} >Clear</button>
            <button className='p-2 bg-slate-700 shadow-md text-slate-50 rounded-md w-12/12 font-bold sm:w-2/12 ' onClick={RanDomNumber}>Start</button>
        </div>
        <div className='level p-4 mt-4 flex flex-wrap gap-6 justify-between'>
            <h1 className={`text-4xl sm:text-left text-center font-bold ${style}`}>Level {level}</h1>
            <div className='flex gap-4 text-blue-600 text-3xl font-bold'>
                <p>Time</p>
                <p>{timeshow}</p>
            </div>
            {/* <div className='flex gap-4 text-green-600 text-3xl font-bold'>
                <p>Score</p>
                <p>{result ? 0 : score}</p>
            </div> */}
            <button className='p-2  shadow-md text-slate-50 
            rounded-md w-12/12 font-bold  sm:w-2/12 bg-green-600' onClick={()=> setResult(false)} >Answer</button>
        </div>
        <hr />
        <div className='show-game  flex gap-4 flex-wrap '>
            {word?.map((e,index)=>{
                return <WordItems 
                key={index} 
                time={timeshow} 
                data={e} 
                result={result}
                />
            })}
            
            
        </div>

    </div>
  )
}
