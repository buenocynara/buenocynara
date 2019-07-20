import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopBar.css";
import s from "./TopBar.module.css";

import img from "./logo.png";

function TopBar() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={img} alt="logo" className={s.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={s.navButtons}>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBar;
