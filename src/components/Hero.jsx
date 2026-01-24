import React from "react";
import "../css/hero.css";
import heroImg from "../assets/images/coding.png"; // your animated image
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
            <a href="https://www.linkedin.com/in/teshome-worku-017834392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"         
            target="_blank" 
            title="LinkedIn"
            rel="noreferrer">
            <FaLinkedin />
            </a>
            <a href="https://t.me/Username_1251"
              title="Telegram"
              target="_blank" rel="noreferrer">
              <FaTelegramPlane />
          </a>
            <a 
            href="mailto:teshomeworku96@gmail.com"
            title="Email">
            <FaEnvelope />
            </a>
          </div>
          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn primary" download title="Download CV">Download CV</a>
            <a href="#contact" className="btn outline">Contact Me</a>
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