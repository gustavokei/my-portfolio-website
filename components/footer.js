import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <div className={styles.social}>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
