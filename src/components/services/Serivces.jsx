import React from 'react';
import { FaChartBar, FaCalculator, FaLandmark, FaBullhorn } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
      {/* Background Image with Overlay */}
      <div className="relative h-64 w-full">
        {/* Background Image - opacity decreases on hover */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-30"
          style={{ 
            backgroundImage: `url(${icon.image})`,
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        {/* Icon - moves to center on hover */}
        <div className="absolute left-6 top-6 p-3 bg-white rounded-lg shadow-md transition-all duration-300 transform group-hover:translate-x-center group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
          {icon.component}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="flex items-center text-red-700 font-medium">
          Read more 
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Tax",
      description: "Integrated tax solutions optimize liabilities, ensure compliance, and support global expansion.",
      icon: {
        component: <FaCalculator className="text-red-700 text-2xl" />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    },
    {
      title: "Accounting",
      description: "Precise financial records enabling informed decisions and efficient business operations.",
      icon: {
        component: <FaChartBar className="text-red-700 text-2xl" />,
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93806b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    },
    {
      title: "Assurance",
      description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
      icon: {
        component: <FaLandmark className="text-red-700 text-2xl" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    },
    {
      title: "Consulting",
      description: "Strategic consulting in finance, marketing, economics, and HR to drive sustainable business growth.",
      icon: {
        component: <FaBullhorn className="text-red-700 text-2xl" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-red-700"></div>
            <h2 className="text-3xl font-bold text-blue-900">Services</h2>
            <div className="w-8 h-0.5 bg-red-700"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;