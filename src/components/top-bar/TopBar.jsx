import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopBar.css";
import s from "./TopBar.module.css";
import img from "./logo.png";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          title: this.state.title < 4 ? this.state.title + 1 : 0
        }),
      6000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderChangingTitle = () => {
    const { title } = this.state;
    if (title === 0) {
      return <p className={s.changingText}>arquitetura simplificada</p>;
    }
    if (title === 1) {
      return <p className={s.changingText}>arquitetura singular</p>;
    }
    if (title === 2) {
      return <p className={s.changingText}>arquitetura inclusiva</p>;
    }
    if (title === 3) {
      return <p className={s.changingText}>arquitetura consciente</p>;
    }
    if (title === 4) {
      return <p className={s.changingText}>arquitetura humanitária</p>;
    }
  };

  render() {
    const { homePage, portfolioPage, portfolio } = this.props;

    // if page path is on the portfolio it will go back to
    // home instead of scrolling to the about me section
    const scrollToAbout = () => {
      if (portfolio) {
        homePage();
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
          <Navbar.Brand onClick={() => homePage()}>
            {/* Link is used in the Bootstrap Link, this gives a warning on the 
          but not a big deal*/}
            <div className={s.logoDiv}>
              <img src={img} alt="logo" className={s.logo} />
              {this.renderChangingTitle()}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={s.navButtons}>
              <Nav.Link onClick={() => homePage()}>
                {this.props.navBar.home}
              </Nav.Link>
              <Nav.Link onClick={() => scrollToAbout()}>
                {this.props.navBar.about}
              </Nav.Link>
              <Nav.Link onClick={() => portfolioPage()}>
                {this.props.navBar.portfolio}
              </Nav.Link>
              <Nav.Link onClick={() => scrollToContact()}>
                {this.props.navBar.contact}
              </Nav.Link>
              <div
                className={s.languageSwitch}
                onClick={() => this.props.switchLanguage()}
              >
                {this.props.currentLanguage ? "BR" : "EN"}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopBar;
