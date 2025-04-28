import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "The financial advisory we received was exceptional. Their team helped us streamline operations and increase profitability by 30% in just one year.",
      name: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
    },
    {
      quote: "Their risk assessment services saved our company from potential compliance issues. Truly professional and thorough in their approach.",
      name: "Michael Chen",
      position: "CFO, Global Ventures",
    },
    {
      quote: "The fundraising support was game-changing for our startup. We secured $5M in funding thanks to their strategic guidance.",
      name: "Emma Rodriguez",
      position: "Founder, GreenInnovate",
    },
    {
      quote: "Their accounting services brought clarity to our financials and helped us make better business decisions. Highly recommended!",
      name: "David Wilson",
      position: "Director, Wilson & Co.",
    },
    {
      quote: "The strategic advisory transformed our business model and doubled our valuation in 18 months.",
      name: "Lisa Park",
      position: "Managing Partner, Horizon Group",
    },
   
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-primary"></div>
          <h2 className="text-3xl font-bold text-secondary">Testimonials</h2>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
        <p className="text-secondaryText text-center mt-2">What our clients have to say.</p>
      </div>

        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-background p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full"
                >
                 
                  
                  <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                  
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>




                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center mt-8 gap-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 14px;
          height: 14px;
          background: #00555A;
          transform: scale(1.2);
        }
        .swiper-custom-pagination {
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;