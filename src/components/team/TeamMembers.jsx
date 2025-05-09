import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import firstImg from '../../assets/images/team1.png';
import secondImg from '../../assets/images/team2.png';
import thirdImg from '../../assets/images/team3.png';
import fourthImg from '../../assets/images/team4.png';
import fiveImg from '../../assets/images/team5.png';
import sixImg from '../../assets/images/team6.png';

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
      position: "Legal Advisor",
      image: fiveImg,
      link: "/team/ayesha-ali"
    },
    {
      name: "Hassan Masood",
      position: "Finance & Audit Professional",
      image: sixImg,
      link: "/team/hassan-masood"
    },
    {
      name: "Mehak Irfan",
      position: "Partner - Consulting",
      image: thirdImg,
      link: "/team/mehak-irfan"
    },
    {
      name: "Aliza Ishfaq",
      position: "Partner - Assurance & Compliance",
      image: secondImg,
      link: "/team/aliza-ishfaq"
    },
    {
      name: "Ayesha Qasim",
      position: "Partner - Fixed Asset Management",
      image: fourthImg,
      link: "/team/ayesha-qasim"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.div 
            variants={lineVariants2}
            className="mx-auto w-20 h-1 bg-primary mb-4"
          />
          <motion.h2 
            variants={titleVariants}
            className="text-4xl font-bold text-secondary mb-3"
          >
            Our Team
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg text-secondaryText max-w-2xl mx-auto"
          >
            We are a team of dedicated professionals who are passionate about what we do.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-5">{member.position}</p>
                <Link to={member.link}>
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group-hover:underline">
                    View Profile
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
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