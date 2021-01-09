import React from "react";
import "./BlogInput.css";

export default function BlogInput({ style, className, placeHolder }) {
  return (
    <input
      placeholder={placeHolder}
      className={className}
      style={{ ...style }}
      type="text"
    />
  );
}
