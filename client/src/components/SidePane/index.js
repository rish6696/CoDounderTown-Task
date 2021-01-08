import React, { Component, Ref } from "react";
import onClickOutside from "react-onclickoutside";
import Button from "../Button";
import FLexLayout from "../FlexLayout";
import { withRouter}  from 'react-router-dom'

class SidePane extends React.Component {
  handleClickOutside = (evt) => {
    const { onClickOutSide } = this.props;
    onClickOutSide();
  };

  render() {
    const { show, active, onClickOutSide,history } = this.props;

    return (
      <FLexLayout
        rowORColumn="column"
        alignItem='center'
        style={{
          display: show ? "flex" : "none",
          width: "300px",
          height: "100vh",
          backgroundColor: "#F9F9F9",
          position: "fixed",
          top: "0px",
          right: active ? "0px" : "-100%",
          transition: "1250ms",
        }}
      >
        <Button
          text="Login"
          className="Button-Auth"
          onClick={() => history.push("/login")}
          style={{marginTop:'20px'}}
        />
        <Button
          text="Sign Up"
          className="Button-Auth"
          onClick={() => history.push("/signup")}
          style={{marginTop:'20px'}}
        />
      </FLexLayout>
    );
  }
}

export default withRouter(onClickOutside(SidePane));
