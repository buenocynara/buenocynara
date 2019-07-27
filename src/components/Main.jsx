import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import s from "./Main.module.css";
import { Modal } from "react-bootstrap";

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
    this.state = { english: true, portfolio: false, disclaimer: false };
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
        <CookieConsent
          buttonText="Accept"
          buttonStyle={{ backgroundColor: "white" }}
          style={{ background: "rgba(53, 53, 53, 0.5)" }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <div
            onClick={() => this.setState({ disclaimer: true })}
            className={s.cookie}
          >
            See Terms and Conditions
          </div>
        </CookieConsent>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          show={this.state.disclaimer}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Website Terms and Conditions of Use
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>1. Terms</h4>
            <p>
              By accessing this Website, accessible from buenocynara.com, you
              are agreeing to be bound by these Website Terms and Conditions of
              Use and agree that you are responsible for the agreement with any
              applicable local laws. If you disagree with any of these terms,
              you are prohibited from accessing this site. The materials
              contained in this Website are protected by copyright and trademark
              law. These Terms of Service has been created with the help of the
              Terms of Service Generator and the Privacy Policy Template.
            </p>
            <h4>2. Use License</h4>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on Bueno Cynara's Website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license, you may notmodify or
              copy the materials; use the materials for any commercial purpose
              or for any public display; attempt to reverse engineer any
              software contained on Bueno Cynara's Website remove any copyright
              or other proprietary notations from the materials; or transferring
              the materials to another person or "mirror" the materials on any
              other server.
            </p>
            <p>
              This will let Bueno Cynara terminate upon violations of any of
              these restrictions. Upon termination, your viewing right will also
              be terminated and you should destroy any downloaded materials in
              your possession whether it is printed or electronic format.
            </p>
            <h4>3. Disclaimer</h4>
            <p>
              All the materials on Buneo Work’s Website are provided "as is".
              Bueno Cynara makes no warranties, may it be expressed or implied,
              therefore negates all other warranties. Furthermore, Bueno Work
              does not make any representations concerning the accuracy or
              reliability of the use of the materials on its Website or
              otherwise relating to such materials or any sites linked to this
              Website.
            </p>
            <h4>4. Limitations</h4>
            <p>
              Bueno Work or its suppliers will not be held accountable for any
              damages that will arise with the use or inability to use the
              materials on Bueno Cynara’s Website, even if Bueno Cynara or an
              authorized representative of this Website has been notified,
              orally or written, of the possibility of such damage. Some
              jurisdiction does not allow limitations on implied warranties or
              limitations of liability for incidental damages, these limitations
              may not apply to you.
            </p>
            <h4>5. Revisions and Errata</h4>
            <p>
              The materials appearing on Bueno Work’s Website may include
              technical, typographical, or photographic errors. Bueno Cynara
              will not promise that any of the materials in this Website are
              accurate, complete, or current. Bueno Cynara may change the
              materials contained on its Website at any time without notice.
              Bueno Work does not make any commitment to update the materials.
            </p>
            <h4>6. Links</h4>
            <p>
              Bueno Cynara has not reviewed all of the sites linked to its
              Website and is not responsible for the contents of any such linked
              site. The presence of any link does not imply endorsement by Bueno
              Work of the site. The use of any linked website is at the user’s
              own risk.
            </p>
            <h4>7. Site Terms of Use Modifications</h4>
            <p>
              Bueno Work may revise these Terms of Use for its Website at any
              time without prior notice. By using this Website, you are agreeing
              to be bound by the current version of these Terms and Conditions
              of Use.
            </p>
            <h4>8. Your Privacy</h4>
            <p>Please read our Privacy Policy.</p>
            <h4>9. Governing Law</h4>
            <p>
              Any claim related to Bueno Cynara's Website shall be governed by
              the laws of Brazil without regards to its conflict of law
              provisions.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div
              onClick={() => this.setState({ disclaimer: false })}
              className={s.discClose}
            >
              Close
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Main;
