import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Animation variants for lines and title
const lineVariants2 = {
  hidden: { width: 0 },
  visible: { width: "80px" }, // smoother width
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const TeamMembers = () => {
  const team = [
    {
      name: "Arshad Gadit",
      position: "Global CEO",
      image: 'https://media.istockphoto.com/id/1949501832/photo/handsome-hispanic-senior-business-man-with-crossed-arms-smiling-at-camera-indian-or-latin.jpg?s=612x612&w=0&k=20&c=LtlsYrQxUyX7oRmYS37PnZeaV2JmoPX9hWYPOfojCgw='
    },
    {
      name: "Usman Alam",
      position: "Partner - Assurance & Compliance",
      image: 'https://media.istockphoto.com/id/2165425195/photo/portrait-of-a-man-in-an-office.jpg?s=612x612&w=0&k=20&c=CoKXlahdZicUmnzglzCxmK1qo0qlrO6za2e9-Yjt8b4='
    },
    {
      name: "Yasir Gadit",
      position: "Partner - Consulting",
      image: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
    },
    {
      name: "Abdullah Taimoor",
      position: "Partner - Fixed Asset Management",
      image: "https://media.istockphoto.com/id/1911521695/photo/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=SpbXONYEU27uZpRYxVKuR8OIcmhzTQvcJ6U-bTkXci0="
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading with animated lines */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div 
            className="h-0.5 bg-primary w-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants2}
            transition={{ duration: 0.6 }}
          />
          <motion.h2 
            className="text-3xl font-bold text-secondary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.6 }}
          >
            Team Members
          </motion.h2>
          <motion.div 
            className="h-0.5 bg-primary w-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants2}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <button className="flex items-center justify-center mx-auto text-primary font-semibold hover:text-primary-dark transition-colors">
                  View Profile
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
