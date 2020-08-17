import {useState,useEffect, useRef} from 'react';

function randomColor(newColor){
    const COLOR_LIST=['green','blue','yellow','deeppink','black'];
    const currentIndex=COLOR_LIST.indexOf(newColor);
    let newIndex=currentIndex;
    while(newIndex===currentIndex){
        newIndex=Math.trunc(Math.random()*5);
    }
    return COLOR_LIST[newIndex];
}

function useColor() {
    const [color,setColor]=useState('transparent');
    const colorRef=useRef('transparent');

    useEffect(()=>{
        const colorInterval=setInterval(()=>{
            const newColor=randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current=newColor;
        },1000);

        return()=>{
            clearInterval(colorInterval)
        }
    },[])

    return color;
}

export default useColor;