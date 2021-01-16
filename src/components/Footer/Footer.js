import React from "react";
import Logo from "../Logo/Logo";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="socialMedia">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <h3>Copyright 2020 Soprano.ai</h3>
    </div>
  );
};

export default Footer;
