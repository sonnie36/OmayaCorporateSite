import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faArrowRight, faArrowLeft, faCloud, faCode, faCube, faTv, faMobile } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Services.css'
import rectangleImage from '../../assets/Rectangle 4272.png'
import webImage from '../../assets/web.png'
import cloudImage from '../../assets/cloud.png'
import dataImage from  '../../assets/data.png'


const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            icon: faHandHoldingDollar,
            title: "Cyber Security",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            detailedContent: {
                content:"We prioritize the security of our clients' digital assets by providing comprehensive cybersecurity services. Our offerings include risk assessment, security audits, vulnerability management, incident response, and the implementation of advanced security measures.",
                image:rectangleImage
            }
        },
        {
            id: 2,
            icon: faCloud,
            title: "Cloud Computing",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            detailedContent: {
                content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
                image:cloudImage
            }
        },
        {
            id: 3,
            icon: faCode,
            title: "Web Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent:{
                content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
                image:webImage
            }
        },
        {
            id: 4,
            icon: faCube,
            title: "Data Analytics",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent:{
                content:"Our data analytics services help businesses unlock the full potential of their data. We provide advanced analytics solutions, including data visualization, predictive analytics, and business intelligence. Our team of data scientists and analysts works with clients to derive actionable insights from their data,enabling informed decision-making and strategic planning.",
                image:dataImage
            } 
        },
        {
            id: 5,
            icon: faTv,
            title: "IT Consulting",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent: {
                content:"Our IT consulting services are designed to help businesses navigate the complexities of technology and achieve their strategic goals. We provide expert advice and guidance on a wide range of IT issues, including infrastructure optimization, technology selection, digital transformation, and IT strategy development. Our consultants work closely with clients to understand their unique challenges and deliver customized solutions that drive business success.",
                image:dataImage
            }
               
        },
        {
            id: 6,
            icon: faMobile,
            title: "App Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
            detailedContent:{
                content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
                image:webImage
            } 
        }
    ];

    // Handle card click to show detailed content
    const handleCardClick = (serviceId) => {
        navigate(`/service/${serviceId}`);
    };

    // Handle back button click to go back to the services grid
    const handleBackClick = () => {
        setSelectedService(null);
    };

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
                <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">Services</h1>
                <p className="mt-4 text-sm md:text-base">
                    <span>Home</span> / <span>Services</span>
                </p>
            </div>
          </section>

            {!selectedService ? (
                <div className="service-grid">
                    <div className="service-title">
                        <h3>Our Services</h3>
                    </div>
                    <div className="services">
                        {services.map(service => (
                            <div key={service.id} className="service">
                                <div className="diamond"></div>
                                <div className="smallDiamond"></div>
                                <div className="smallDiamond2"></div>
                                <div className="iconDiv">
                                    <p>
                                        <FontAwesomeIcon icon={service.icon} style={{ fontSize: "30px" }} />
                                    </p>
                                </div>
                                <div className="service-content">
                                    <h4 className='text-lg font-bold mb-2'>{service.title}</h4>
                                    <p>{service.desc}</p>
                                </div>
                                <div className="arrow">
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        onClick={() => handleCardClick(service.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="service-detail">
                    <div className="back-button" onClick={handleBackClick}>
                        <FontAwesomeIcon icon={faArrowLeft} className='arrowIcon' /> 
                    </div>
                    {selectedService.detailedContent}
                </div>
            )}
        </div>
    );
};

export default Services;
export const services = [
    {
        id: 1,
        icon: faHandHoldingDollar,
        title: "Cyber Security",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        detailedContent: {
            content:"We prioritize the security of our clients' digital assets by providing comprehensive cybersecurity services. Our offerings include risk assessment, security audits, vulnerability management, incident response, and the implementation of advanced security measures.",
            image:rectangleImage
        }
    },
    {
        id: 2,
        icon: faCloud,
        title: "Cloud Computing",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        detailedContent: {
            content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
            image:cloudImage
        }
    },
    {
        id: 3,
        icon: faCode,
        title: "Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
        detailedContent:{
            content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
            image:webImage
        }
    },
    {
        id: 4,
        icon: faCube,
        title: "Data Analytics",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
        detailedContent:{
            content:"Our data analytics services help businesses unlock the full potential of their data. We provide advanced analytics solutions, including data visualization, predictive analytics, and business intelligence. Our team of data scientists and analysts works with clients to derive actionable insights from their data,enabling informed decision-making and strategic planning.",
            image:dataImage
        } 
    },
    {
        id: 5,
        icon: faTv,
        title: "IT Consulting",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
        detailedContent: {
            content:"Our IT consulting services are designed to help businesses navigate the complexities of technology and achieve their strategic goals. We provide expert advice and guidance on a wide range of IT issues, including infrastructure optimization, technology selection, digital transformation, and IT strategy development. Our consultants work closely with clients to understand their unique challenges and deliver customized solutions that drive business success.",
            image:dataImage
        }
           
    },
    {
        id: 6,
        icon: faMobile,
        title: "App Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
        detailedContent:{
            content:"We offer comprehensive web development services, creating dynamic and responsive websites that enhance user engagement and provide an exceptional online experience.Our expertise includes front-end and back-end development, content management systems, e-commerce platforms, and web applications. We focus on delivering high-performance websites that are optimized for speed, security, and search engine visibility.",
            image:webImage
        } 
    }
];