import React from 'react';
import './MagicBox.scss'
import useColor from '../../hooks/useColor';
function MagicBox() {
    const color=useColor();
    return (
        <div className="magic-box" style={{backgroundColor: color}}>
        </div>
    );
}

export default MagicBox;