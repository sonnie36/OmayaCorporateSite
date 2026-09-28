import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../Services/Services'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCube, faTv, faMobile } from '@fortawesome/free-solid-svg-icons'; 
import webImage from '../../assets/web.png'
import dataImage from  '../../assets/data.png'

const ServiceDetailsP = () => {
    const { serviceId } = useParams();  
    const service = services.find(s => s.id === parseInt(serviceId));  

    if (!service) {
        return <p>Service not found!</p>;
    }

    const servicesDetails=[

        {
            id: 1,
            icon: faCube,
            title: "Data Analytics",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent:{
                content:"Our data analytics services help businesses unlock the full potential of their data. We provide advanced analytics solutions, including data visualization, predictive analytics, and business intelligence. Our team of data scientists and analysts works with clients to derive actionable insights from their data,enabling informed decision-making and strategic planning.",
                image:dataImage
            } 
        },
        {
            id: 2,
            icon: faTv,
            title: "IT Consulting",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent: {
                content:"Our IT consulting services are designed to help businesses navigate the complexities of technology and achieve their strategic goals. We provide expert advice and guidance on a wide range of IT issues, including infrastructure optimization, technology selection, digital transformation, and IT strategy development. Our consultants work closely with clients to understand their unique challenges and deliver customized solutions that drive business success.",
                image:dataImage
            }
               
        },
        {
            id: 3,
            icon: faMobile,
            title: "App Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent:{
                content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
                image:webImage
            } 
        }
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section relative w-full h-[300px] md:h-[400px] lg:h-[300px]">
                <img
                     src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726632208/Rectangle_4278_ylstnh.png" 
                     alt="Service Hero Background"
                     className="absolute inset-0 object-cover w-full h-full"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">{service.title}</h1>
                    <p className="mt-4 text-sm md:text-base">
                        <span>Home</span> / <span>Services</span> / <span>{service.title}</span>
                    </p>
                </div>
            </section>

            <div className="service-detail mt-6">
                <h2 className='text-xl font-bold mb-2' style={{color:"#1D8751", textAlign:"center"}}>{service.title}</h2>
  
                <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-3/4" style={{ margin: "0 auto" }}>

                  <div className="w-full md:w-1/2 mt-3">
                    <h3 className='font-bold mb-4'>{service.id} - {service.title}</h3>
                    <p>{service.detailedContent.content}</p>
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <img src={service.detailedContent.image} alt={service.title} className="w-full object-cover" style={{height:"400px"}}/>
                  </div>
                </div>
            </div>
            <div>
            <div className="services">
                        {servicesDetails.map(serviceD => (
                            <div key={serviceD.id} className="service">
                                <div className="diamond"></div>
                                <div className="smallDiamond"></div>
                                <div className="smallDiamond2"></div>
                                <div className="iconDiv">
                                    <p>
                                        <FontAwesomeIcon icon={serviceD.icon} style={{ fontSize: "30px" }} />
                                    </p>
                                </div>
                                <div className="service-content">
                                    <h4 className='text-lg font-bold mb-2'>{serviceD.title}</h4>
                                    <p>{serviceD.desc}</p>
                                </div>
                                <div className="arrow">
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        onClick={() => handleCardClick(serviceD.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>

        </div>
    );
};

export default ServiceDetailsP;
