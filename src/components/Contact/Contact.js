import { profile } from '../../data/profile';
import React from 'react';
import './Contact.css';

const Contact = () => {
  const resumeLink = () => {
    window.open('https://drive.google.com/file/d/1zafkK72YfkVb25wkHlvTVFk1Ka5UQ8aE/view?usp=sharing', '_blank');
  };
  return (
    <div className="contact-container">
      <h1 className="contact-title">Hire Me!</h1>
      <div className="contact-content">

      <div className="button-container">
            <button onClick={resumeLink} className="download-button"> Download Resume </button>
          </div>
        <div className="icon-container">
          <a href={`mailto:${profile.email}`} className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.{profile.socials.linkedin}" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://{profile.socials.github}" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://my-ai-journey.hashnode.dev/" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-blog"></i> {/* Font Awesome blog icon */}
          </a>
        </div>
      </div>
      <div className="citation">
        <p>&copy; Nishika Sankuri! </p>
      </div>
    </div>
  );
};

export default Contact;