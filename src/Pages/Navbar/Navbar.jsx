import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header className="nav-sticky">
        <Link className="nav-link" to='/'>PORTFOLIO</Link>
        <nav ref={navRef}>
          <Link onClick={showNavbar} to="/">Home</Link>
          <Link onClick={showNavbar} to="/education">Career</Link>
          <Link onClick={showNavbar} to="/skills">Skills</Link>
          <Link onClick={showNavbar} to="/projects">Projects</Link>
          <Link onClick={showNavbar} to="/contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </>
  );
};

export default Navbar;
