import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ServicesImg1 from '../../assets/images/serciveCard1.jpg';
import ServicesImg2 from '../../assets/images/serciveCard2.jpg';
import ServicesImg3 from '../../assets/images/serciveCard3.jpg';
import ServicesImg4 from '../../assets/images/serciveCard4.jpg';
import ServicesImg5 from '../../assets/images/serciveCard5.jpg';
import ServicesImg6 from '../../assets/images/serciveCard6.jpg';
import ServicesImg7 from '../../assets/images/serciveCard7.jpg';
import ServicesImg8 from '../../assets/images/serciveCard8.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { FaUsers, FaCalculator, FaChartLine, FaShieldAlt, FaCheckCircle, FaTools, FaComments, FaGlobe } from 'react-icons/fa';

const services = [
  {
    title: "Resourcing",
    description: "Expert-driven staffing ensures the right talent at the right time efficiently, boosting productivity & success.",
    image: ServicesImg1,
    icon: <FaUsers className="text-red-700 text-2xl" />
  },
  {
    title: "Tax",
    description: "Integrated tax solutions optimize liabilities, ensure compliance, and support global expansion.",
    image: ServicesImg2,
    icon: <FaCalculator className="text-red-700 text-2xl" />
  },
  {
    title: "Accounting",
    description: "Precise financial records enabling informed decisions and efficient business operations.",
    image: ServicesImg3,
    icon: <FaChartLine className="text-red-700 text-2xl" />
  },
  {
    title: "Assurance",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg4,
    icon: <FaShieldAlt className="text-red-700 text-2xl" />
  },
  {
    title: "Risk Advisory",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg5,
    icon: <FaCheckCircle className="text-red-700 text-2xl" />
  },
  {
    title: "Advisory",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg4,
    icon: <FaTools className="text-red-700 text-2xl" />
  },
  {
    title: "Consulting",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg6,
    icon: <FaComments className="text-red-700 text-2xl" />
  },
  {
    title: "Global Services",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg7,
    icon: <FaGlobe className="text-red-700 text-2xl" />
  },
  {
    title: "Business Strategy",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: ServicesImg8,
    icon: <FaChartLine className="text-red-700 text-2xl" />
  }
];

const ServiceCard = ({ service }) => (
  <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 relative">
    <div className="relative overflow-hidden h-48">
      {/* Background image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
      />
      
      {/* Icon that moves to center on hover */}
      <div className="absolute left-4 top-4 p-3 bg-white rounded-lg shadow-md transition-all duration-300 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 z-10">
        {service.icon}
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      <a
        href="#"
        className="text-[#b91c1c] font-semibold flex items-center gap-2 transition-all"
      >
        Read more
        <span className="transform transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>

    <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#b91c1c] group-hover:w-full transition-all duration-500"></div>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-red-700"></div>
          <h2 className="text-3xl font-bold text-[#0d2c40]">Services</h2>
          <div className="w-8 h-0.5 bg-red-700"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="services-container relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="services-swiper mb-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-custom-pagination flex justify-center mt-8"></div>
        </div>
      </div>
      
      {/* Custom CSS for bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 5px;
          border-radius: 0; 
        }
        .swiper-pagination-bullet-active {
          background: #b91c1c;
        }
        .swiper-custom-pagination {
          position: relative;
          bottom: 0;
          width: 100%;
          text-align: center;
          margin-top: 20px;
        }
        .swiper-custom-pagination .swiper-pagination-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 5px;
          border-radius: 0;
          cursor: pointer;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          background: #b91c1c;
        }
      `}</style>
    </section>
  );
};

export default Services;