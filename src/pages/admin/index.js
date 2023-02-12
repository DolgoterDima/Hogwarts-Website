import React from "react";

import Nav from "../../components/Nav";

const Index = () => {
  const links = [
    {
      link: "/admin",
      text: "Admin",
    },
    {
      link: "/admin/add-new-day",
      text: "Add new day",
    },
  ];
  return (
    <div>
      <Nav links={links} />
    </div>
  );
};

export default Index;
