/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import About from '../../components/About/About'  
import Stats from '../../components/Stats/Stats'
import Testimonials from '../../components/Testimonials/Testimonials'
import Blog from '../../components/Blog/Blog'
import ServicesHome from '../../components/Services/ServicesHome'


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h4>IT Business Consulting</h4>
          <h1>Best IT Solutions Provider Agency</h1>
          <p>
            Norem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Norem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          </p>
          <button className="cta-button">Let's Talk</button>
        </div>
        <div className="home-image">
          <div className="slanted-bg">
              <img src='https://res.cloudinary.com/dam1sxczj/image/upload/v1726502678/Frame_zipfbl.png' alt="IT Solutions" className="hero-image-section" />
          </div>
        </div>
    </div>
    <About />
    <Stats/>
    <ServicesHome/>
    <Testimonials/>
    <Blog/>
    </div>
  )
}

export default Home