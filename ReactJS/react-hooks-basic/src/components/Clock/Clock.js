import React from 'react';
import useClock from '../../hooks/useClock'

function Clock() {
    const {timeString}=useClock();
    return (
        <div>
            <p style={{fontSize: '42px'}}>{timeString}</p>
        </div>
    );
}
function BetterClock(){
    const {timeString}=useClock();
    return (
        <div>
            <p style={{fontSize: '42px',color: 'deeppink'}}>{timeString}</p>
        </div>
    );
}

export {Clock, BetterClock};