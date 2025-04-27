import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "The financial advisory we received was exceptional. Their team helped us streamline operations and increase profitability by 30% in just one year.",
      name: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      rating: 5,
      image: "/images/testimonials/client1.jpg"
    },
    {
      quote: "Their risk assessment services saved our company from potential compliance issues. Truly professional and thorough in their approach.",
      name: "Michael Chen",
      position: "CFO, Global Ventures",
      rating: 5,
      image: "/images/testimonials/client2.jpg"
    },
    {
      quote: "The fundraising support was game-changing for our startup. We secured $5M in funding thanks to their strategic guidance.",
      name: "Emma Rodriguez",
      position: "Founder, GreenInnovate",
      rating: 4,
      image: "/images/testimonials/client3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Hear from businesses that have transformed their financial operations with our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-4 text-teal-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
              
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            View More Testimonials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;