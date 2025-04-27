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
      image: 'https://media.istockphoto.com/id/2187981222/photo/head-and-shoulders-portrait-of-businesswoman-sitting-at-desk-in-office-working-on-computer.jpg?s=612x612&w=0&k=20&c=yoRaRte1OPkMhHId1JFNm6QJfoQf5kbd_2CjO1ueRbg='
    },
    {
      quote: "Their risk assessment services saved our company from potential compliance issues. Truly professional and thorough in their approach.",
      name: "Michael Chen",
      position: "CFO, Global Ventures",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5wEk9NDXVRY9kYNehvBq9gAAReTy5HuBTQ&s'
    },
    {
      quote: "The fundraising support was game-changing for our startup. We secured $5M in funding thanks to their strategic guidance.",
      name: "Emma Rodriguez",
      position: "Founder, GreenInnovate",
      image: 'https://media.istockphoto.com/id/806760428/photo/happy-latin-american-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=ydJQoIQHJlt3sv0GCAeq1exnYZ2PkkiIOd_67dbYdyk='
    },
    {
      quote: "Their accounting services brought clarity to our financials and helped us make better business decisions. Highly recommended!",
      name: "David Wilson",
      position: "Director, Wilson & Co.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww'
    },
    {
      quote: "The strategic advisory transformed our business model and doubled our valuation in 18 months.",
      name: "Lisa Park",
      position: "Managing Partner, Horizon Group",
      image: 'https://media.istockphoto.com/id/868502600/photo/woman-sitting-in-cafe.jpg?s=612x612&w=0&k=20&c=cqR-W16X8Z21JE_X1TARv2qMYRoMGK7pNc1mZAOiY8o='
    },
   
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Hear from businesses that have transformed their financial operations with our services
          </p>
        </motion.div>

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
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full"
                >
                 
                  
                  <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                  
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
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