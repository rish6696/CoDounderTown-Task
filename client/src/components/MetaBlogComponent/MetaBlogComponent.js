import React from "react";
import AvatarDate from '../Avatar-Date/AvatarDate'
import { Row,Col,Image }  from 'react-bootstrap'
import Heading from '../../components/Headings/Index'

export default function MetaBlogComponent() {
  return (
    <Row style={{borderBottom:'1px solid #ebebeb',padding:'20px'}} >
      <Col  >
         <AvatarDate></AvatarDate>
         <Image style={{marginTop:'50px'}} src='https://cdn-images-1.medium.com/fit/t/800/240/1*mJ-qdNqldpgae2U5oS0qDg.png'  ></Image>
         <Heading className='heading-blog' text='I created the exact same app in React and Vue. Here are the differences.' ></Heading>
         <Heading style={{fontSize:"20px",marginTop:'20px'}} className='date-heading' text='Read More...' ></Heading>
         <Image style={{marginTop:'10px',height:'35px',width:'35px'}} src='thumb-up.svg'  ></Image>

      </Col>
    </Row>
  );
}
