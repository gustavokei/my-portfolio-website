import React from "react";
import { Navbar } from "react-bootstrap";
// import Link from "./custom-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Menu = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Navbar.Brand>Gustavo Kei</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> */}
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/gustavo-kei-amemiya-32270818b/?locale=en_US"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/gustavokei" target="blank" rel="noopener">
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
      </Navbar>
    </div>
  );
};

export default Menu;
