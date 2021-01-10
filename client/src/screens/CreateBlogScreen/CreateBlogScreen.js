import React, { useEffect,useState } from "react";
import Header from "../../components/Header/index";
import FlexLayout from "../../components/FlexLayout/index";
import { connect } from "react-redux";
import { setWindowSize } from "../../Actions/index";
import { withRouter } from "react-router-dom";
import BlogInput from "../../components/BlogInput/BlogInput";
import InputBlogArea from "../../components/InputTextArea/InputTextArea";
import Button from '../../components/Button'
import { setServerDown } from "../../Actions/index";
import { validateUser }  from '../../AuthorizeService'
import LoaderComponent from '../../components/Loader/Loader'

function CreateBlogScreen(props) {
  document.body.style.overflow = "hidden";
  document.body.style.paddingTop = "120px";

  const updateWindowSize = () => {
    props.setWindowSize(window.innerWidth);
  };

  const setServerDown=props.setServerDown


  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState({
    userLoggedIn: false,
    userNameAlphabet: "",
  });

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();

    validateUser({setLoading,setAuthStatus,setServerDown});

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const pageWidth = props.pageWidth;

  

  const getInputAreaWidth = () => {
    if (pageWidth < 994) {
      return {
        width: `${pageWidth}px`,
      };
    } else {
      return {
        width: `${pageWidth / 2}px`,
      };
    }
  };


  if (loading) return <LoaderComponent/>;

  return (
    <div>
       <Header
        userNameAlphabet={authStatus.userNameAlphabet}
        userLoggedIn={authStatus.userLoggedIn}
      />
      <FlexLayout rowORColumn="column" alignItem="center" justifyContent="center">
        <div>
          <FlexLayout
            rowORColumn="row"
            justifyContent="end"
            style={{ marginRight: "10px", padding: "5px" }}
          >
            <Button className="Button-Tagline" text="Publish" />

          </FlexLayout>
          <BlogInput
            placeHolder="Title"
            style={{ ...getInputAreaWidth() }}
            className="blog-input"
          />
          <div style={{ height: "500px", overflowY: "scroll" }}>
            <InputBlogArea
              style={{ overflow: "hidden", ...getInputAreaWidth() }}
              className="input-text-area"
              placeHolder="Your Story...."
            />
          </div>
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
  setServerDown
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(CreateBlogScreen));
