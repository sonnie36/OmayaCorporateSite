import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <img 
          src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726494766/Group_34256_g7fbfa.png" 
          alt="Omaya Technologies" 
          className="logo" 
        />
      </div>

      {/* Hamburger menu icon */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Close icon */}
      {isOpen && <div className="overlay"></div>}
      {isOpen && (
        <div className="close-icon" onClick={closeMenu}>
          &times;
        </div>
      )}

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/industry" onClick={closeMenu}>Industry Focus</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
