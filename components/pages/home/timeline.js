import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Exp = () => {
  return (
    <Row className="pt-5 pb-5 customRow">
      <Col xs="10">
        <h2 className="title">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
            date="2021/02 - Today"
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#fff",
            }}
            icon={
              <img
                className="timelineIcon"
                src="timeline6.webp"
                alt="Corebiz Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Senior Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/corebiz-brasil/"
                target="_blank"
                rel="noopener"
                className="customLink"
              >
                @Corebiz
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
                className="timelineIcon"
                src="timeline5.webp"
                alt="Conestoga Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Web Design and Development Graduate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/school/conestoga-college/"
                target="_blank"
                rel="noopener"
                className="customLink"
              >
                @Conestoga College
              </a>
            </h4>
            <p>Kitchener, ON</p>
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
                className="timelineIcon"
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
                rel="noopener"
                className="customLink"
              >
                @Beyoung
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
                className="timelineIcon"
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
                rel="noopener"
                className="customLink"
              >
                @Cuponomia
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
                className="timelineIcon"
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
                rel="noopener"
                className="customLink"
              >
                @Ryse Games
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
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
                className="timelineIcon"
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
                rel="noopener"
                className="customLink"
              >
                @Anhembi Morumbi University
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Col>
    </Row>
  );
};

export default Exp;
