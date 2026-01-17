import { Container, Row, Col } from "react-bootstrap";
import styles from "./footer.module.scss";
import Social from "./social";

const Footer = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <Social />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
