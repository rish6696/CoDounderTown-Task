import React, { useState } from "react";
import Button from "../Button";
import FLexLayout from "../FlexLayout";
import SidePane from "../SidePane/index";
import { connect } from "react-redux";
import "./Header.css";
import Circle from "../CircleComponent/Index";
import { Dropdown } from "react-bootstrap";
import UserIcon from "../UserIcon/Index";
import { withRouter } from "react-router-dom";
import BrandLogo from '../BrandLogo/Index'

const Header = ({ pageWidth, history,userNameAlphabet,userLoggedIn }) => {
  const [showSideBar, setSideBarActive] = useState(false);

  

  const handleClick = () => {
    setSideBarActive(!showSideBar);
  };

  const getHeaderMenu = () => {
    if (userLoggedIn) {
      return <UserIcon userNameAlphabet={userNameAlphabet} />;
    } else {
      if (pageWidth < 800) {
        return (
          <div style={{ padding: "10px" }}>
            <img
              src="/menu.svg"
              className="menu"
              alt="React Bootstrap Logo"
              onClick={handleClick}
            />
          </div>
        );
      } else {
        return (
          <FLexLayout rowORColumn="row" style={{ marginRight: "60px" }}>
            <Button
              text="Login"
              className="Button-Auth"
              onClick={() => history.push("/login")}
            />
            <Button
              text="Sign Up"
              className="Button-Auth"
              onClick={() => history.push("/signup")}
            />
          </FLexLayout>
        );
      }
    }
  };

  return (
    <div className="header">
      {showSideBar && (
        <SidePane
          onClickOutSide={handleClick}
          show={true}
          active={showSideBar}
        ></SidePane>
      )}

      <FLexLayout
        rowORColumn="row"
        justifyContent="between"
        style={{
          height: "60px",
          color: "wheat",
          padding: "10px",
        }}
      >
        <BrandLogo/>
        {getHeaderMenu()}
      </FLexLayout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageWidth: state.pageWidth.value,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
