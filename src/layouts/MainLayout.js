import React from "react";
import { Outlet } from "react-router-dom";

/*components*/
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
        {/* основное содержимое страницы*/}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
