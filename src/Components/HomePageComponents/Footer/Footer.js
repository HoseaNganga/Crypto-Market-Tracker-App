import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaGithubAlt,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContainerFlex">
        <div className="footerIcons">
          <FaTwitter size={25} /> <FaGithubAlt size={25} />{" "}
          <FaYoutube size={25} /> <FaInstagram size={25} />
        </div>
        <div className="footerDesc">
          <p>Privacy</p>
          <p>Terms Of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
