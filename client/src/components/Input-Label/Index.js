import React from "react";
import './Input-label.css'

function Index({ label,type,value,onChange }) {
  return (
    <div
      style={{ margin: "5px", paddingLeft: "20px", paddingRight: "20px", width: "100%" }}
    >
      <div style={{ color: "#FFFFFF",fontFamily:'poppinsMedium',fontSize:'10pt' }}> {label} </div>
      <input value={value} onChange={onChange} className='form-input' style={{ width: "100%" }} type={type} />
    </div>
  );
}

export default Index;
