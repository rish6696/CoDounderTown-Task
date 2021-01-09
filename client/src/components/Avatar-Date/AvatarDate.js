import React from "react";
import FLexLayout from "../FlexLayout";
import CircleComponent from "../CircleComponent/Index";
import Faker from "faker/locale/ar";
import { Image } from "react-bootstrap";
import './AvatarDate.css'
import Heading from '../Headings/Index'



export default function AvatarDate({style}) {

    const imgUrl=`https://miro.medium.com/fit/c/96/96/1*468th8heNDWf1fqX-Ws0Hw.jpeg`
  return (
    <FLexLayout rowORColumn="row" alignItem='center' style={{...style}}  >
      <Image style={{height:"50px",width:"50px"}} src={imgUrl} roundedCircle />

      <div  style={{marginLeft:'20px'}} >
          <Heading className='avatar-name' text='amer Buna in EdgeCoders' ></Heading>
          <Heading className='date-heading' text='Aug 18, 2017. 59 minutes read &#9733;' ></Heading>
      </div>
    </FLexLayout>
  );
}
