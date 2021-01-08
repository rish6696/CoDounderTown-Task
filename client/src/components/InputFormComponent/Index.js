import Button from "../Button";
import React from "react";
import InputLabel from "../Input-Label/Index";
import FLexLayout from "../FlexLayout";

export default function Index({ inputFields, btnText }) {
  return (
    <FLexLayout
      rowORColumn="column"
      style={{ backgroundColor: "#202027", width: "600px", padding: "20px" }}
      alignItem="center"
      justifyContent="center"
    >
      {inputFields.map((x, i) => {
        return <InputLabel key={i} label={x} />;
      })}
      <Button className="Button-Login" text={btnText} />
    </FLexLayout>
  );
}
