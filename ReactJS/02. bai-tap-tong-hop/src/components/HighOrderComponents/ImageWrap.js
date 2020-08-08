import React from 'react'

export default function({src, width = 500, height = 300}){
    const style={
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        borderRadius: `10px`
    }
    return(
        <div className="ImageWrap" style={style}></div>
    )
}
