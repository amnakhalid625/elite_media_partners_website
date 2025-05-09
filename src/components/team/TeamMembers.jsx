import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import firstImg from '../../assets/images/team1.png';
import secondImg from '../../assets/images/team2.png';
import thirdImg from '../../assets/images/team3.png';
import fourthImg from '../../assets/images/team4.png';


const lineVariants2 = {
  hidden: { width: 0 },
  visible: { width: "80px" },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const TeamMembers = () => {
  const team = [
    {
      name: "Aamer Waqar Chaudhry",
      position: "Global CEO",
      image: firstImg,
      link: "/team/aamer-waqar"
    },
    {
      name:'Ali Aslam Awan',
      position: "Global CFO",
      image: firstImg,
      link: "/team/aamer-waqar"
    },
    {
      name: "Aliza Ishfaq",
      position: "Partner - Assurance & Compliance",
      image: secondImg,
      link: "/team/aliza-ishfaq"
    },
    {
      name: "Aliza Ishfaq",
      position: "Partner - Assurance & Compliance",
      image: secondImg,
      link: "/team/aliza-ishfaq"
    },
    {
      name: "Mehak Irfan",
      position: "Partner - Consulting",
      image: thirdImg,
      link: "/team/mehak-irfan"
    },
    {
      name: "Ayesha Qasim",
      position: "Partner - Fixed Asset Management",
      image: fourthImg,
      link: "/team/ayesha-qasim"
    }
  ];


  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-primary"></div>
            <h2 className="text-3xl font-bold text-secondary">Our Team</h2>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <p className="text-secondaryText text-center mt-2">We are a team of dedicated professionals who are passionate about what we do.</p>
        </div>


        {/* Cards */}
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
                <h3 className="text-xl font-semibold text-secondaryText mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <Link to={member.link}>
                  <button className="flex items-center justify-center mx-auto text-primary font-semibold hover:text-primary-dark transition-colors">
                    View Profile
                    <FiArrowRight className="ml-2" />
                  </button>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
