import React, { useEffect,useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import MetaDataBlog from "../../components/MetaBlogComponent/MetaBlogComponent";
import { connect } from "react-redux";
import { setWindowSize } from "../../Actions/index";
import FLexLayout from "../../components/FlexLayout";
import { setServerDown } from '../../Actions/index'
import { validateUser }  from '../../AuthorizeService'
import LoaderComponent from '../../components/Loader/Loader'




function BlogScreen(props) {


  const setServerDown = props.setServerDown

  document.body.style.overflow = "hidden";
  document.body.style.paddingTop = "120px";


  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState({
    userLoggedIn: false,
    userNameAlphabet: "",
  });

  const updateWindowSize = () => {
    props.setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();

    validateUser({setLoading,setAuthStatus,setServerDown});

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  },[]);

  if (loading) return <LoaderComponent/>;

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Header
        userNameAlphabet={authStatus.userNameAlphabet}
        userLoggedIn={authStatus.userLoggedIn}
      />
      <FLexLayout rowORColumn='column' alignItem='center' >
          <MetaDataBlog />
          <MetaDataBlog />
          <MetaDataBlog />
          <MetaDataBlog />
      </FLexLayout>
    </div>
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
  setServerDown
};

export default connect(mapStateToProps, mapActionsToProps)(BlogScreen);
