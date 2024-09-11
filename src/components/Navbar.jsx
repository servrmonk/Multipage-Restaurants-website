import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdReorder } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} alt="pizza-logo" />
      </div>
      <div className="rightside">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button onClick={toggleMenu}>
          <IoMdReorder />
        </button>
      </div>
      {/* The small div that shows when the IoMdReorder button is clicked */}
      {isOpen && (
        <div className="mobileMenu">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/menu" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
