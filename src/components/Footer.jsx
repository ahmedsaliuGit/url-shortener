import React from "react";

import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

function Footer(props) {
  return (
    <footer>
      <div>
        <div>
          <img src={Logo} alt="Shortly Logo" />
        </div>
        <div>
          <div>
            <h3>Features</h3>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Developer</p>
            <p>Support</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Our Team</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
          <div>
            <img src={Facebook} alt="Social media icon facebook" />
            <img src={Twitter} alt="Social media icon twitter" />
            <img src={Pinterest} alt="Social media icon pinterest" />
            <img src={Instagram} alt="Social media icon instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
