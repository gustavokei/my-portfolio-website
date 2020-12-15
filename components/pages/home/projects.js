import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./../../styles.module.scss";

const Projects = () => {
  return (
    <Row className={"pb-5 " + styles.customRow}>
      <Col xs="10" className={styles.customCol}>
        <h3 className={styles.title}>Featured Projects</h3>
        <div className="card-columns">
          <a
            href="https://github.com/gustavokei/gc-app-caps"
            target="_blank"
            className={styles.customLink}
          >
            <Card bg="dark" className={styles.card}>
              <Card.Img
                alt="orange hair and silver sword."
                variant="top"
                src="project1.jpg"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Soluna Front
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/gc-app-caps
                </Card.Subtitle>
                <Card.Text>
                  A CRUD NextJS webapp developed using ReactJS's Hooks and
                  Context API + only function components
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <a
            href="https://github.com/gustavokei/gc-dportal-caps"
            target="_blank"
            className={styles.customLink}
          >
            <Card bg="dark" className={styles.card}>
              <Card.Img
                alt="orange hair and silver sword."
                variant="top"
                src="project2.jpg"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Soluna Back
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/gc-dportal-caps
                </Card.Subtitle>
                <Card.Text>
                  A NodeJS REST API for the gc-app-caps project. Made with MVC
                  pattern.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <a
            href="https://github.com/gustavokei/my-portfolio-website"
            target="_blank"
            className={styles.customLink}
          >
            <Card bg="dark" className={styles.card}>
              <Card.Img
                alt="orange hair and silver sword."
                variant="top"
                src="project3.jpg"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  This website
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/my-portfolio-website
                </Card.Subtitle>
                <Card.Text>My portfolio website</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <Button
          className="p-3 mt-3"
          href="https://github.com/gustavokei?tab=repositories"
          target="_blank"
        >
          View all
        </Button>
      </Col>
    </Row>
  );
};

export default Projects;
