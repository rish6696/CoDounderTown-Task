import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import MetaDataBlog from "../../components/MetaBlogComponent/MetaBlogComponent";
import { connect } from "react-redux";
import { setWindowSize } from "../../Actions/index";
import FLexLayout from "../../components/FlexLayout";

function BlogScreen(props) {
  document.body.style.overflow = "hidden";
  document.body.style.paddingTop = "120px";

  const updateWindowSize = () => {
    props.setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Header />
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
};

export default connect(mapStateToProps, mapActionsToProps)(BlogScreen);
