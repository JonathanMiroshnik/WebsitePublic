import React, { useState } from 'react';

import './About.css';
import '../../components/ContentContainer/ContentContainer.css';

function About() {
    return (
        <div className="contentContainer">
          <div className="about-container">
            <h1>About Me</h1>
            <p>
              Welcome to my website! I am a passionate developer with a love for Programming.
            </p>
            <div className="about-grid">
              <div className="about-card">
                <h2>Our Mission</h2>
                <p>
                  To deliver top-notch products and services that improve lives and inspire creativity.
                </p>
              </div>
              <div className="about-card">
                <h2>Our Vision</h2>
                <p>
                  To be a global leader in technology and innovation, bringing people together in
                  meaningful ways.
                </p>
              </div>
              <div className="about-card">
                <h2>Our Team</h2>
                <p>
                  A diverse group of experts in design, development, and strategy, working together
                  to achieve greatness.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}


export default About;