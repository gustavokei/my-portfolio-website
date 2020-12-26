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
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQG8sNk1jywcRQ/company-logo_200_200/0/1606850099262?e=1616025600&v=beta&t=0XKeF43rV5ErTZ8sZb1Ir4ahzs76wuq7CoobD9ogIJM"
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
          {/* <VerticalTimelineElement
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
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQEdH2lH-aVf1g/company-logo_200_200/0/1519890910789?e=1616025600&v=beta&t=uB21oApmSv_1584U1ioe1xnS5NkGAFuTr9goecSXt60"
                alt="Ryse Games Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer + UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/rysegames/about/"
                target="_blank"
                className={styles.customLink}
              >
                @Ryse Games
              </a>
            </h4>
            <p>São Paulo, SP</p>
          </VerticalTimelineElement> */}
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
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQET7h8kl7NmWQ/company-logo_200_200/0/1583351007664?e=1616025600&v=beta&t=91tGaNfVN4K3tWeqS65_5dCR2C5PZr_8kljYa9phDgM"
                alt="Cuponomia Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer + UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://www.linkedin.com/company/rysegames/about/"
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
                src="https://media-exp1.licdn.com/dms/image/C560BAQFTEWJIfSfX4Q/company-logo_200_200/0/1598462098509?e=1616025600&v=beta&t=XMy42GMcAiMGvyCUxANs7yRa1K5PfCjaXytjDn6kS00"
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
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQGkyy7hVgi8SA/company-logo_200_200/0/1529078467854?e=1616025600&v=beta&t=FnhAUOlzTJRifO6dbxNfDFtSoEVlED8UBsjom-9gDwg"
                alt="Cuponomia Logo"
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
