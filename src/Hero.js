import React from "react";
import OIP from "./assets/OIP.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img src={OIP} alt="Profile" />
      </div>
      <div className="content">
        <h1>
          Hello,I'm <span>Hema Natarajan</span>
        </h1>
        <h2>Front-End Developer</h2>
        <p>
          I create responsive, interactive, and user-friendly web applications
          that bring ideas to life.
        </p>

        <a href="/resume.pdf" download className="download">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
