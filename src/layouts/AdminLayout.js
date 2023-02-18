import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

/*components*/
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const links = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/admin",
      text: "Admin",
    },
    {
      link: "/admin/add-new-day",
      text: "Add new day",
    },
    {
      link: "/admin/add-new-student",
      text: "Add new student",
    },
  ];

  return (
    <div className="layout">
      <div className="layout__wrapper">
        <header>
          admin layout
          <Nav links={links} />
        </header>
        <main className="main">
          <Outlet />
          {/* основное содержимое страницы*/}
        </main>
        <footer>admin footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;
