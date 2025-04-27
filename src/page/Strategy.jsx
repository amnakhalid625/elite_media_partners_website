import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiFileText, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiMic, 
  FiBarChart2, 
  FiUsers,
  FiDollarSign,
  FiPieChart,
  FiTarget,
  FiGlobe
} from 'react-icons/fi';

const Strategy = () => {
  const features = [
    {
      icon: <FiFileText className="w-8 h-8 text-primary" />,
      title: "Investor Deck Creation",
      description: "Visually stunning and insight-rich presentations that clearly communicate your company's story and investment potential."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      title: "Financial Modeling",
      description: "Detailed, dynamic models that validate your projections and withstand investor scrutiny."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-primary" />,
      title: "Due Diligence Readiness",
      description: "Full preparation of operational, legal, and financial documentation to navigate investor due diligence with confidence."
    },
    {
      icon: <FiMic className="w-8 h-8 text-primary" />,
      title: "Pitch Coaching",
      description: "Expert coaching sessions to refine your pitch and deliver with clarity, impact, and authenticity."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
      title: "Market Opportunity Analysis",
      description: "Data-backed analysis highlighting the market size, trends, and positioning to boost investor confidence."
    },
    {
      icon: <FiUsers className="w-8 h-8 text-primary" />,
      title: "Ongoing Advisory Support",
      description: "Strategic guidance post-funding to manage new stakeholder expectations and scale effectively."
    }
  ];

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
              <h2 className="text-3xl font-bold text-secondaryText mb-6">
                Ready to Raise Capital?
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We craft compelling investor decks, robust financial models, and comprehensive due-diligence packages that highlight your company's vision, strategy, and growth potential. 
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                As experts emphasize, raising investment capital demands materials that "effectively communicate your company's unique opportunity and execution capability."
                Our team translates your story into data-driven narratives that resonate with investors.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Beyond the pitch, we prepare your financials for rigorous scrutiny. Since cash flow mismanagement remains a top reason for startup failure, we ensure your financials are airtight and investor-ready — setting the foundation for a successful fundraising journey.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Get Started with Fundraising
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <img 
                src="https://media.istockphoto.com/id/1336299174/photo/people-in-a-business-meeting-planning-their-marketing-strategy.jpg?s=612x612&w=0&k=20&c=4pjO78lEmUPRzes9lZAljjp3XndoAvjSgUMmUr_JK2s=" 
                alt="Fundraising Strategy" 
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
              <div className="mt-6 text-center text-gray-600">
                Transform your fundraising story into a powerful, investor-magnet strategy.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-secondaryText mb-16"
          >
            What Makes Our Fundraising Strategy Unique
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                  <h3 className="text-xl font-semibold text-secondaryText">{feature.title}</h3>
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Let's Build Your Investment Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Partner with experts who understand what investors need to see, and let's secure your next round of funding with confidence.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            Schedule a Strategy Call
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Strategy;