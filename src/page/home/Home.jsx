import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import one from '../../assets/images/slide1.png'
import two from '../../assets/images/slide2.jpg';
import three from '../../assets/images/s2.webp';
import four from '../../assets/images/s4.webp';
import five from '../../assets/images/s5.webp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Services from '../../components/services/Serivces';
// import ContentCard from '../../components/contentCard/ContentCard';
import TeamMembers from '../../components/team/TeamMembers';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';
import { motion } from 'framer-motion';

const slides = [
  {
    bg:one,
    title: "Transforming Financial Strategy",
    desc: "Elite Partners redefines how businesses manage finance with a commitment to precision, transparency, and strategic growth.",
  
  
  },
  {
    bg: two,
    title: "Complete Financial Solutions",
    desc: "Offering Accounting, Financial Advisory, Fundraising, and Mergers & Acquisitions services tailored for today’s evolving business needs.",
  },
  {
    bg: three,
    title: "Global Standards  and Trusted Frameworks",
    desc: "We anchor our solutions in international standards like IFRS and GAAP, using industry-leading methodologies to ensure compliance and excellence.",
  },
  {
    bg: four,
    title: " Technology-Driven Growth",
    desc: "Combine cloud-based tools with expert insights.Focus on building a strong financial foundation and supporting data-driven decisions.",
  },
  {
    bg: five,
    title: "Unlocking Value and Accelerating Growth",
    desc: "By leveraging cloud-based tools and seasoned expertise, we build strong financial foundations that enable data-driven decisions.",
  },
];

const Home = () => {
  return (
    <>
      <div className="pt-16">
        <Swiper
          direction="horizontal"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          modules={[Navigation, Autoplay, EffectFade]}
          className="mySwiper h-[70vh] md:h-[80vh] lg:h-[95vh]"
          speed={1000}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-4xl md:text-5xl sm:text-4xl sm:mb-4 sm:leading-snug font-bold mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white max-w-2xl mb-6"
                  >
                    {slide.desc}
                  </motion.p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    href="https://www.linkedin.com/company/elitepartnerglobal/"
                    target="_blank"
                    className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300"
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigate Buttons */}
          <div className="swiper-button-prev 
            !left-4 sm:!left-10 
            !w-10 !h-10 sm:!w-12 sm:!h-12 
            rounded-full bg-white bg-opacity-20 
            flex items-center justify-center 
            after:!text-sm sm:after:!text-lg after:!text-white 
            hover:bg-opacity-40 shadow-lg backdrop-blur-sm 
            transition-all duration-300 
            border border-white border-opacity-30 
            after:content-['prev'] after:font-semibold">
          </div>

          <div className="swiper-button-next 
            !right-4 sm:!right-10 
            !w-10 !h-10 sm:!w-12 sm:!h-12 
            rounded-full bg-white bg-opacity-20 
            flex items-center justify-center 
            after:!text-sm sm:after:!text-lg after:!text-white 
            hover:bg-opacity-40 shadow-lg backdrop-blur-sm 
            transition-all duration-300 
            border border-white border-opacity-30 
            after:content-['next'] after:font-semibold">
          </div>
        </Swiper>
      </div>

      <Services />
      {/* <ContentCard /> */}
      <TeamMembers />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
