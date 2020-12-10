import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./../../styles.module.scss";

const Exp = () => {
  return (
    <Row className={"pt-5 pb-5 " + styles.customRow}>
      <Col xs="10">
        <h3 className={styles.title}>My Experience!</h3>
        <p>This will be my timeline.</p>
      </Col>
    </Row>
  );
};

export default Exp;
