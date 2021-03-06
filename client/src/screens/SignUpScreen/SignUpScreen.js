import React from "react";
import BrandLogo from "../../components/BrandLogo/Index";
import FLexLayout from "../../components/FlexLayout";
import Heading from "../../components/Headings/Index";
import { Col, Container, Image, Row } from "react-bootstrap";
import InputFormComponent from "../../components/InputFormComponent/Index";
import {Link} from 'react-router-dom'



export default function Index() {

    document.body.style.paddingTop= "0px"

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "#2F303A" }}>
        <BrandLogo />
        <FLexLayout
          style={{ color: "white" }}
          alignItem="center"
          justifyContent="center"
          rowORColumn="column"
        >
          <Heading text={"Sign Up"} className="auth-heading" />
          <p style={{ margin: "20px" }} className="auth-sub-heading" >Already have an account ?  <Link to='/login'> Login </Link></p>
        </FLexLayout>

        <Container fluid>
          <Row id={"form-container"}>
            <Col style={{ borderRight: "1px solid #FFFFFF", padding: "20px" }}>
              <FLexLayout style={{ alignItem: "center", justifyContent: "center" }}>
                <InputFormComponent
                  isLogin={false}
                  btnText="Sign Up"
                  inputFields={["Name","Email","Password","Re-enter password"]}
                ></InputFormComponent>
              </FLexLayout>
            </Col>

            <Col>
              <FLexLayout
                style={{ height: "100%" }}
                rowORColumn="row"
                justifyContent="center"
                alignItem="center"
              >
                <Image
                  className="google-btn"
                  src="/googleButton.svg"
                  style={{ margin: "15px" }}
                />
              </FLexLayout>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}


