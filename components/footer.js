import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/gustavo-kei-amemiya-32270818b/?locale=en_US"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/gustavokei"
              target="blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>

            <a
              href="https://www.behance.net/gustavokei"
              target="blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faBehanceSquare} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
