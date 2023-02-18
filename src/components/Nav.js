import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ links }) => {
  const setActiveLink = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";
  return (
    <nav className="nav  ">
      {links.length
        ? links.map(({ link, text }) => {
            return (
              /*   */
              <NavLink to={link} key={link} className={setActiveLink}>
                {text}
              </NavLink>
            );
          })
        : "No links to show"}
    </nav>
  );
};

export default Nav;
