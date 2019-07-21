import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopBar.css";
import s from "./TopBar.module.css";
import img from "./logo.png";

function TopBar(props) {
  // if page path is on the portfolio it will go back to
  // home instead of scrolling to the about me section
  const scrollToAbout = () => {
    if (window.location.pathname === "/portfolio-and-services") {
      window.location.pathname = "/";
    } else {
      document.querySelector("#About").scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = () => {
    document.querySelector("#Contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand>
          {/* Link is used in the Bootstrap Link, this gives a warning on the 
          but not a big deal*/}
          <Link to="/">
            <img src={img} alt="logo" className={s.logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={s.navButtons}>
            <Nav.Link>
              <Link to="/">{props.navBar.home}</Link>
            </Nav.Link>
            <Nav.Link onClick={() => scrollToAbout()}>
              {props.navBar.about}
            </Nav.Link>
            <Nav.Link>
              <Link to="/portfolio-and-services">{props.navBar.portfolio}</Link>
            </Nav.Link>
            <Nav.Link onClick={() => scrollToContact()}>
              {props.navBar.contact}
            </Nav.Link>
            <div
              className={s.languageSwitch}
              onClick={() => props.switchLanguage()}
            >
              {props.currentLanguage ? "Porteguese" : "English"}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBar;
