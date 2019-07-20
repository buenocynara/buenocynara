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

  render() {
    let data = this.state.english ? eng : por;
    return (
      <div className={s.main}>
        <Router>
          <TopBar navBar={data.navBar} />
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
        <Footer />
      </div>
    );
  }
}

export default Main;
