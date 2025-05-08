import React from 'react';
import { FiLinkedin } from 'react-icons/fi';

const Person2 = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f9fafb] to-[#e9eff4] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-2">Miss Aliza Ishfaq</h1>
        <p className="text-lg font-medium text-gray-700 mb-1">Business and Growth Lead | Elite Partners</p>

        <div className="space-y-4 text-gray-700 leading-relaxed text-justify mt-6">
          <p>
            Miss Aliza Ishfaq is the Business and Growth Lead at Elite Partners, where she drives the firm’s strategic
            initiatives and oversees business development efforts. With expertise in financial consulting, market
            expansion, and client relationship management, Aliza plays a key role in delivering tailored solutions that
            help businesses optimize performance and scale efficiently.
          </p>
          <p>
            Her leadership is focused on achieving sustainable growth, enhancing operational efficiency, and building
            long-term client relationships.
          </p>
          <p>
            Aliza has successfully led multiple high-impact projects, helping clients navigate complex challenges and
            unlock new growth opportunities. Her vision for Elite Partners is to establish the firm as a leading advisory
            partner for businesses seeking strategic financial and operational guidance.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/aliza-ishfaq-4b3386195/" 
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
export default Person2;
