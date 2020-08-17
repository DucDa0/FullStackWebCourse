import {useState,useEffect} from 'react';
function formatDate(date){
    const hour=`0${date.getHours()}`.slice(-2);
    const minute=`0${date.getMinutes()}`.slice(-2);
    const seconds=`0${date.getSeconds()}`.slice(-2);
    return `${hour}:${minute}:${seconds}`;
}
function useClock() {//* Custom hook, trả về dữ liệu, sử dụng khi cần thay đổi UI, mà UI này đc sử dụng ở nhiều nơi
    const [timeString, setTimeString]=useState('');
    useEffect(()=>{
        const clock = setInterval(()=>{
            const now = new Date();
            const newTimeString=formatDate(now);
            setTimeString(newTimeString);
        },1000);
        return ()=>{
            clearInterval(clock);
        }
    },[])
    return {timeString};
}
export default useClock;