import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import s from "./Main.module.css";

// components
import TopBar from "./top-bar/TopBar";
import HomePage from "./home-page/HomePage";
import Portfolio from "./portfolio-page/Portfolio";
import Footer from "./footer/Footer";

// Data
import { eng, por } from "./languages";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { english: true };
  }

  componentDidMount() {
    const hede = localStorage.getItem("language");
    if (hede === "false") {
      this.setState({ english: false });
    }
  }

  switchLanguage = () => {
    this.setState({ english: !this.state.english });
    localStorage.setItem("language", !this.state.english);
  };

  render() {
    let data = this.state.english ? eng : por;
    return (
      <div className={s.main}>
        <Router>
          <TopBar
            navBar={data.navBar}
            switchLanguage={this.switchLanguage}
            currentLanguage={this.state.english}
          />
          <Route
            path="/"
            exact
            render={props => {
              return (
                <HomePage
                  {...props}
                  banner={data.banner}
                  aboutMe={data.aboutMe}
                />
              );
            }}
          />
          <Route
            path="/portfolio-and-services"
            render={props => {
              return (
                <div>
                  <Portfolio {...props} portfolio={data.portfolio} />
                </div>
              );
            }}
          />
        </Router>
        <Footer contact={data.contact} />
      </div>
    );
  }
}

export default Main;
