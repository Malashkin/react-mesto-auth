import React from "react";

const NavBar = ({ title, user }) => {
  return (
    <div className="navbar">
      <p className className="navbar__user">
        {user}
      </p>
      <p className="navbar__title">{title}</p>
    </div>
  );
};

export default NavBar;
