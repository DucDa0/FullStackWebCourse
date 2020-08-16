import React, {useState} from 'react';
import './ColorBox.scss'
ColorBox.propTypes = {
    
};

function ColorBox() {
    const [color, setColor]=useState(()=>{
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });

    function handleClick(){
        const newColor=getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }


    return (
        <div onClick={handleClick} className="color-box" style={{backgroundColor: color}}>
        </div>
    );
}

function getRandomColor(){
    const color_list=['deepink','green','black','blue','red','yellow'];
    const ramdomIndex=Math.trunc(Math.random()*5);//* trunc() lấy phần nguyên
    return color_list[ramdomIndex];
}


export default ColorBox;