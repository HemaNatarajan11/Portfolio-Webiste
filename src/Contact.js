import React from "react";
import "./MainContent.css";

const Contact = () => {
  return (
    <div>
      {" "}
      <section id="contact" className="section contact">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

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
    </div>
  );
};

export default Contact;
