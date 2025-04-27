import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8  mt-8">
      {/* Top Heading */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-primary">About Us</h1>
        <p className="mt-4 text-gray-500 text-lg">
          Dedicated to making your vision a reality with smart financial moves.
        </p>
      </motion.div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {/* Who We Are Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-gray-100 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">Who We Are</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We are a passionate group of finance and business experts helping companies grow smarter and stronger. 
            Our consulting services combine experience, technology, and creativity to deliver solutions that fit.
          </p>
        </motion.div>

        {/* Our Mission Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-gray-100 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our mission is simple: to empower businesses with innovative strategies, accurate financial insights, 
            and risk management tools. We aim to build trusted, long-term relationships with every client we serve.
          </p>
        </motion.div>
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-20"
      >
        <p className="italic text-secondary text-xl">
          "Together, we turn ideas into impact."
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
