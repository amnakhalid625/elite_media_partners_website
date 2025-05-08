import React from 'react';
import { FiLinkedin } from 'react-icons/fi';

const Person1 = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f7f8fc] to-[#e8ecf4] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-2">Aamer Waqar Chaudhry, FCA</h1>
        <p className="text-lg font-medium text-gray-700 mb-1">Co-Founder</p>
        <p className="text-sm text-gray-500 mb-6 italic">
          Fellow Member – Institute of Chartered Accountants of Pakistan
        </p>
        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            Aamer Waqar Chaudhry is a Bhimji Gold Medalist and law graduate with over 30 years of leadership in finance,
            auditing, taxation, governance, and strategy. He began his career at M. Hussain Chaudhry & Co. and took on
            managerial roles even before qualifying as a Chartered Accountant in 1995.
          </p>
          <p>
            Over the years, he has served as CFO, GM Finance, and Financial Controller across sectors such as
            pharmaceuticals, insurance, education, and real estate.
          </p>
          <p>
            Known for his strategic foresight and ethical leadership, Mr. Chaudhry is dedicated to helping organizations
            build sustainable, efficient, and scalable financial operations for long-term growth.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/aamer-waqar-fca-13246460/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition duration-300"
          >
            <FiLinkedin className="mr-2" size={20} />
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Person1;
