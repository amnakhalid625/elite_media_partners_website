import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import db from "../../firebase/firebaseConfig";

const defaultTestimonials = [
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
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [showModal, setShowModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', position: '', quote: '' });

  useEffect(() => {
    const fetchTestimonials = async () => {
      const snapshot = await getDocs(collection(db, "testimonials"));
      const firestoreTestimonials = snapshot.docs.map(doc => doc.data());
      setTestimonials([...defaultTestimonials, ...firestoreTestimonials]);
    };
    fetchTestimonials();
  }, []);

  const handleAddTestimonial = async () => {
    const { name, position, quote } = newTestimonial;
    if (!name || !position || !quote) {
      alert("Please fill all fields.");
      return;
    }

    await addDoc(collection(db, "testimonials"), {
      ...newTestimonial,
      createdAt: serverTimestamp(),
    });

    setTestimonials(prev => [...prev, newTestimonial]);
    setNewTestimonial({ name: '', position: '', quote: '' });
    setShowModal(false);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-primary"></div>
            <h2 className="text-3xl font-bold text-secondary">Testimonials</h2>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <p className="text-secondaryText text-center mt-2">What our clients have to say.</p>
        </div>

        {/* Swiper Carousel */}
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
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
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
                <h3 className="font-bold text-primary">{testimonial.name}</h3>
                <p className="text-sm text-secondaryText">{testimonial.position}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination flex justify-center mt-8 gap-2"></div>

        {/* Add Experience Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
          >
            Add Your Experience
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Share Your Experience</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="text"
                placeholder="Your Position"
                value={newTestimonial.position}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, position: e.target.value })}
                className="w-full p-2 border rounded mb-4"
              />
              <textarea
                placeholder="Your Testimonial"
                value={newTestimonial.quote}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                className="w-full p-2 border rounded mb-4"
                rows="4"
              ></textarea>
              <div className="flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTestimonial}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
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
      `}</style>
    </section>
  );
};

export default Testimonial;
