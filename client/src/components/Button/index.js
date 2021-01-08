import React from 'react'
import  './Button.css'


export default function _Button({ text,style,className='Button',onClick }){
    return(
        <button  onClick={onClick} className={className} style={style}  >
          {text}
        </button>
    )
}