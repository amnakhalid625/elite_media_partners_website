import React from 'react';
import { motion } from 'framer-motion';

const Accounting = () => {
  return (
    <motion.section
      className="pt-32 pb-20 px-6 bg-gradient-to-r from-white via-[#f7fafc] to-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Accounting & Compliance
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We handle full-cycle accounting aligned with <span className="font-semibold text-secondary">IFRS</span> and <span className="font-semibold text-secondary">GAAP</span>,
          producing reliable financial statements and clear reporting. 
          Our meticulous processes and smart systems keep your books organized and audit-ready, 
          ensuring your financials are always investor-ready.
        </p>

        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-left"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">What We Offer:</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
            <li>Full-cycle accounting services tailored to your needs.</li>
            <li>Compliance with IFRS and GAAP standards.</li>
            <li>Clear, reliable financial statements and reports.</li>
            <li>Audit-ready, investor-friendly bookkeeping systems.</li>
            <li>Smart processes to minimize errors and maximize efficiency.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Accounting;
