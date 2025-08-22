import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main>
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
            <h3>Testimonial Slider</h3>
            <p>
              Developed a fully responsive testimonial slider with smooth
              transitions, navigation controls, and interactive indicators to
              showcase client feedback effectively across devices
            </p>
            <a href="https://github.com/HemaNatarajan11/HemaNatarajan11-customer_testimonial_carousel">
              github.com
            </a>
          </div>
          <div className="project-card">
            <h3>Interactive Restaurant Menu with Category Filtering</h3>
            <p>
              Interactive Restaurant Menu with Category Filtering – Built a
              responsive web app that displays menu items with images, prices,
              and descriptions. Supports category-based filtering and links each
              item to its own details page.
            </p>
            <a href="https://github.com/hemanatarajan11">github.com</a>
          </div>
        </div>
      </section>
      {/*   <section id="skills" className="section skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>Mysql</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      
        <div className="certifications-container">
          <h3>Certifications</h3>
          <ul className="certifications-list">
            <li>
              <a
                href="/certificates/java_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java Programming Certificate
              </a>
            </li>
            <li>
              <a
                href="/certificates/python_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Certificate
              </a>
            </li>
            <li>
              <a
                href="/certificates/frontend_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-End Development Certificate
              </a>
            </li>
          </ul>
        </div>
      </section> */}
      <section id="skills" className="section skills">
        <h2>Skills & Certifications</h2>

        <div className="skills-certifications-wrapper">
          {/* Skills Section */}
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

          {/* Certifications Section */}
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
      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-container">
          {/* Left side: Contact form */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right side: Contact links */}
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/hemanatarajan15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/HemaNatarajan11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="tel:+1234567890">
              <i className="fas fa-phone-alt"></i> Phone
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainContent;
