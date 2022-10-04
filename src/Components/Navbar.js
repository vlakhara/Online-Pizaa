import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleMenu = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
