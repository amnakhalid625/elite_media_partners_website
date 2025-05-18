import { FiLinkedin } from 'react-icons/fi';

const Person3 = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f7f8fc] to-[#e8ecf4] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-2">Miss Mehak Irfan</h1>
        <p className="text-lg font-medium text-gray-700 mb-1">Chief Technical Officer</p>
        <p className="text-sm text-gray-500 mb-6 italic">Elite Partners</p>

        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            Mehak Irfan leads cybersecurity at Elite Partners, safeguarding digital assets and ensuring secure business operations.
            With strong expertise in threat analysis, risk mitigation, and incident response, she drives the firm's digital defense strategy.
          </p>
          <p>
            Mehak has led several successful cybersecurity projects and actively promotes a culture of security within the organization.
            Under her leadership, Elite Partners is becoming a trusted name for comprehensive cybersecurity and advisory services.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/mehak-irfan-079a03226/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
export default Person3;
