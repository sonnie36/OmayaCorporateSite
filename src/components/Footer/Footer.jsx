import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
            <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-company">
          <div className='omaya-logo mb-6'>
          <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726583859/Group_34256_1_qiwrkn.png" alt="" className='footer-logo' />
          </div>
        
          <p>
            OMAYA Technologies is a premier technology <br />services provider, specializing in innovative
            software development solutions and broad spectrum of IT services. Focused on the
            delivery of digital transformation across industries.
          </p>
          <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h2>Our Link</h2>
          <ul className='links'>
                <div className="group">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </div>
                <div className="group">
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </div>
          </ul>
        </div>

        {/* Contact Section */}
            <div className="footer-contact">
            <h2>Contact Us</h2>
            <ul>
                <li className='link'><FaPhoneAlt /> +9876543210</li>
                <li className='link'><FaEnvelope /> sales@omaya.io</li>
                <li className='link'><FaMapMarkerAlt /> Fourth Floor, Office No. 448, <br />XYZ Building, AI Muntazir, Nairobi, Kenya.</li>
            </ul>
            </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2024, OMAYA.io</p>
        <p className='powered-by'>Powered by : <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726583859/Group_34256_1_qiwrkn.png" alt=""  className='omaya-logo2'/></p>
      </div>
    </footer>

    </div>
  )
}

export default Footer