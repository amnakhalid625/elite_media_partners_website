import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 group-hover:animate-ping"></span>

        {/* Actual WhatsApp Button */}
        <a 
          href="https://wa.me/923001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-4 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
