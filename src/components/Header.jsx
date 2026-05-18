import React from "react";
import "../App.css"
import logo from "../assets/mg.logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MG Rental" className="logo" />
          <span className="logo-name text-white">MG Rental</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
