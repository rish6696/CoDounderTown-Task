import React from "react";



export default function FLexLayout({style, justifyContent, rowORColumn, alignItem, onClick,children,className}) {
  return (
    <div

      style={{ ...style }}
      className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent} ${className}`}
    >
      {children}
    </div>
  );
}

