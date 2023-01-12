import React from "react";

import Logo from "../images/logo.svg";

function Header(props) {
  return (
    <header>
      <img src={Logo} alt="Shortly logo" />
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>

        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
