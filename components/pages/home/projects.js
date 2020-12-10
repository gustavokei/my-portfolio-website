import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./../../styles.module.scss";

const Projects = () => {
  return (
    <Row className={"pb-5 " + styles.customRow}>
      <Col xs="10" className={styles.customCol}>
        <h3 className={styles.title}>My Featured Projects</h3>
        <div className="card-columns">
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="orange hair and silver sword."
              variant="top"
              src="https://dummyimage.com/286x180/888/fff"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>Project Name</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                gustavokei/gc-app-caps
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="orange hair and silver sword."
              variant="top"
              src="https://dummyimage.com/286x180/888/fff"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>Project Name</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                gustavokei/gc-app-caps
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="orange hair and silver sword."
              variant="top"
              src="https://dummyimage.com/286x180/888/fff"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>Project Name</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                gustavokei/gc-app-caps
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Button>View all</Button>
      </Col>
    </Row>
  );
};

export default Projects;
