import React,{useState,useEffect} from 'react';
function Test() {
    const [value,setValue]=useState(5);
    useEffect(()=>{
        console.log('a');
        if(value<=0) return;
        const valueInterval=setInterval(()=>{
            setValue(value-1);
        },1000)
        return ()=>{
            clearInterval(valueInterval)
        }
    },[value])
    return (
        <div style={{fontSize: '16px'}}>
            {value}
        </div>
    );
}

export default Test;