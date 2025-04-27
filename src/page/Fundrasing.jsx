import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiBarChart2, FiClipboard, FiMic, FiSearch, FiUsers } from 'react-icons/fi';

const Fundraising = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Fundraising Strategy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering your capital raise with strategic storytelling, financial precision, and investor-ready documentation.
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
                Ready to Raise Capital?
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We craft compelling investor decks, robust financial models, and comprehensive due-diligence packages that highlight your company's vision, strategy, and growth potential.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our team translates your story into data-driven narratives that resonate with investors, creating materials that effectively communicate your company's unique opportunity.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We ensure your financials are airtight and investor-ready — setting the foundation for a successful fundraising journey.
              </p>
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition duration-300">
                Get Started with Fundraising
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
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fundraising Process Flow" 
                  className={`rounded-lg w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  loading="lazy"
                  width={800}
                  height={450}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="mt-6 text-center text-gray-600">
                Our comprehensive fundraising approach maximizes your success potential
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Comprehensive Fundraising Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiDollarSign className="w-8 h-8 text-primary" />,
                title: "Investor Deck Creation",
                description: "Visually stunning and insight-rich presentations that clearly communicate your investment potential"
              },
              {
                icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
                title: "Financial Modeling",
                description: "Detailed, dynamic models that validate your projections and withstand investor scrutiny"
              },
              {
                icon: <FiClipboard className="w-8 h-8 text-primary" />,
                title: "Due Diligence Readiness",
                description: "Full preparation of operational, legal, and financial documentation for investor review"
              },
              {
                icon: <FiMic className="w-8 h-8 text-primary" />,
                title: "Pitch Coaching",
                description: "Expert coaching sessions to refine your pitch and deliver with clarity and impact"
              },
              {
                icon: <FiSearch className="w-8 h-8 text-primary" />,
                title: "Market Opportunity Analysis",
                description: "Data-backed analysis highlighting market size, trends, and positioning"
              },
              {
                icon: <FiUsers className="w-8 h-8 text-primary" />,
                title: "Investor Relations",
                description: "Ongoing strategic guidance to manage investor expectations and communications"
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
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Fundraising?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our experts craft your investment story and prepare all the materials you need for a successful raise
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Fundraising;