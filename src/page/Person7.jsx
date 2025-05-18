import { FiLinkedin } from 'react-icons/fi';


const Person7 = () => {
  return (
    <>
    
     <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#f7f8fc] to-[#e8ecf4] min-h-screen">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
            <h1 className="text-4xl font-bold text-primary mb-2">Abdul Khabir</h1>
            <p className="text-lg font-medium text-gray-700 mb-1">Finance & Audit Professional</p>
            <p className="text-sm text-gray-500 mb-6 italic">10+ Years of Financial Expertise</p>
    
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                Hassan Masood is a results-driven finance and audit professional with over a decade of experience in
                statutory reporting, internal controls, tax compliance, and corporate governance. His professional journey
                includes leadership roles at renowned firms such as Deloitte, Russell Bedford, Airlift Technologies,
                BridgeLinx Technologies, IECnet S.K.S.S.S, and Les Cosmetiques.
              </p>
              <p>
                With deep expertise in audit execution, financial reporting, and risk assessment, Hassan has contributed to
                regulatory compliance and robust internal frameworks across sectors including technology, logistics, retail,
                and manufacturing.
              </p>
              <p>
                Known for his diligence, strategic thinking, and ethical leadership, Hassan is dedicated to helping
                businesses build resilient financial systems that align with evolving regulatory standards and support
                long-term sustainable growth.
              </p>
            </div>
    
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/abdul-khabir-9a113965/" 
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
    
    </>
  )
}

export default Person7