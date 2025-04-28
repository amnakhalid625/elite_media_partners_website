import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiPieChart, FiTarget, FiGlobe, FiLayers } from 'react-icons/fi';

const Consult = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Strategic Consulting</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert guidance to transform challenges into growth opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tailored Business Solutions
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our consulting services provide the strategic insight and practical solutions you need to navigate complex business challenges and capitalize on emerging opportunities.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We combine industry expertise with analytical rigor to deliver actionable recommendations that drive measurable results. Whether you're facing operational hurdles, market shifts, or growth decisions, our consultants become your trusted partners.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                From initial assessment to implementation support, we're with you every step of the way to ensure sustainable success.
              </p>
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition duration-300">
                Start Your Consultation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="relative aspect-video">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Business Consulting Meeting" 
                  className={`rounded-lg w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  loading="lazy"
                  width={800}
                  height={450}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="mt-6 text-center text-gray-600">
                Collaborative approach to solving complex business challenges
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Our Consulting Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiBriefcase className="w-8 h-8 text-primary" />,
                title: "Business Strategy",
                description: "Develop winning strategies for market entry, growth, and competitive positioning"
              },
              {
                icon: <FiUsers className="w-8 h-8 text-primary" />,
                title: "Organizational Design",
                description: "Optimize your structure, processes, and talent for peak performance"
              },
              {
                icon: <FiPieChart className="w-8 h-8 text-primary" />,
                title: "Operational Excellence",
                description: "Streamline operations to reduce costs and improve efficiency"
              },
              {
                icon: <FiTarget className="w-8 h-8 text-primary" />,
                title: "Digital Transformation",
                description: "Leverage technology to innovate and future-proof your business"
              },
              {
                icon: <FiGlobe className="w-8 h-8 text-primary" />,
                title: "Market Expansion",
                description: "Navigate new markets and customer segments with confidence"
              },
              {
                icon: <FiLayers className="w-8 h-8 text-primary" />,
                title: "Change Management",
                description: "Guide your organization through transformation successfully"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with our experts to develop and execute winning strategies
          </p>
          <a 
          href="https://wa.me/923001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          
          >
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Schedule Consultation
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Consult;