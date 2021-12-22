import React from "react";
import { CardImg, CardTitle, Row, Col, CardBody } from "reactstrap";
import aman from "./Asset/aman.jpg";
import mohit from "./Asset/mohit.jpg";
import "../index.css";

function About() {
  return (
    <div className="container page">
      <h1 className="mt-4">About Us</h1>
      <div className="mt-5">
        
        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src={aman} />
            <CardBody>
              <CardTitle>
                <strong class="name">Aman Bisht</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/aman-bisht-ba1934182/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  {/* <a href="https://twitter.com/AmanYad64272121" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "} */}
                  &nbsp;
                  <a href="https://github.com/AmanBisht01" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>

          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src={mohit}/>
            <CardBody>
              <CardTitle>
                <strong class="name">Mohit bajaj</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  {/* <a href="https://twitter.com/NikhilSachan17" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "} */}
                  &nbsp;
                  <a href="https://github.com/" title="GitHub">
                    {" "}
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>
          
        </Row>

        
      </div>
    </div>
  );
}

export default About;
