import React from "react";
import FLexLayout from "../FlexLayout";

export default function CircleComponent({ children, radius ,style ,className }) {
  return (
    <FLexLayout
      style={{ height: radius, width: radius, borderRadius: "50%",...style }}
      justifyContent="center"
      alignItem="center"
      className={className}
    >
      {children}
    </FLexLayout>
  );
}
