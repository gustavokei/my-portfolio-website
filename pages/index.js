import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import { Container } from "react-bootstrap";
import Intro from "../components/pages/home/intro";
import Projects from "../components/pages/home/projects";
import Exp from "../components/pages/home/exp";
import Footer from "../components/footer";
import styles from "./../components/styles.module.scss";

const Home = () => (
  <div>
    <Head title="Gustavo Kei" />
    <Menu />
    <div className={styles.content}>
      <Container>
        <Intro />
        <Projects />
        <Exp />
      </Container>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default Home;
