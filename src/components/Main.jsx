import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import s from "./Main.module.css";

// components
import TopBar from "./top-bar/TopBar";
import HomePage from "./home-page/HomePage";
import Portfolio from "./portfolio-page/Portfolio";
import Footer from "./footer/Footer";

class Main extends Component {
  render() {
    return (
      <div className={s.main}>
        {/* NavBar */}

        <Router>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <div>
                  <TopBar {...props} />
                  <HomePage {...props} />
                </div>
              );
            }}
          />
          <Route
            path="/portfolio-and-services"
            render={props => {
              return (
                <div>
                  <TopBar {...props} />
                  <Portfolio {...props} />
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
