import React from "react";
import { Image } from "react-bootstrap";
import FLexLayout from "../FlexLayout/index";
import Heading from '../Headings/Index'
import  './ServerDown.css'

export default function ServerDownComponent() {

    document.body.style.padding="0px"
  return (
    <FLexLayout rowORColumn='column' style={{ height: "100vh" }} justifyContent="center" alignItem="center">
      <Image className="server-down-image" src="/undraw_server_down_s4lk.svg"></Image>
      <Heading className='blog-read-heading' text='Server Down' />
    </FLexLayout>
  );
}
