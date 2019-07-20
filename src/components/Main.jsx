import React, { Component } from "react";

import s from "./Main.module.css";
import "./Main.css";

// components
import TopBar from "./top-bar/TopBar";
import HomePage from "./home-page/HomePage";
import Footer from "./footer/Footer";

class Main extends Component {
  render() {
    return (
      <div className={s.main}>
        {/* NavBar */}
        <TopBar />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default Main;
