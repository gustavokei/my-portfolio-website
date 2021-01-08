import React from "react";
import { Navbar } from "react-bootstrap";
import Social from "./social";

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
        <Social />
      </Navbar>
    </div>
  );
};

export default Menu;
