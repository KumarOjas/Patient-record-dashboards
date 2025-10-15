import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <h2>About Jarurat Care</h2>
          <p>Your trusted partner in healthcare management and patient records.</p>
        </section>

        <section className="about-content">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              At Jarurat Care, we are committed to providing exceptional healthcare services
              with a focus on patient-centered care, innovative technology, and comprehensive
              records management. We strive to improve patient outcomes through efficient
              and secure data handling.
            </p>
          </div>

          <div className="services">
            <h3>Our Services</h3>
            <ul>
              <li>Patient Records Management</li>
              <li>Healthcare Data Analytics</li>
              <li>Telemedicine Support</li>
              <li>Emergency Care Coordination</li>
              <li>Medical History Tracking</li>
            </ul>
          </div>

          <div className="values">
            <h3>Our Values</h3>
            <ul>
              <li><strong>Compassion:</strong> We care for our patients with empathy and understanding.</li>
              <li><strong>Innovation:</strong> We embrace technology to improve healthcare delivery.</li>
              <li><strong>Integrity:</strong> We maintain the highest standards of privacy and security.</li>
              <li><strong>Excellence:</strong> We strive for the best in everything we do.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
