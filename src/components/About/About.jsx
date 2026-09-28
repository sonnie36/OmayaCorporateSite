import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726503054/Group_34257_gv51gs.png" alt="About Illustration" />
      </div>
      <div className="about-content">
        <div className='header1'>
          <p className='line'></p>
          <h5>About Us</h5>
        </div>
        
        <h3>You can't use up creativity.</h3>
        <p>
          OMAYA Technologies is a premier technology services provider, specializing in innovative software development solutions and a broad spectrum of IT services. Founded with the vision to drive digital transformation across industries, OMAYA Technologies leverages cutting-edge technologies and a client-centric approach to deliver unparalleled value. Our commitment to excellence and passion for technology empower businesses to achieve their goals through software solutions and robust IT infrastructure.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default About;
