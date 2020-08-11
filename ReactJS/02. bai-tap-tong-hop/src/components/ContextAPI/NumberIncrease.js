import React, {useContext} from 'react';
import {NumberContexts} from '../ContextAPI/NumberProvider'

 export default function NumberIncrease(){
     const {number, updateNumber}=useContext(NumberContexts);
     return (
        <div>
            <h1>{number}</h1>
            <button onClick={updateNumber}>Update number</button>
        </div>
     )
 }