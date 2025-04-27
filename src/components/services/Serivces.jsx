import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import ServicesImg1 from "../../assets/images/serciveCard1.jpg";
import ServicesImg2 from "../../assets/images/serciveCard2.jpg";
import ServicesImg3 from "../../assets/images/serciveCard3.jpg";
import ServicesImg4 from "../../assets/images/serciveCard4.jpg";
import ServicesImg5 from "../../assets/images/serciveCard5.jpg";
import ServicesImg6 from "../../assets/images/serciveCard6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FaUsers, FaCalculator, FaChartLine, FaShieldAlt, FaCheckCircle, FaComments } from "react-icons/fa";

const services = [
  {
    title: "Accounting & Bookkeeping",
    description: "Managing financial transactions for a clear view of your business’s health.",
    image: ServicesImg1,
    icon: <FaUsers className="text-primary text-2xl" />,
    link: "/accounting",
  },
  {
    title: "Fundraising Support",
    description: "Helping businesses secure the right funding through strategic planning, investor engagement, and expert guidance.",
    image: ServicesImg2,
    icon: <FaCalculator className="text-primary text-2xl" />,
    link: "/fundraising",
  },
  {
    title: "Financial Planning and Analysis",
    description: "Using budgeting, forecasting, and analysis to drive smarter financial decisions and growth.",
    image: ServicesImg3,
    icon: <FaChartLine className="text-primary text-2xl" />,
    link: "/planning",
  },
  {
    title: "Financial & Strategic Advisory",
    description: "Offering expert guidance to optimize performance, maximize value, and fuel business growth.",
    image: ServicesImg4,
    icon: <FaShieldAlt className="text-primary text-2xl" />,
    link: "/strategy",
  },
  {
    title: "Risk Advisory",
    description: "Identifying, assessing, and managing risks to protect business value and ensure sustainable growth.",
    image: ServicesImg5,
    icon: <FaCheckCircle className="text-primary text-2xl" />,
    link: "/riskAdvisory",
  },
  {
    title: "Consulting",
    description: "Offering expert advice and solutions to help businesses overcome challenges and achieve their strategic objectives.",
    image: ServicesImg6,
    icon: <FaComments className="text-primary text-2xl" />,
    link: "/consult",
  },
];

// Animations
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, opacity: 0.3, transition: { duration: 0.4, ease: "easeInOut" } }
};

const iconVariants = {
  initial: { x: 0, y: 0, scale: 1 },
  hover: { x: "-50%", y: "-50%", left: "50%", top: "50%", scale: 1.2, transition: { duration: 0.4, ease: "easeInOut" } }
};

const lineVariants = {
  initial: { width: 0 },
  hover: { width: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
};

const readMoreVariants = {
  initial: { x: 0 },
  hover: { x: 5, transition: { duration: 0.2, ease: "easeInOut", repeat: 0 } }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const lineVariants2 = {
  hidden: { width: 0 },
  visible: { width: "2rem", transition: { duration: 0.5, ease: "easeInOut" } }
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 relative"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    transition={{ delay: index * 0.1 }}
  >
    <div className="relative overflow-hidden h-52">
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        variants={imageVariants}
        initial="initial"
        whileHover="hover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      <motion.div
        className="absolute left-4 top-4 p-3 bg-white rounded-full shadow-lg z-20"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        {service.icon}
      </motion.div>
    </div>

    <div className="p-6 relative z-20">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-500 text-sm mb-4">{service.description}</p>
      <Link
        to={service.link}
        className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
      >
        Read more
        <motion.span variants={readMoreVariants} initial="initial" whileHover="hover">→</motion.span>
      </Link>
    </div>

    <motion.div className="absolute bottom-0 left-0 h-[3px] bg-primary" variants={lineVariants} initial="initial" whileHover="hover" />
  </motion.div>
);

const Services = () => {
  return (
    <motion.section
      className="py-16 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
     <div className="mb-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-primary"></div>
          <h2 className="text-3xl font-bold text-secondary">Services</h2>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
        <p className="text-gray-600 text-center mt-2">We offer a wide range of services to help your business succeed.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="services-container relative" variants={cardVariants}>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
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

      {/* Swiper Bullet Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 14px;
          height: 14px;
          background: #00555A;
          transform: scale(1.2);
        }
        .swiper-custom-pagination {
          margin-top: 20px;
        }
      `}</style>
    </motion.section>
  );
};

export default Services;
