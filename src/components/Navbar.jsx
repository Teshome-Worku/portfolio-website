import React, { useState } from "react";
import "../css/navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="logo">
          <a href="#home">
           <span>{"<Teshe />"}</span>
          </a>
        </div>
        {/* Menu */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="active" onClick={()=>setMenuOpen(!menuOpen)}>Home</a>
          <a href="#about" onClick={()=>setMenuOpen(!menuOpen)}>About</a>
          <a href="#projects" onClick={()=>setMenuOpen(!menuOpen)}>Projects</a>
          <a href="#skills" onClick={()=>setMenuOpen(!menuOpen)}>Skills</a>
          <a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <>
              <span className="line1 rotate45"></span>
              <span className="line2 rotate45"></span>
              <span className="line3 rotate45"></span>
            </>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;