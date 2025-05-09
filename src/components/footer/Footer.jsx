import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const Footer = () => {

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      navigate("#services", { replace: true });
    }
  };


  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondaryText">Financial Solutions Inc.</h3>
            <p className="text-secondaryText mb-4">
              Professional financial services tailored to help your business grow and thrive in today's competitive market.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/elitepartnerglobal/" className="text-secondaryText transition-colors" target='_blank'>
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.instagram.com/elite__partners/?utm_source=qr&igsh=ZmI3d3U0bW82Nmpq#" target="_blank" className="text-secondaryText  transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.facebook.com/share/1EiqA1NZFW/" className="text-secondaryText  transition-colors" target='_blank' >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondaryText">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-secondaryText  transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondaryText  transition-colors">About Us</Link></li>
              <li><Link to="#services"
                onClick={handleScrollToServices}

                className="text-secondaryText  transition-colors">Services</Link></li>
              <li><Link to='/contact' className="text-secondaryText  transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondaryText">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/accounting" className="text-secondaryText  transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link to="/planning" className="text-secondaryText  transition-colors">Financial Planning</Link></li>
              <li><Link to="/riskAdvisory" className="text-secondaryText  transition-colors">Risk Advisory</Link></li>
              <li><Link to="/consult" className="text-secondaryText  transition-colors">Strategic Consulting</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondaryText">Contact Us</h4>
            <ul className="space-y-4">
              {/* Contact details */}
              <li className="flex items-center">
                <FaPhone className="text-secondaryText mr-3" />
                <a href="tel:+1234567890" className="text-secondaryText hover:text-secondaryText transition-colors">+923331595761</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-secondaryText mr-3" />
                <a href="mailto:info@financialsolutions.com" className="text-secondaryText hover:text-secondaryText transition-colors">elitepartners00@gmail.com</a>
              </li>
              {/* <li className="flex items-center">
                <FaClock className="text-secondaryText mr-3" />
                <span className="text-secondaryText">Mon-Fri: 9AM - 6PM</span>
              </li> */}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-secondaryText text-sm mb-4 md:mb-0"
          >
            ©{new Date().getFullYear()} Financial Solutions Inc. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a href="#" className="text-secondaryText  transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-secondaryText  transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-secondaryText  transition-colors text-sm">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;