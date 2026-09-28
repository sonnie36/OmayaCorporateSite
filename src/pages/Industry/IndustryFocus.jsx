import React, { useState } from 'react';

const industries = {
    'Information Technology (IT)': {
      title: 'Information Technology (IT)',
      image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728286912/workers-standing-checking-beside-working-oil-pumps_1_phk2jh.png',
      content: `- Managed IT Services: Comprehensive IT support and maintenance to ensure smooth and efficient operations.`,
      content2:`- IT Infrastructure Optimization: Enhancing IT infrastructure for better performance, scalability, and security.`
    },
    Telecommunications: {
      title: 'Telecommunications',
      image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287499/Mask_group_xn79yc.png', // Add your 
      content: `- Network Management: Optimizing network performance and reliability through advanced monitoring and management tools.`,
       content2:` - Telecom Software Solutions: Developing customized software to support telecom operations, including billing, CRM, and network management .`
    },
    Healthcare: {
      title: 'Healthcare',
      image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287498/Mask_group_1_m4dk0d.png', // Add your healthcare image URL here
      content: `- Electronic Health Records (EHR): Implementing and managing secure EHR systems to improve patient care and data accessibility.
     `,
       content2:` - Telemedicine Solutions: Enabling remote healthcare services through secure and user-friendly telemedicine platforms.`
    },
    Finance: {
      title: 'Finance',
      image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287498/Mask_group_2_x5jhnh.png',
      content:`- Fintech Applications: Developing innovative financial technology solutions, including digital wallets, payment gateways, and investment platforms.`,
     content2:` - Risk Management Systems: Implementing advanced analytics and AI to identify and mitigate financial risks`
  },
  Education:{
    title: 'Education',
    image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287498/Mask_group_3_zhaeal.png',
    content:`- E-learning Platforms: Creating interactive and scalable online learning platforms to enhance educational experiences.
   `,
    content2:` - School Management Systems: Implementing comprehensive solutions for managing administrative and academic operations in educational institutions`
  },
    Retail:{
        title: 'Retail',
        image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287526/Mask_group_4_krftyq.png',
        content:`- E-commerce Solutions: Developing robust e-commerce platforms with features such as personalized recommendations, secure payment gateways, and inventory management.`,
        content2:` - Customer Analytics: Leveraging data analytics to understand customer behavior and optimize marketing strategies.`
    },
    'Logistics and Transportation':{
        title: 'Logistics and Transportation',
        image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287526/workers-standing-checking-beside-working-oil-pumps_1_1_h6pube.png',
        content:`- Fleet Management Systems: Implementing solutions to monitor and manage logistics operations, including route optimization and vehicle tracking.
        `,
        content2:`- Warehouse Management: Developing software to improve inventory management and warehouse operations.`
    },
    'Real Estate':{
        title: 'Real Estate',
        image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287526/workers-standing-checking-beside-working-oil-pumps_1_2_tzbbex.png',
        content:`- Property Management Systems: Creating solutions to manage real estate properties, including tenant management and maintenance scheduling.
       `,
        content2:` - Virtual Tour Platforms: Developing virtual reality solutions to enhance property viewing experiences.`
    },
    'Government and Public Sector':{
        title: 'Government and Public Sector',
        image: 'https://res.cloudinary.com/dam1sxczj/image/upload/v1728287526/Mask_group_5_b77qiu.png',
        content:`- E-Government Solutions: Developing digital platforms to improve public services and government operations.`,
        content2:`  - Data Management Systems: Implementing secure and efficient data management solutions for public sector organizations.`
    },


};

const IndustryFocus = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(Object.keys(industries)[0]);
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
        <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">INDUSTRY FOCUS</h1>
        <p className="mt-4 text-sm md:text-base">
          <span>Home</span> / <span>Industry Focus</span>
        </p>
      </div>
    </section>
    <div className=" flex flex-col md:flex-row">
      {/* Left Side Navigation */}
      <div className="bg-gray-900 text-white w-full md:w-1/4 p-6 md:py-12">
          <h3 className="font-bold text-lg mb-4">WE PROVIDE SEVERAL INDUSTRIES</h3>
          <ul className="space-y-4 text-gray-300">
            {/* Navigation items for each industry */}
            {Object.keys(industries).map((industry, index) => (
              <li
                key={industry}
                onClick={() => setSelectedIndustry(industry)} // Update state on click
                className={`cursor-pointer ${
                  selectedIndustry === industry ? 'text-green-400 font-semibold' : ''
                }`}
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>

      {/* Right Side Content */}
      <div className="bg-white w-full md:w-3/4 p-6 md:p-12 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
              <img
                src={industries[selectedIndustry].image} // Dynamic image based on selected industry
                alt={selectedIndustry}
                className="w-full h-auto object-cover rounded"
              />
            </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
              <h2 className="text-green-500 font-bold text-lg mb-2">TARGET INDUSTRIES</h2>
              <h3 className="text-gray-800 font-semibold text-xl mb-4">{industries[selectedIndustry].title}</h3>
              <p className="text-gray-600 leading-relaxed">{industries[selectedIndustry].content}</p>
              <p className="text-gray-600 leading-relaxed">{industries[selectedIndustry].content2}</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default IndustryFocus;
