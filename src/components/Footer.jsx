import "../css/footer.css";
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaArrowUp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Brand */}
        <div className="footer-brand">
          <h2>{"<Teshe />"}</h2>
          <p>
            Frontend Developer passionate about building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right - Social */}
        <div className="footer-socials">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Teshome-Worku" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/teshome-worku-017834392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
            <a href="https://t.me/Username_1251" target="_blank"><FaTelegram /></a>
            <a href="https://web.facebook.com/tesheTech" target="_blank"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Teshe. All Rights Reserved.</p>

        {/* Scroll to Top */}
        <button 
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;