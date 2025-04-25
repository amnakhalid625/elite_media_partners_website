import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import two from '../../assets/images/s1.webp';
import three from '../../assets/images/s2.webp';
import four from '../../assets/images/s4.webp';
import five from '../../assets/images/s5.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Home = () => {
  return (
    <div className=""> {/* No padding needed since we want full height */}
      <Swiper
        direction="horizontal" // Changed from vertical to horizontal
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade" // Added fade effect for smoother transitions
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper h-screen"
        speed={1000} // Slightly longer transition for smoother effect
        loop={true}
      >
        <SwiperSlide>
          <div
            className="h-screen w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Expert consulting for impactful results.</h1>
              <p className="text-white max-w-2xl mb-6">In a world where change is constant, our consulting services bridge the gap between today's challenges and tomorrow's achievements, so you can act with purpose and precision. Let's redefine what's possible!</p>
              <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition duration-300">Learn More</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${two})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Strategic accounting for seamless growth.</h1>
              <p className="text-white max-w-2xl mb-6">We know numbers tell a story, and we're here to ensure yours is a success. Our Accounting solutions are tailored for seamless financial management. Empowering your business with data-driven insights and ensure every decision counts.</p>
              <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition duration-300">Learn More</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${three})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Smarter tax planning, smarter decisions</h1>
              <p className="text-white max-w-2xl mb-6">When it comes to assurance, trust is everything. Our experts bring rigor, insight, and reliability to every engagement, so you can make critical business decisions with unwavering confidence. Redefine trust with athGADLANG.</p>
              <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition duration-300">Learn More</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${four})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Top talent, zero hassle. We got you covered</h1>
              <p className="text-white max-w-2xl mb-6">Empower your team with agile talent solutions that grow with you. Our resourcing services connect you with the expertise you need, exactly when you need it. Let's build a team that drives results.</p>
              <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition duration-300">Learn More</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${five})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Reliable assurance for your business.</h1>
              <p className="text-white max-w-2xl mb-6">When it comes to assurance, trust is everything. Our experts bring rigor, insight, and reliability to every engagement, so you can make critical business decisions with unwavering confidence. Redefine trust with athGADLANG.</p>
              <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition duration-300">Learn More</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Enhanced Navigation Buttons */}
        <div className="swiper-button-prev !left-10 !w-12 !h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center after:!text-lg after:!text-white hover:bg-opacity-40 shadow-lg backdrop-blur-sm transition-all duration-300 border border-white border-opacity-30 after:content-['prev'] after:font-semibold"></div>
        <div className="swiper-button-next !right-10 !w-12 !h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center after:!text-lg after:!text-white hover:bg-opacity-40 shadow-lg backdrop-blur-sm transition-all duration-300 border border-white border-opacity-30 after:content-['next'] after:font-semibold"></div>
      </Swiper>
    </div>
  );
};

export default Home;