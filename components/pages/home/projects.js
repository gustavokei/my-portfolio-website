import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";

const Projects = () => {
  return (
    <Row className="pb-5 customRow">
      <Col xs="10" className="customCol">
        <h2 className="title">My Featured Projects</h2>
        <RepoCards
          user="gustavokei"
          repos={[
            "electron-game-updater",
            "electron-game-updater-helper",
            "vtex-react-checkout",
            "gc-app-caps",
          ]}
        />
        <Button
          className="p-3 mt-3"
          href="https://github.com/gustavokei?tab=repositories"
          rel="noopener"
          target="_blank"
        >
          View all
        </Button>
      </Col>
    </Row>
  );
};

export default Projects;
