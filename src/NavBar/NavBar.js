import React from "react";
import "../NavBar/NavBar.css";
import qde_logo from '../assest/qde_logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_img">
        <Link to="/home">
          <img src={qde_logo} alt="QDE" />
        </Link>
      </div>
      <div className="navbar_nav">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
