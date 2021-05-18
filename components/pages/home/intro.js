import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./../../styles.module.scss";

const Intro = () => {
  return (
    <Row className={"pt-5 pb-5 " + styles.customRow}>
      <Col xs="10">
        <h1 className={styles.title}>My name is Gustavo Kei Amemiya</h1>
        <p>
          I am a full stack web developer from Brazil. I worked as a web
          developer for around 4 years, while having a Brazilian Bachelor Degree
          in Web Design (2018), and a Canadian Graduate Certificate in Web
          Design and Development (2021).
        </p>
        <p>ReactJS and NodeJS are currently my favourite libraries!</p>
      </Col>
    </Row>
  );
};

export default Intro;
