import React from "react";
import "./MainContent.css";

const Skills = () => {
  return (
    <div>
      {" "}
      <section id="skills" className="section skills">
        <h2>Skills & Certifications</h2>

        <div className="skills-certifications-wrapper">
          <div className="skills-container">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li>Java</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="certifications-container">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li>
                <a
                  href="/Internship Completion.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internship Completion
                </a>
              </li>
              <li>
                <a
                  href="/Internship Exposure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internship Exposure
                </a>
              </li>
              <li>
                <a
                  href="/Project Completion.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Completion
                </a>
              </li>
              <li>
                <a
                  href="/Web development Internship.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web development Internship
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
