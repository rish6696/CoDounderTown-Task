import React from "react";
import { connect } from "react-redux";
import { setWindowSize } from '../../Actions/index'
import { Image } from "react-bootstrap";
import './Image.css'

function BackGround({pageWidth}) {

  return (
    <Image
      className='background-image'
      src={pageWidth > 640 ?'pencil.jpg':'pencil-small.jpg'}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    pageWidth: state.pageWidth.value,setWindowSize
  };
};

const mapActionsToProps={
  setWindowSize:setWindowSize
}

export default connect(mapStateToProps,mapActionsToProps)(BackGround);

