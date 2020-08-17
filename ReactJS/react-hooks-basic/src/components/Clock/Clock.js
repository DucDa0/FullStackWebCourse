import React,{useState,useEffect} from 'react';
// import PropTypes from 'prop-types';

// Clock.propTypes = {
    
// };
function formatDate(date){
    const hour=`0${date.getHours()}`.slice(-2);
    const minute=`0${date.getMinutes()}`.slice(-2);
    const seconds=`0${date.getSeconds()}`.slice(-2);
    return `${hour}:${minute}:${seconds}`;
}
function Clock(props) {
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
    return (
        <div>
            <p style={{fontSize: '42px'}}>{timeString}</p>
        </div>
    );
}

export default Clock;