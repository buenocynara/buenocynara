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
    this.state = { english: true, portfolio: false };
  }

  componentDidMount() {
    // checks the local storage for previous selection
    // this will prevent to switch back to english every time page refreshes
    const hede = localStorage.getItem("language");
    if (hede === "false") {
      this.setState({ english: false });
    }
  }

  switchLanguage = () => {
    this.setState({ english: !this.state.english });
    localStorage.setItem("language", !this.state.english);
  };

  portfolioPage = () => {
    this.setState({ portfolio: true });
  };

  homePage = () => {
    this.setState({ portfolio: false });
  };

  render() {
    let data = this.state.english ? eng : por;
    return (
      <div className={s.main}>
        <TopBar
          navBar={data.navBar}
          switchLanguage={this.switchLanguage}
          currentLanguage={this.state.english}
          portfolio={this.state.portfolio}
          homePage={this.homePage}
          portfolioPage={this.portfolioPage}
        />

        {this.state.portfolio ? (
          <div>
            <Portfolio portfolio={data.portfolio} />
          </div>
        ) : (
          <HomePage banner={data.banner} aboutMe={data.aboutMe} />
        )}

        <Footer contact={data.contact} />
      </div>
    );
  }
}

export default Main;
