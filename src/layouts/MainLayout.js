import React from "react";
import { NavLink, Outlet } from "react-router-dom";

/*components*/
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const links = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/blog",
      text: "blog",
    },
    {
      link: "/students",
      text: "students",
    },
    /*   {
      link: "/admin",
      text: "admin",
    },*/
  ];

  return (
    <div className="layout">
      <div className="layout__wrapper">
        <header>
          <Navbar links={links} />
        </header>
        <main className="main">
          <Outlet />
          {/* основное содержимое страницы*/}
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;
