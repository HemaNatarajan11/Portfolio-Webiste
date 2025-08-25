import React from "react";
import "./MainContent.css";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A responsive portfolio website built with React and custom CSS.
              Showcases projects, skills, and contact information with a clean,
              modern design.
            </p>
            <a href="https://github.com/HemaNatarajan11/Portfolio-Webiste">
              github.com
            </a>
          </div>
          <div className="project-card">
            <h3>Student Registration Portal</h3>
            <p>
              Developed a web-based portal using HTML, CSS, JavaScript, PHP, and
              MySQL that allows students to register online with validated
              forms. Integrated a MySQL database for storing and displaying
              student details through a responsive dashboard.
            </p>
            <a href="https://github.com/HemaNatarajan11/student_registration.git">
              github.com
            </a>
          </div>
          <div className="project-card">
            <h3>Interactive Restaurant Menu Web Application</h3>
            <p>
              Developed a responsive website featuring menu, about, profile, and
              contact sections. Focused on creating a modern and attractive
              layout with smooth navigation. Enhanced user engagement by
              providing an intuitive browsing experience.
            </p>
            <a href="https://github.com/HemaNatarajan11/Restaurant_website.git">
              github.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
