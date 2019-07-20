import React, { Component } from "react";
import s from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import profile from "./profile.png";

import Photos from "./Photos";

// redux

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {
    this.setState({ data: localStorage.getItem("data") });
    // !this.state.data && this.props.actions.fetchData()
  }

  render() {
    return (
      <>
        {/* Contact */}
        <div className={s.footer} id="Contact">
          <div className={s.footerContact}>
            <img src={profile} alt="profile" className={s.profilePic} />
            <p>Contact</p>
            <p>email: blahblah@email.com</p>
            <p>phone: +564551656516</p>
          </div>
          <div className={s.footerSocial}>
            <FaInstagram size="1.1em" className={s.footerItem} />
            <FaFacebookSquare size="1.1em" className={s.footerItem} />
            <FaLinkedin size="1.1em" className={s.footerItem} />
            <FaWhatsapp size="1.1em" className={s.footerItem} />
          </div>
        </div>

        {/* Instagram */}
        <Photos data={this.state.data || this.props.data} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
