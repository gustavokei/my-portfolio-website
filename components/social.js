import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./social.module.scss";

const Social = () => {
  return (
    <div className={styles.social}>
      <a
        href="https://www.linkedin.com/in/gustavo-kei-amemiya-32270818b/?locale=en_US"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/gustavokei" target="blank" rel="noopener">
        <FontAwesomeIcon icon={faGithubSquare} />
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default Social;
