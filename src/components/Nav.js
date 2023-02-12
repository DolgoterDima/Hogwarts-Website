import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ links }) => {
  const isActiveLink = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";
  return (
    <nav className="nav">
      {links.length
        ? links.map(({ link, text }) => {
            return (
              <NavLink to={link} key={link} className={isActiveLink}>
                {text}
              </NavLink>
            );
          })
        : "No links to show"}
    </nav>
  );
};

export default Nav;
