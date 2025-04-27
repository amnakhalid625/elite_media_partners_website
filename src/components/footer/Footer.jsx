import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Footer = () => {
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
              <a href="#" className="text-secondaryText transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-secondaryText  transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-secondaryText  transition-colors">
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
              <li><a href="#" className="text-secondaryText  transition-colors">Home</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Services</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Contact</a></li>
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
              <li><a href="#" className="text-secondaryText  transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Risk Advisory</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Strategic Consulting</a></li>
              <li><a href="#" className="text-secondaryText  transition-colors">Tax Compliance</a></li>
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
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondaryText mt-1 mr-3 flex-shrink-0" />
                <span className="text-secondaryText">123 Financial District, Suite 456<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-secondaryText mr-3" />
                <a href="tel:+1234567890" className="text-secondaryText hover:text-secondaryText transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-secondaryText mr-3" />
                <a href="mailto:info@financialsolutions.com" className="text-secondaryText hover:text-secondaryText transition-colors">info@financialsolutions.com</a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-secondaryText mr-3" />
                <span className="text-secondaryText">Mon-Fri: 9AM - 6PM</span>
              </li>
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
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Financial Solutions Inc. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a href="#" className="text-gray-500  transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500  transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500  transition-colors text-sm">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;