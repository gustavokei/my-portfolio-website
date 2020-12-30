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
                alt="screenshot of project soluna webapp"
                variant="top"
                src="project1.jpg"
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  Project Soluna
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/gc-app-caps
                </Card.Subtitle>
                <Card.Text>
                  A full stack CRUD NextJS webapp developed using ReactJS,
                  NodeJS, and MSSQL.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <a
            href="https://github.com/gustavokei/electron-game-updater"
            target="_blank"
            className={styles.customLink}
          >
            <Card bg="dark" className={styles.card}>
              <Card.Img
                alt="screenshot of electron game updater desktop app"
                variant="top"
                src="project2.jpg"
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  Electron Game Updater
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/electron-game-updater
                </Card.Subtitle>
                <Card.Text>
                  An ElectronJS and ReactJS desktop application for Windows that
                  updates and launches any game. Highly customizable.
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
                alt="image with text written my name is gustavo kei"
                variant="top"
                src="project3.jpg"
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  This website
                </Card.Title>
                <Card.Subtitle className={styles.cardSubtitle}>
                  gustavokei/my-portfolio-website
                </Card.Subtitle>
                <Card.Text>
                  My portfolio website. Made with NextJS and ReactJS.
                </Card.Text>
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
