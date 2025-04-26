import React from "react";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import ServicesImg1 from '../../assets/images/serciveCard1.jpg';
import ServicesImg2 from '../../assets/images/serciveCard2.jpg';
import ServicesImg3 from '../../assets/images/serciveCard3.jpg';
import ServicesImg4 from '../../assets/images/serciveCard4.jpg';
import ServicesImg5 from '../../assets/images/serciveCard5.jpg';
import ServicesImg6 from '../../assets/images/serciveCard6.jpg';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { FaUsers, FaCalculator, FaChartLine, FaShieldAlt, FaCheckCircle, FaComments } from 'react-icons/fa';

const services = [
  {
    title: "Accounting & Bookkeeping",
    description: "Managing financial transactions for a clear view of your business’s health.", 
    image: ServicesImg1,
    icon: <FaUsers className="text-red-700 text-2xl" />,
    link: '/accounting'
  },
  {
    title: "Fundraising Support",
    description: "Helping businesses secure the right funding through strategic planning, investor engagement, and expert guidance.",
    image: ServicesImg2,
    icon: <FaCalculator className="text-red-700 text-2xl" />,
    link: '/fundraising'
  },
  {
    title: "Financial Planning and Analysis",
    description: "Using budgeting, forecasting, and analysis to drive smarter financial decisions and growth.",
    image: ServicesImg3,
    icon: <FaChartLine className="text-red-700 text-2xl" />,
    link: '/planning'
  },
  {
    title: "Financial & Strategic Advisory",
    description: "Offering expert guidance to optimize performance, maximize value, and fuel business growth.",
    image: ServicesImg4,
    icon: <FaShieldAlt className="text-red-700 text-2xl" />,
    link: '/strategy'
  },
  {
    title: "Risk Advisory",
    description: "Identifying, assessing, and managing risks to protect business value and ensure sustainable growth.",
    image: ServicesImg5,
    icon: <FaCheckCircle className="text-red-700 text-2xl" />,
    link: '/riskAdvisory'

  },
 
  {
    title: "Consulting",
    description: "Offering expert advice and solutions to help businesses overcome challenges and achieve their strategic objectives.",
    image: ServicesImg6,
    icon: <FaComments className="text-red-700 text-2xl" />,
    link: '/consult'


  },
 
];

// Card animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {
  initial: { x: 0, y: 0, scale: 1 },
  hover: { 
    x: "-50%", 
    y: "-50%", 
    left: "50%", 
    top: "50%", 
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { 
    scale: 1.1, 
    opacity: 0.3,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const lineVariants = {
  initial: { width: 0 },
  hover: { 
    width: "100%",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const readMoreVariants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      repeat: 0
    }
  }
};

const ServiceCard = ({ service, index }) => (
  <motion.div 
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 relative"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    transition={{ 
      delay: index * 0.1 
    }}
  >
    <div className="relative overflow-hidden h-48">
      {/* Background image */}
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        variants={imageVariants}
        initial="initial"
        whileHover="hover"
      />
      
      {/* Icon that moves to center on hover */}
      <motion.div 
        className="absolute left-4 top-4 p-3 bg-white rounded-lg shadow-md z-10"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        {service.icon}
      </motion.div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      <Link
        to="#"
        className="text-[#b91c1c] font-semibold flex items-center gap-2"
      >
        Read more
        <motion.span
          variants={readMoreVariants}
          initial="initial"
          whileHover="hover"
        >
          →
        </motion.span>
      </Link>
    </div>

    <motion.div 
      className="absolute bottom-0 left-0 h-[4px] bg-[#b91c1c]"
      variants={lineVariants}
      initial="initial"
      whileHover="hover"
    ></motion.div>
  </motion.div>
);

// Section animations
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const lineVariants2 = {
  hidden: { width: 0 },
  visible: {
    width: "2rem",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Services = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2">
          <motion.div 
            className="h-0.5 bg-primary"
            variants={lineVariants2}
          ></motion.div>
          <motion.h2 
            className="text-3xl font-bold text-secondary"
            variants={titleVariants}
          >
            Services
          </motion.h2>
          <motion.div 
            className="h-0.5 bg-primary"
            variants={lineVariants2}
          ></motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="services-container relative"
          variants={cardVariants}
        >
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
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-custom-pagination flex justify-center mt-8"></div>
        </motion.div>
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
    </motion.section>
  );
};

export default Services;