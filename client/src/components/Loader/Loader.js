import React from "react";
import Loader from "react-loader-spinner";
import FlexLayout from '../FlexLayout/index'

export default function _Loader() {

  return (
    <FlexLayout
      rowORColumn="column"
      style={{ height: "100vh" }}
      justifyContent="center"
      alignItem="center"
    >
      <Loader
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
      />
    </FlexLayout>
  );
}
