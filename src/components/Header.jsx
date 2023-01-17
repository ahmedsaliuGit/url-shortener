import React, { useState } from "react";

import Logo from "../images/logo.svg";

function Header(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavClick = function () {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header>
      <div className="xl:container xl:mx-auto px-4 py-8 flex justify-between">
        <img src={Logo} alt="Shortly logo" />
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-gray-600 p-3"
            onClick={handleNavClick}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex lg:mx-auto">
          <ul className="lg:flex">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>

          <ul className="lg:flex">
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <div
          className={`${
            !mobileNavOpen ? "hidden" : ""
          } w-11/12 fixed top-0 inset-x-0 mx-auto mt-24 rounded-lg bg-dark-violet text-white text-center px-8 py-4`}
          ariallabel="mobile navigation menu"
        >
          <nav>
            <ul className="py-5">
              <li className="font-bold">Features</li>
              <li className="my-5 font-bold">Pricing</li>
              <li className="font-bold">Resources</li>
            </ul>

            <hr className="h-px bg-grayish-violet mt-3 mb-10 border-0" />

            <ul>
              <li className="font-bold">Login</li>
              <li className="my-5 font-bold bg-c-cyan rounded-full p-4">
                Sign Up
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
