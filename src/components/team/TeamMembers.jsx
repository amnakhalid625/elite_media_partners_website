import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import firstImg from '../../assets/images/team1.png';
import secondImg from '../../assets/images/team2.png';
import thirdImg from '../../assets/images/team3.png';
import fourthImg from '../../assets/images/team4.png';
import fiveImg from '../../assets/images/team5.png';
import sixImg from '../../assets/images/team6.png';

const TeamMembers = () => {
  const team = [
    {
      name: "Aamer Waqar Chaudhry",
      position: "Co-Founder",
      image: firstImg,
      link: "/team/aamer-waqar"
    },
    {
      name: 'Ali Aslam Awan',
      position: "Legal Advisor",
      image: fiveImg,
      link: "/team/ali-aslam"
    },
    {
      name: "Hassan Masood",
      position: "Director Business and financial advisory",
      image: sixImg,
      link: "/team/hassan-masood"
    },
    {
      name: "Mehak Irfan",
      position: "CTO",
      image: thirdImg,
      link: "/team/mehak-irfan"
    },
    {
      name: "Aliza Ishfaq",
      position: "Business and growth lead",
      image: secondImg,
      link: "/team/aliza-ishfaq"
    },
    {
      name: "Ayesha Qasim",
      position: "Accounts and Finance Lead",
      image: fourthImg,
      link: "/team/ayesha-qasim"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="text-4xl font-bold text-secondary">Our Team</h2>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            We are a team of dedicated professionals who are passionate about what we do.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button className="team-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:scale-110 -ml-4">
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <button className="team-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:scale-110 -mr-4">
            <FiChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              nextEl: '.team-swiper-button-next',
              prevEl: '.team-swiper-button-prev',
            }}
            loop={true}
            className="py-8"
          >
            {team.map((member, index) => (
              <SwiperSlide key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out h-full max-w-md mx-auto border border-gray-100"
                >
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{member.name}</h3>
                    <p className="text-gray-600 mb-6 text-base">{member.position}</p>
                    <Link to={member.link}>
                      <button className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300 group px-6 py-2 border border-primary rounded-lg hover:bg-primary hover:text-white">
                        View Profile
                        <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;