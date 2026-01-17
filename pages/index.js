import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import { Container } from "react-bootstrap";
import Intro from "../components/pages/home/intro";
import Timeline from "../components/pages/home/timeline";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Head title="Gustavo Kei" />
    <Menu />
    <div className="content">
      <Container>
        <Intro />
        <Timeline />
      </Container>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

export default Home;
