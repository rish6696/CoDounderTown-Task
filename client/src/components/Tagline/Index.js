import React from "react";
import FLexLayout from "../FlexLayout";
import "./Tagline.css";
import { Link } from "react-router-dom";

import Button from "../Button/index";

function Index() {
  return (
    <FLexLayout
      alignItem="center"
      rowORColumn="column"
     
      className="tagline-container"
    >
      <div className="tagline-text">
        We smash you with the information <br /> that will make your life easier. Really.
      </div>

      <Link to='/blog' >
        <Button className="Button-Tagline" text="Start Reading" />
      </Link>
    </FLexLayout>
  );
}

export default Index;
