import React,{useEffect, useState} from "react";
import BackGround from "../../components/BackgroundImage";
import { connect } from "react-redux";
import { setWindowSize } from '../../Actions/index'
import Header from '../../components/Header'
import Tagline from '../../components/Tagline/Index'
import { AuthService } from '../../AuthorizeService'

function Index(props) {

 const updateWindowSize=()=>{
    props.setWindowSize(window.innerWidth)
 }

  useEffect(()=>{
    console.log('mountd')
    window.addEventListener("resize", updateWindowSize);

    const validateUser=async()=>{
        try {
          const res = await AuthService()
          console.log(res)
        } catch (error) {
          console.log("error ",error.request)
          console.log(error.response)
        }
    }
    validateUser()
    updateWindowSize()
   
   
     return () => {
       window.removeEventListener("resize", updateWindowSize);
     };
  },[])

  // useEffect(() => {
  //  window.addEventListener("resize", updateWindowSize);
  //  updateWindowSize()
  
  
  //   return () => {
  //     window.removeEventListener("resize", updateWindowSize);
  //   };

  // });


  return (

    <>
      <BackGround />
      <Header/>
      <Tagline/>
    </>
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

export default connect(mapStateToProps,mapActionsToProps)(Index);
