import React, { Component } from "react";
import s from "./HomePage.module.css";

class HomePage extends Component {
  render() {
    return (
      <>
        {/* Banner */}
        <div
          className={s.banner}
          style={{
            backgroundImage: `url(${this.props.banner.image})`
          }}
        >
          <div className={s.bannerTitleContainer}>
            <div className={s.bannerTitle}>{this.props.banner.quote}</div>
          </div>
        </div>

        {/* About */}
        <div className={s.aboutContainer} id="About">
          <h4>{this.props.aboutMe.title}</h4>
          <p className={s.aboutText}>{this.props.aboutMe.firstParagraph}</p>
          <p className={s.aboutText}>{this.props.aboutMe.secondParagraph}</p>
        </div>
      </>
    );
  }
}

export default HomePage;
