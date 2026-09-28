import React from 'react'
import './AboutUs.css'
import { FaCheckCircle } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEye, FaBullseye } from 'react-icons/fa';


const AboutUs = () => {
    const values=[
        {
            id:1,
            title:'Cultivation',
            description:'We are committed to staying at the forefront of technological advancements, continuously seeking creative solutions to meet the evolving needs of our clients'
        },
        {
            id:2,
            title:'Excellence',
            description:' We strive for the highest standards in everything we do, ensuring that our services consistently exceed expectations.'
        },
        {
            id:3,
            title:'Continous Improvement',
            description:'We are dedicated to learning and growing, both as individuals and as an organization, to better serve our clients and stay ahead in the industry.'
        },
        {
            id:4,
            title:'Integrity',
            description:'We conduct our business with honesty and transparency, building trust with our clients, partners, and employees'
        },
        {
            id:5,
            title:'Customer-centricity',
            description:'Our clients are at the heart of everything we do. We prioritize their needs and work collaboratively to achieve their goals.'
        },
        {
            id:6,
            title:'Sustainability',
            description:'We are committed to sustainable practices that minimize our environmental impact and contribute positively to our community and the world at large.'
        },

    ]
  return (
    <div>
     <section className="relative w-full h-[300px] md:h-[400px] lg:h-[300px]">
      <img
        src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726632208/Rectangle_4278_ylstnh.png" 
        alt="Testimonials Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">About Us</h1>
        <p className="mt-4 text-sm md:text-base">
          <span>Home</span> / <span>About Us</span>
        </p>
      </div>
    </section>
        <section className='about'>
            <div className="about-image">
                <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726633544/Layer_2_ifhlbf.png" alt="About Illustration" />
            </div>
            <div className="about-content">
                <div className='header'>
                <p className='line'></p>
                <h3 style={{color:"#1D8751"}}>About Us</h3>
                </div>
                <p>
                OMAYA Technologies is a premier technology services provider, specializing in innovative software development solutions and a broad spectrum of IT services. Founded with the vision to drive digital transformation across industries, OMAYA Technologies leverages cutting-edge technologies and a client-centric approach to deliver unparalleled value. Our commitment to excellence and passion for technology empower businesses to achieve their goals through software solutions and robust IT infrastructure. With a team of highly skilled professionals, OMAYA Technologies addresses the unique challenges of each client, ensuring tailored solutions that enhance operational efficiency and drive growth. From startups to established enterprises, we partner with our clients to navigate the complexities of the digital landscape, offering expertise in software development, web and mobile application development, IT consulting, cloud computing, cybersecurity, and more. At OMAYA Technologies, we believe in fostering long-term relationships built on trust, transparency, and mutual success. Our dedication to quality and innovation positions us as a trusted partner in the ever-evolving world of technology.
                </p>
            </div>
        </section>
        <section
  className="page-vision-section bg-cover bg-center"
  style={{
    backgroundImage:
      'url(https://res.cloudinary.com/dam1sxczj/image/upload/v1726633545/Rectangle_4305_rq7j1n.png)',
  }}
>
  <div className="container mx-auto text-white w-full">
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-10">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start z-20">
        <div className="w-12 h-12 mb-4 md:mb-0 md:mr-5">
          <FaBullseye size={35} />
        </div>
        <div className="mission-content text-left w-full sm:w-full">
          <h2 className="mission-title text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-base leading-relaxed">
            At OMAYA Technologies, our mission is to empower businesses through
            innovative technology solutions that drive digital transformation,
            enhance operational efficiency, and foster growth. We are dedicated
            to delivering exceptional value to our clients by combining
            cutting-edge technology with a deep understanding of their unique
            needs.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start z-20">
        <div className="w-12 h-12 mb-4 md:mb-0 md:mr-5">
          <FaEye size={35} />
        </div>
        <div className="vision-content text-left w-full sm:w-full">
          <h2 className="vision-title text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-base leading-relaxed">
            Our vision is to be a global leader in technology services, renowned
            for our commitment to excellence, innovation, and customer
            satisfaction. We aspire to shape the future of technology by
            continuously evolving and adapting to the changing digital
            landscape, ultimately enabling our clients to achieve their highest
            potential.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




        {/* Core Values */}
        <section className='core-values'>
            <h3 style={{color:"rgba(55, 167, 146, 1)", marginBottom:"20px",fontSize:"1.25rem", fontWeight:"bold"}}>Our Core Values</h3>
            <div className="container">
                <div className='value-image'>
                <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726633544/notebook-with-toolls-notes-about-core-values-concept_1_tcj1f5.png" alt="Values-thumbnail" />
                </div>
                <div className="values">
                {values.map((value) => (
                    <div className="value-item" key={value.title}>
                      <div>
                      <FaCheckCircle className="value-icon" />
                      </div>
                    
                    <div className='value-content'>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                    </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className='founder'>
            <h3 style={{color:"rgba(55, 167, 146, 1)",fontSize:"1.25rem", fontWeight:"bold", marginBottom:"20px"}}>Meet our Founder and CEO </h3>
            <div className="founder-card">
                <div className="social-section">
                    <div className="name">
                        <h3 style={{fontWeight:"bold", marginBottom:"15px"}}>Omar Ali Omar</h3>
                        <p style={{marginBottom:"15px"}}>Founder and Ceo</p>
                    </div>
                    <div className="socials">
                        <div className="icon-container">
                          <p><a href="#" style={{fontSize:'20px',color:'white'}}><FaFacebookF /></a></p>
                        </div>
                        <div className="icon-container">
                          <p></p><a href="#" style={{fontSize:'20px',color:'white'}}><FaTwitter /></a>
                        </div>
                        <div className="icon-container">
                          <p><a href="#" style={{fontSize:'20px',color:'white'}}><FaLinkedinIn /></a></p>
                        </div>
                        
                    </div>
                </div>
                <div className="image-section">
                    <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs