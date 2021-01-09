import React,{useEffect} from "react";
import Header from "../../components/Header/index";
import FlexLayout from "../../components/FlexLayout/index";
import MetaDataBlog from "../../components/MetaBlogComponent/MetaBlogComponent";
import Heading from "../../components/Headings/Index";
import { Redirect, withRouter } from "react-router-dom";
import AvatarDate from "../../components/Avatar-Date/AvatarDate";
import { connect } from "react-redux";
import { setWindowSize } from "../../Actions/index";
import TextArea from '../../components/TextArea/TextArea'

function BlogReadScreen(props) {
  document.body.style.paddingTop = "120px";
  document.body.style.overflow = "hidden";

  const { pageWidth }= props

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

  if (!props.location.blogDetails) {
    return <Redirect to="/" />;
  }

  const getBlogTextAreaWidth = () => {

    if (pageWidth < 994) {
      return {
        width: `${pageWidth}px`,
      };
    } else {
      return {
        width: `${pageWidth/2}px`,
      };
    }
  };

  

  const {
    heading,
    imgUrl,
    date,
    username,
    userProfileImg,
    blogText,
  } = props.location.blogDetails;

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Header />
      <FlexLayout rowORColumn="column" alignItem="center">
        <div   >
          <Heading style={{marginLeft:'30px'}} className="blog-read-heading" text={heading} />
          <AvatarDate style={{marginLeft:'30px'}} />
          <TextArea style={{...getBlogTextAreaWidth()}} />
        </div>
      </FlexLayout>
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
  
  export default connect(mapStateToProps, mapActionsToProps)(withRouter(BlogReadScreen))