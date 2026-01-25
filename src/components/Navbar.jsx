import { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Use multiple thresholds and pick the section with the largest
    // intersectionRatio so only the most-visible section becomes active.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveLink(mostVisible.target.id);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    // proactively set active link for immediate feedback when user clicks
    if (id) setActiveLink(id);
  };

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
          <a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => handleClick("home")}>
            Home
          </a>

          <a href="#about" className={activeLink === "about" ? "active" : ""} onClick={() => handleClick("about")}>
            About
          </a>

          <a href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() => handleClick("projects")}>
            Projects
          </a>

          <a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => handleClick("skills")}>
            Skills
          </a>

          <a href="#contact" className={activeLink === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>
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