import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faArrowRight, faCloud, faCode, faCube, faTv, faMobile } from '@fortawesome/free-solid-svg-icons';

const ServicesHome = () => {
    const services = [
        {
            id: 1,
            icon:faHandHoldingDollar,
            title: "Cyber Security",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        },
        {
            id: 2,
            icon: faCloud,
            title: "Cloud Computing",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        },
                {
            id: 3,
            icon: faCode,
            title: "Web Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        },
        {
            id: 4,
            icon: faCube,
            title: "Data Analytics",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        },
        {
            id: 5,
            icon: faTv,
            title: "IT Consulting",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        },
        {
            id: 6,
            icon: faMobile,
            title: "App Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."
        }
    ]
  return (
    <div>
        <div className='header'>
            <p className='line1' style={{}}></p>
           <h5>OUR SERVICES</h5>
        </div>
        <div className='service-title'>
            <h3>Choose Service To <br />Manage Your Business</h3>
        </div>
        <div className="services">
            {
                services.map(service => (
                    <div key={service.id}>
                       
                        <div className='service '>
                            
                            <div className='diamond'></div>
                            <div className="smallDiamond"></div>
                            <div className="smallDiamond2"></div>
                            <div className='iconDiv'>
                                <p><FontAwesomeIcon icon={service.icon} style={{fontSize:"30px",}}/></p>
                            </div>
                        <div className="service-content">
                            <h4 className='text-lg font-semibold mb-2'>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                        <div className='arrow'><FontAwesomeIcon icon={faArrowRight} style={{
                            }}/></div>
                        </div>
                    </div>
                    ))
            }
        </div>
        
    </div>
  )
}

export default ServicesHome