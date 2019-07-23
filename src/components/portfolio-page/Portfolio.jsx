import React, { Component } from "react";
import simLogo from "../single_logo.png";
import s from "./Portfolio.module.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { portfolio: true };
  }

  render() {
    if (this.state.portfolio) {
      return (
        <div className={s.portfolioContainer}>
          <div className={s.toggle}>
            <h2 className={s.active}>{this.props.portfolio.portTitle}</h2>
            <h2
              className={s.passive}
              onClick={() => this.setState({ portfolio: false })}
            >
              {this.props.portfolio.serviceTitle}
            </h2>
          </div>

          <div className={s.portItems}>
            {/* Created two render for each card layout. It makes it more easy to understand*/}
            {this.props.portfolio.portfolioSet.map((item, index) => {
              if (index % 2) {
                return (
                  <div key={index} className={s.portCard2}>
                    <div className={s.portTitle}>
                      <img
                        src={simLogo}
                        alt="single-logo"
                        className="singleLogo"
                      />
                      <h4>{item.title}</h4>
                    </div>
                    <div className={s.portContent}>{item.content}</div>
                    <img
                      src={item.image}
                      alt="portfolio"
                      className={s.portImage}
                    />
                  </div>
                );
              }
              return (
                <div key={index} className={s.portCard}>
                  <img
                    src={item.image}
                    alt="portfolio"
                    className={s.portImage}
                  />
                  <div className={s.portTitle}>
                    <img
                      src={simLogo}
                      alt="single-logo"
                      className="singleLogo"
                    />
                    <h4>{item.title}</h4>
                  </div>
                  <div className={s.portContent}>{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div className={s.portfolioContainer}>
        <div className={s.toggle}>
          <h2
            className={s.passive}
            onClick={() => this.setState({ portfolio: true })}
          >
            {this.props.portfolio.portTitle}
          </h2>
          <h2 className={s.active}>{this.props.portfolio.serviceTitle}</h2>
        </div>

        <div className={s.portItems}>
          {this.props.portfolio.servicesSet.map((item, index) => {
            if (index % 2) {
              return (
                <div key={index} className={s.portCard}>
                  <div className={s.portTitle}>
                    <h4>{item.title}</h4>
                  </div>
                  <div className={s.portContent}>{item.content}</div>
                  <img
                    src={item.image}
                    alt="portfolio"
                    className={s.portImage}
                  />
                </div>
              );
            }
            return (
              <div key={index} className={s.portCard2}>
                <img src={item.image} alt="portfolio" className={s.portImage} />
                <div className={s.portTitle}>
                  <h4>{item.title}</h4>
                </div>
                <div className={s.portContent}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
