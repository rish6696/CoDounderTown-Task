import React, { useEffect, useState } from "react";
import BackGround from "../../components/BackgroundImage";
import { connect } from "react-redux";
import { setWindowSize } from "../../Actions/index";
import Header from "../../components/Header";
import Tagline from "../../components/Tagline/Index";
import { setServerDown } from "../../Actions/index";
import { validateUser }  from '../../AuthorizeService'
import LoaderComponent from '../../components/Loader/Loader'

function Index({ setServerDown, setWindowSize }) {

  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState({
    userLoggedIn: false,
    userNameAlphabet: "",
  });

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("mounted");
    window.addEventListener("resize", updateWindowSize);

  
    validateUser({setLoading,setAuthStatus,setServerDown});
    updateWindowSize();

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  },[]);


  if (loading) return <LoaderComponent/>;

  return (
    <>
      <BackGround />
      <Header
        userNameAlphabet={authStatus.userNameAlphabet}
        userLoggedIn={authStatus.userLoggedIn}
      />
      <Tagline />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pageWidth: state.pageWidth.value,
    setWindowSize,
  };
};

const mapActionsToProps = {
  setWindowSize: setWindowSize,
  setServerDown,
};

export default connect(mapStateToProps, mapActionsToProps)(Index);
