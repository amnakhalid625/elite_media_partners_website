import { FiLinkedin } from 'react-icons/fi';

const Person4 = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f7f8fc] to-[#e8ecf4] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-2">Miss Ayesha Qasim</h1>
        <p className="text-lg font-medium text-gray-700 mb-1">Accounts and Finance Lead</p>
        <p className="text-sm text-gray-500 mb-6 italic">Elite Partners</p>

        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            Ayesha Qasim leads accounting and financial operations at Elite Partners, focusing on strategic planning,
            compliance, and advisory services. With expertise in FP&A and consultancy, she helps clients enhance financial
            clarity through robust reporting.
          </p>
          <p>
            Her prior roles include senior consultancy at athGADLANG and financial analysis at PACRA. She is proficient in
            platforms like QuickBooks, Zoho, Odoo, and Sage Intacct, and is known for designing impactful financial dashboards.
          </p>
          <p>
            Ayesha has also led freelance advisory projects, including financial models, continuity plans, and startup
            business strategies. As an ACCA Affiliate and CFA Level 1 candidate, she combines analytical precision with
            strategic insight to enable sustainable growth and effective internal controls.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/ayesha-qasim-5b4075216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
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

export default Person4;
