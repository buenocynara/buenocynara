import React, { Component } from "react";
import s from "./Footer.module.css";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaStackOverflow
} from "react-icons/fa";
import profile from "./profile.png";

const insta = [
  {
    pic:
      "https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    pic:
      "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    pic:
      "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    pic:
      "https://images.pexels.com/photos/1449081/pexels-photo-1449081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    pic:
      "https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

class Footer extends Component {
  render() {
    return (
      <>
        {/* Contact */}
        <div className={s.footer}>
          <div className={s.footerContact}>
            <img src={profile} alt="profile" className={s.profilePic} />
            <p>Contact</p>
            <p>email: blahblah@email.com</p>
            <p>phone: +564551656516</p>
          </div>
          <div className={s.footerSocial}>
            <FaInstagram className={s.footerItem} />
            <FaGithub className={s.footerItem} />
            <FaLinkedin className={s.footerItem} />
            <FaStackOverflow className={s.footerItem} />
          </div>
        </div>

        {/* Instagram */}
        <div>Instagram feed</div>
        <div className={s.instagram}>
          {insta.map(insta => {
            return <img src={insta.pic} alt="insta" className={s.insImage} />;
          })}
        </div>
      </>
    );
  }
}

export default Footer;
