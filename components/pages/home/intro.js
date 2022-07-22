import React from "react";
import { Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <Row className="pt-5 pb-5 customRow">
      <Col xs="10">
        <h1 className="title">My name is Gustavo Kei Amemiya</h1>
        <p>
          I have been working as a web developer since 2016 while having a
          Brazilian Bachelor Degree in Web Design (2018) and a Canadian Graduate
          Certificate in Web Design and Development (2021) with high
          distinction.
        </p>
        <p>ReactJS and NodeJS are currently my favourite libraries!</p>
      </Col>
    </Row>
  );
};

export default Intro;
