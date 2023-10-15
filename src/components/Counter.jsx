'use client'

import React, {useState, useRef, useEffect} from 'react'
import { randomNumber } from '@/utils'

function Counter({speed, end, tag, className}) {
    end = end.replaceAll(",", "");
    end = Number(end);
    const [index, setIndex] = useState(0)
    const increment = useRef(speed === "slow" ? 2 : speed === "normal" ? 5 : 10)
    const stop = useRef(end || 100)
    const begin = randomNumber(4,20)+100;
    useEffect(() => {
        let timeout = null, timer = null;
        timeout = setTimeout(() => {
            timer = setInterval(() => {
                setIndex(prev => {
                    if(prev < stop.current){
                        return prev + increment.current;
                    }else{
                        clearInterval(timer);
                        clearTimeout(timeout);
                        return(`${prev > 999 ? prev.toString().toLocaleString() : prev}${tag}`)
                    }
                })
            })
        },begin)
        return () => {
            clearInterval(timer)
            clearTimeout(timeout)
        }
        //eslint-disable-next-line
    },[])
  return (
    <h2 className={`text-inherit ${className}`}>{index}</h2>

  )
}

export default Counter