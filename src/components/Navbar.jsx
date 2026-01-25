import { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // adjust if needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = () => setMenuOpen(false);

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
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={handleClick}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={handleClick}
          >
            About
          </a>

          <a
            href="#projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={handleClick}
          >
            Projects
          </a>

          <a
            href="#skills"
            className={activeLink === "skills" ? "active" : ""}
            onClick={handleClick}
          >
            Skills
          </a>

          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={handleClick}
          >
            Contact
          </a>
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