import React from "react";
import InstaIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FaceBookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstaIcon />
        <TwitterIcon />
        <FaceBookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 vipulpizza.com</p>
    </div>
  );
}

export default Footer;
