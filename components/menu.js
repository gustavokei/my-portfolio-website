import { Navbar } from "react-bootstrap";
import Social from "./social";

const Menu = () => {
  return (
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
  );
};

export default Menu;
