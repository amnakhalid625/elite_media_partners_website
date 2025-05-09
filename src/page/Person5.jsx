import { FiLinkedin } from 'react-icons/fi';

const Person5 = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f7f8fc] to-[#e8ecf4] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-2">Ali Aslam Awan</h1>
        <p className="text-lg font-medium text-gray-700 mb-1">Legal Advisor</p>
        <p className="text-sm text-gray-500 mb-6 italic">18+ Years of Legal Expertise</p>

        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            Ali Aslam Awan is a seasoned legal practitioner with over 18 years of experience in Pakistan’s dynamic legal
            landscape. Known for his strategic legal counsel and litigation excellence, he serves as a trusted advisor
            to both corporate clients and individuals.
          </p>
          <p>
            His expertise spans across corporate law, contract disputes, taxation, and civil litigation. He is committed
            to delivering tailored, client-focused legal solutions, with a strong emphasis on integrity, strategy, and
            advocacy.
          </p>
          <p>
            Ali’s practical approach and deep understanding of the legal system have made him a go-to expert for complex
            legal matters. His reputation is built on consistent results, client satisfaction, and a deep commitment to
            justice and ethical practice.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/ali-aslam-awan-525a74149" 
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

export default Person5;
