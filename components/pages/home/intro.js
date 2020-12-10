import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./../../styles.module.scss";

const Intro = () => {
  return (
    <Row className={"pt-5 pb-5 " + styles.customRow}>
      <Col xs="10">
        <h3 className={styles.title}>Hello, I'm Gustavo!</h3>
        <p>
          I'm a full stack web developer from Brazil. I worked as a web
          developer engineer for around 3 years, while having a 🇧🇷 bachelor
          degree in Web Design (2018), and a 🇨🇦 graduate degree in Web Design
          and Development (2020).
        </p>
        <p>
          ReactJS and NodeJS are currently my favourite libraries and my best
          project is gc-app-caps.
        </p>
      </Col>
    </Row>
  );
};

export default Intro;
