import React from "react";
import './Heading.style.css'

export default function Index({className,text,style}) {
  return (
    <div style={{...style}}  className={className}>
      {text}
    </div>
  );
}
