import React from "react";
import "./MainContent.css";

const About = () => {
  return (
    <div>
      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          Passionate Frontend Developer proficient in HTML, CSS, and JavaScript,
          with a strong focus on building responsive, intuitive, and engaging
          user interfaces. Eager to contribute to a collaborative, fast-paced
          team where design thinking and user experience drive real value.
        </p>

        <div className="education">
          <h3>Education</h3>
          <div className="edu-item">
            <h4>B.Tech – Information Technology</h4>
            <p>Government College of Technology, Coimbatore</p>
            <p>Year of Passing: 2026 | Percentage: 84.4%</p>
          </div>
          <div className="edu-item">
            <h4>Higher Secondary</h4>
            <p>Year of Passing: 2022 | Percentage: 94.6%</p>
          </div>
          <div className="edu-item">
            <h4>SSLC</h4>
            <p>Year of Passing: 2020 | Percentage: 98%</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
