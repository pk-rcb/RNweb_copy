import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Our Club</h3>
          <p>
            We are a community of enthusiasts dedicated to promoting our shared
            interests and organizing exciting events for the students.
          </p>
          <div className="social-icons">
            <a href=" https://www.facebook.com/radionitroz.nitdgp/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/radio-nitroz-nitdgp/" aria-label="Linked In">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/radionitroz.nitdgp/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@RadioNitroz" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
        <li>
              <a href="/team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> National Institute of Technology,<br />
              MG Avenue, Durgapur, West Bengal, India
            </li>
            <li>
              <FaPhone /> +1 (123) 456-7890
            </li>
            <li>
              <FaEnvelope /> radionitroz.nitdgp@gmail.com
            </li>
            <li>
              <FaClock /> Mon-Fri: 9AM - 5PM
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="footer-section">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.59396371979!2d87.29027327537335!3d23.54710202880964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1747386826374!5m2!1sen!2sin"
              
              loading="lazy"
           
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          Made with ❤️ by Web Dev Team <br />
          &copy; {new Date().getFullYear()} Radio NITroz. All Rights Are Reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
