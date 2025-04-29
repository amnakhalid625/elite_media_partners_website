import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiTrendingUp, FiShield, FiPieChart, FiCheckCircle } from 'react-icons/fi';

const Accounting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Accounting & Compliance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Precision financial management aligned with global standards for business clarity and growth
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
                Full-Cycle Accounting Aligned with IFRS & GAAP
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We handle your complete accounting needs with meticulous attention to detail, producing reliable financial statements and clear reporting that give you confidence in your numbers.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our smart systems and rigorous processes keep your books perfectly organized and audit-ready, ensuring your financials are always investor-grade and compliance-proof.
              </p>
              <a 
            href="https://wa.me/923331595761" 
            target="_blank" 
            rel="noopener noreferrer"
              >
              <button 
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg transition duration-300">
                Get Your Free Consultation
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
              <img 
                src="https://media.istockphoto.com/id/1429274633/photo/businessmen-verify-the-accuracy-of-paperwork-business-reviews-are-essential-search-for.jpg?s=2048x2048&w=is&k=20&c=tla5tUuyJSXWy6fZzDTErI18JlW9G4YX_UFqgfXg3Ug=" 
                alt="Accounting Process Flow" 
                className="rounded-lg w-full h-auto"
              />
              <div className="mt-6 text-center text-gray-600">
                Our end-to-end accounting workflow ensures nothing gets missed
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Comprehensive Accounting Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiFileText className="w-8 h-8 text-teal-700" />,
                title: "Financial Reporting",
                description: "Accurate monthly, quarterly, and annual financial statements prepared to international standards"
              },
              {
                icon: <FiTrendingUp className="w-8 h-8 text-teal-700" />,
                title: "Tax Compliance",
                description: "Timely filing and optimization strategies to minimize liabilities while maintaining compliance"
              },
              {
                icon: <FiShield className="w-8 h-8 text-teal-700" />,
                title: "Audit Support",
                description: "Complete preparation and representation during financial audits and reviews"
              },
              {
                icon: <FiPieChart className="w-8 h-8 text-teal-700" />,
                title: "Management Accounting",
                description: "Actionable insights and KPI tracking to support strategic decision-making"
              },
              {
                icon: <FiCheckCircle className="w-8 h-8 text-teal-700" />,
                title: "Regulatory Compliance",
                description: "Ensuring adherence to all financial regulations and reporting requirements"
              },
              {
                icon: <FiFileText className="w-8 h-8 text-teal-700" />,
                title: "Payroll Processing",
                description: "Accurate and timely payroll services with full compliance documentation"
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
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Accounting?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our experts handle your financials so you can focus on growing your business
          </p>
          <a
          href="https://wa.me/923331595761" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Schedule a Consultation
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Accounting;