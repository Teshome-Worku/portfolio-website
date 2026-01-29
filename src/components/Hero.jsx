import "../css/hero.css";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import HeroLottie from "./HeroLottie";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
     
        {/* Left Content */}
        <div className="hero-text">
          <p className="hero-intro">Hello, I'm</p>
          <h1 className="hero-name">Teshe</h1>
          <h2 className="hero-title">Frontend Developer | Aspiring Full Stack</h2>
          <p className="hero-desc">
            I build modern, responsive, and interactive web applications using  modern web technologies.
          </p>
            {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/Teshome-Worku" 
              target="_blank" 
              title="Github"
              rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/teshome-worku-017834392"         
              target="_blank" 
              title="LinkedIn"
              rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://t.me/Username_1251"
              title="Telegram"
              target="_blank" 
              rel="noreferrer">
              <FaTelegramPlane />
            </a>
            <a 
              href="mailto:teshomeworku96@gmail.com"
              title="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="hero-buttons">
            <a href="/TeshomeWorkuResume.pdf" className="btn primary" download title="Download CV">Download Resume</a>
          
            <button
            className="btn hire-btn"
            onClick={() => window.open("https://wa.me/251955800626", "_blank")}
            >
            Hire Me 🚀
            </button>
          </div>
        </div>
        {/* Right Image */}
          <div className="hero-image">
            <HeroLottie />
          </div>
      </div>
    </section>
  );
};
export default Hero;