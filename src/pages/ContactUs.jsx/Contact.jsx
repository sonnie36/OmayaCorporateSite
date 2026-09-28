import React from 'react';
// Importing specific icons from react-icons
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[300px]">
        <img
          src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726632208/Rectangle_4278_ylstnh.png"
          alt="Testimonials Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">Contact Us</h1>
          <p className="mt-4 text-sm md:text-base">
            <span>Home</span> / <span>Contact Us</span>
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-12 gap-10">
        <div className=" flex flex-col items-center justify-center bg-green-500 text-white p-6 rounded-lg w-full md:w-1/3 mb-8 md:mb-0 h-[500px]">
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-4" />
              <span>25212345668</span>
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="mr-4" />
              <span>25212345668</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-4" />
              <span>info@moya.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-4" />
              <span>Somalia, Somalia</span>
            </li>
          </ul>

          <div className="flex space-x-4 mt-6">
            <div style={{
                        width:"30px",
                        height:"30px",
                        borderRadius:"50%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:"white",
                    }}>
              <a href="#">
                <FaFacebookF  style={{color:"#2E328A"}} />
              </a>
            </div>
            <div style={{
                        width:"30px",
                        height:"30px",
                        borderRadius:"50%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:"white",
                    }}>
              <a href="#" className="text-white">
                <FaTwitter  style={{color:"#2E328A"}}/>
              </a>
            </div>
           <div style={{
                        width:"30px",
                        height:"30px",
                        borderRadius:"50%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:"white",
                    }}>
           <a href="#" className="text-white">
              <FaLinkedinIn  style={{color:"#2E328A"}}/>
            </a>
           </div>
            
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3">
          <h2 className="text-green-600 text-lg font-semibold text-center mb-4">CONTACT US</h2>
          <p className="text-center text-gray-600 mb-6">We're always here for you to give best service</p>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full mb-4 md:mb-0 border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Your Subject *"
                className="w-full mb-4 md:mb-0 border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>

            <textarea
              placeholder="Message *"
              className="w-full h-32 border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-green-500"
            />

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
