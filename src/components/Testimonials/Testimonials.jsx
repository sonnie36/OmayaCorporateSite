import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="container">
        <div className="testimonial-content">
            <h2>TESTIMONIALS</h2>
            <h3>We Are Trusted Over <br /> 40 + Countries Worldwide </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className='cta-button'>See all</button>
        </div>
        <div className="testimonial-desc">
                <div className="profile">
                    <img className='profile-image' src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png" alt="Profile" />
                </div>
                <div className="profile-desc">
                        <h4>Mohammed A</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div className='quote-container'>
                            <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726500190/Group_3_tm61ot.png" alt=""  className='image-quotes'/>
                        </div>
                </div>
        </div>
        </div>
        <div className="testD"></div>
         
    </div>
  )
}

export default Testimonials