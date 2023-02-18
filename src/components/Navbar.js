import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import LogoImage from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ links }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <nav className="navbar">
      <div
        className={`navbar__left ${isMenuOpened ? "navbar__left--opened" : ""}`}
      >
        <Nav links={links} className="navbar__nav" />
      </div>

      <div className="navbar__center">
        <NavLink className=" " to="/">
          <img src={LogoImage} alt="logo" className="navbar__logo" />
        </NavLink>
      </div>
      <div className="navbar__right">
        <div className="buttons">
          <NavLink to="/login" className="button is-primary">
            Login \ Sign Up
          </NavLink>
          <button
            className="navbar__button navbar__button--menu button is-info is-outlined "
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
