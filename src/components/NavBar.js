import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ title, user }) => {
  return (
    <div className="navbar">
      <p className className="navbar__user">
        {user}
      </p>
      <Link to="/sign-in" className="navbar__title">
        {title}
      </Link>
    </div>
  );
};

export default NavBar;
