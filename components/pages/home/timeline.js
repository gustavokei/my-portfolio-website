import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./../../styles.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Exp = () => {
  return (
    <Row className={"pt-5 pb-5 " + styles.customRow}>
      <Col xs="10">
        <h3 className={styles.title}>Experience</h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(24, 175, 142)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(24, 175, 142)" }}
            date="2015 - 2019"
            iconStyle={{
              background: "rgb(24, 175, 142)",
              color: "#fff",
            }}
            icon={
              <img
                className={styles.timelineIcon}
                src="timeline1.webp"
                alt="Anhembi Morumbi Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Web Design Bachelor Degree
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/school/universidade-anhembi-morumbi/"
                target="_blank"
                className={styles.customLink}
              >
                @Anhembi Morumbi University
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(253, 153, 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(253, 153, 63)" }}
            date="2016/03 - 2017/04"
            iconStyle={{
              background: "rgb(253, 153, 63)",
              color: "#fff",
            }}
            icon={
              <img
                className={styles.timelineIcon}
                src="timeline2.webp"
                alt="Ryse Games Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer + UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/rysegames/"
                target="_blank"
                className={styles.customLink}
              >
                @Ryse Games
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(87, 55, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(87, 55, 120)" }}
            date="2017/04 - 2017/07"
            iconStyle={{
              background: "rgb(87, 55, 120)",
              color: "#fff",
            }}
            icon={
              <img
                className={styles.timelineIcon}
                src="timeline3.webp"
                alt="Cuponomia Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer + UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/cuponomia/"
                target="_blank"
                className={styles.customLink}
              >
                @Cuponomia
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
            date="2017/08 - 2019/02"
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#fff",
            }}
            icon={
              <img
                className={styles.timelineIcon}
                src="timeline4.webp"
                alt="Beyoung Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/bybeyoung/"
                target="_blank"
                className={styles.customLink}
              >
                @Beyoung
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(161, 114, 47)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(161, 114, 47)" }}
            date="2019 - 2021"
            iconStyle={{
              background: "rgb(161, 114, 47)",
              color: "#fff",
            }}
            icon={
              <img
                className={styles.timelineIcon}
                src="timeline5.webp"
                alt="Conestoga Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Ontario College Graduate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/school/conestoga-college/"
                target="_blank"
                className={styles.customLink}
              >
                @Conestoga College
              </a>
            </h4>
            <p>Kitchener, ON</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Col>
    </Row>
  );
};

export default Exp;
