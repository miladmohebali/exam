import React , { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from '../assets/play.mp3';

const Timer = ({setStop , questionNumber}) => {
    const [timer , setTimer] = useState(20);
    const [soundPlay] = useSound(play);

    useEffect(()=>{
        soundPlay();
    },[soundPlay]);

    useEffect(()=>{
        if(timer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(prev => prev - 1);
        },1000);
        return () => clearInterval(interval);
    },[setStop,timer]);
    useEffect(()=>{
        setTimer(20);
    },[questionNumber])
  return (
    timer
  )
}

export default Timer;
