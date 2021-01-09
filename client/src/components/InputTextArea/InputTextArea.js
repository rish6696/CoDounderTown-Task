import React from "react";
import "./InputTextArea.css";

export default function InputTextArea({ className, placeHolder, style }) {
  return (
    <div>
      <textarea
        placeholder={placeHolder}
        className={className}
        style={{ ...style }}
        type="text"
      />
    </div>
  );
}
