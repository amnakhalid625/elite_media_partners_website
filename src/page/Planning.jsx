import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiPieChart, FiBarChart2, FiCalendar, FiTarget } from 'react-icons/fi';

const Planning = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Financial Planning & Analysis</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming your data into strategic insights that drive smarter decision-making
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
                Strategic Financial Insights
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We partner with you to design realistic budgets and forecasts that align with your business goals. Through performance reporting and scenario planning, we uncover trends and opportunities.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our FP&A services help you anticipate challenges and seize growth prospects. With clear visibility into cash flow and key financial drivers, your leadership team can plan for the future with confidence and agility.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition duration-300">
                Get Financial Insights
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Financial Planning Analysis" 
                  className={`rounded-lg w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  loading="lazy"
                  width={800}
                  height={450}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="mt-6 text-center text-gray-600">
                Data-driven financial planning for strategic business decisions
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Comprehensive FP&A Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiDollarSign className="w-8 h-8 text-blue-700" />,
                title: "Budgeting & Forecasting",
                description: "Develop realistic annual budgets and rolling forecasts, adjusting quickly to changing conditions and priorities."
              },
              {
                icon: <FiTrendingUp className="w-8 h-8 text-blue-700" />,
                title: "Performance Reporting",
                description: "Create customized dashboards and reports to monitor KPIs and financial performance against targets."
              },
              {
                icon: <FiPieChart className="w-8 h-8 text-blue-700" />,
                title: "Scenario Planning",
                description: "Evaluate various scenarios (best case, worst case) and craft strategic plans to optimize outcomes."
              },
              {
                icon: <FiBarChart2 className="w-8 h-8 text-blue-700" />,
                title: "Strategic Planning",
                description: "Align financial planning with long-term business objectives and growth strategies."
              },
              {
                icon: <FiCalendar className="w-8 h-8 text-blue-700" />,
                title: "Cash Flow Management",
                description: "Monitor working capital and cash flow projections to ensure sufficient funds for operations and growth."
              },
              {
                icon: <FiTarget className="w-8 h-8 text-blue-700" />,
                title: "KPI Analysis",
                description: "Identify and track key performance indicators that drive your business success."
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
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Data-Driven Financial Planning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your financial data into actionable insights that drive business growth
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Get Your Financial Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default Planning;