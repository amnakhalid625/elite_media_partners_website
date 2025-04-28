import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiActivity, FiAlertCircle, FiGlobe, FiCheckCircle } from 'react-icons/fi';

const RiskAdvisor = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Risk Advisory</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Today's business landscape demands more than ambition — it demands resilience
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
                Build Organizational Resilience
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our Risk Advisory service helps you identify, manage, and mitigate risks across your organization – financial, operational, regulatory, and cybersecurity.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We build robust control frameworks and risk management strategies that strengthen your enterprise resilience and drive confident decision-making. By thoroughly assessing your processes, systems, and data, our specialists spot vulnerabilities and ensure your controls are proactive and effective.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                The result is a resilient organization with a clear strategy to navigate volatility and safeguard stakeholder value.
              </p>
              <a
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition duration-300">
                Assess Your Risks
              </button>
              </a>
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
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Risk Management Strategy" 
                  className={`rounded-lg w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  loading="lazy"
                  width={800}
                  height={450}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="mt-6 text-center text-gray-600">
                Proactive risk management for sustainable business growth
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Comprehensive Risk Management Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: <FiShield className="w-8 h-8 text-primary" />,
                title: "Financial Risk Management",
                description: "Analyze exposures, strengthen internal controls, and conduct stress testing to protect profitability and stability."
              },
              {
                icon: <FiActivity className="w-8 h-8 text-primary" />,
                title: "Operational Risk & Process Improvement",
                description: "Streamline operations to reduce inefficiencies, prevent errors, and mitigate disruptions in daily processes."
              },
              {
                icon: <FiGlobe className="w-8 h-8 text-primary" />,
                title: "Regulatory & Compliance Advisory",
                description: "Keep pace with evolving laws and industry regulations, ensuring full compliance and avoiding costly penalties."
              },
              {
                icon: <FiLock className="w-8 h-8 text-primary" />,
                title: "Cybersecurity & IT Risk",
                description: "Assess and fortify your digital defenses with security audits, data protection policies, and IT governance to safeguard against cyber threats."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Risk Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our specialists will help you identify vulnerabilities and build proactive defenses
          </p>
          <a
          href="https://wa.me/923001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Get Risk Assessment
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default RiskAdvisor;