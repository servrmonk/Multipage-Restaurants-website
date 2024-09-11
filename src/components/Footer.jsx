import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <p>&copy; visit babathedhaba@patna </p>
    </div>
  );
};

export default Footer;
