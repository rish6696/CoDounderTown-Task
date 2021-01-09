import React from "react";
import AvatarDate from "../Avatar-Date/AvatarDate";
import { Row, Col, Image } from "react-bootstrap";
import Heading from "../../components/Headings/Index";
import { Link } from "react-router-dom";
import "./MetaBlog.css";
import { connect } from "react-redux";

function MetaBlogComponent({ pageWidth, blogDetails }) {
  const getBlogImageWidth = () => {
    if (pageWidth < 994) {
      return {
        width: `${pageWidth - 40}px`,
      };
    } else {
      return {
        width: `${800}px`,
      };
    }
  };

  const routeParams = {
    pathname: "/blog/read/987",
    blogDetails: {
      heading: "The Missing Introduction to React",
      imgUrl: "qwdqdw",
      date: "qwdqdw",
      username:'qwdqdw',
      userProfileImg:'qwdqdw',
      blogText:'qwdqdw',
    },
  };

  return (
    <div style={{ borderBottom: "1px solid #ebebeb", padding: "20px" }}>
      <div className="blog-card">
        <Link to={routeParams}>
          <AvatarDate></AvatarDate>
          <Image
            style={{ marginTop: "50px", ...getBlogImageWidth() }}
            src="https://cdn-images-1.medium.com/fit/t/800/240/1*mJ-qdNqldpgae2U5oS0qDg.png"
          ></Image>
          <Heading
            className="heading-blog"
            style={{ ...getBlogImageWidth() }}
            text="I created the exact same app in React and Vue. Here are the differences."
          ></Heading>
          <Heading
            style={{ fontSize: "20px", marginTop: "20px" }}
            className="date-heading"
            text="Read More..."
          ></Heading>
          <Image
            style={{ marginTop: "10px", height: "35px", width: "35px" }}
            src="thumb-up.svg"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pageWidth: state.pageWidth.value,
  };
};
export default connect(mapStateToProps)(MetaBlogComponent);
