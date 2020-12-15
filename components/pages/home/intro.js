import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./../../styles.module.scss";
import Flags from "country-flag-icons/react/3x2";

const Intro = () => {
  return (
    <Row className={"pt-5 pb-5 " + styles.customRow}>
      <Col xs="10">
        <h1 className={styles.title}>My name is Gustavo Kei!</h1>
        <p>
          I am a full stack web developer from Brazil. I worked as a web
          developer for around 3 years, while having a{" "}
          <Flags.BR title="Brazil" className={styles.flag} /> bachelor degree in
          Web Design (2018), and a{" "}
          <Flags.CA title="Canada" className={styles.flag} /> post graduate
          degree in Web Design and Development (2021)
        </p>
        <p>
          ReactJS and NodeJS are currently my favourite libraries and my best
          project is gc-app-caps
        </p>
      </Col>
    </Row>
  );
};

export default Intro;
