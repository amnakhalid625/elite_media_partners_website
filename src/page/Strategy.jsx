import React from 'react';

const Strategy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-9">Fundraising Strategy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering your capital raise with strategic storytelling, financial precision, and investor-ready documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Raise Capital?
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We craft compelling investor decks, robust financial models, and comprehensive due-diligence packages that highlight your company’s vision, strategy, and growth potential. 
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                As experts emphasize, raising investment capital demands materials that “effectively communicate your company's unique opportunity and execution capability." 
                Our team translates your story into data-driven narratives that resonate with investors.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Beyond the pitch, we prepare your financials for rigorous scrutiny. Since cash flow mismanagement remains a top reason for startup failure, we ensure your financials are airtight and investor-ready — setting the foundation for a successful fundraising journey.
              </p>
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg transition duration-300">
                Get Started with Fundraising
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1612178994534-06c5164906ff?ixlib=rb-4.0.3&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNjkwODk3ODQ0&auto=format&fit=crop&w=1400&q=80" 
                alt="Fundraising Strategy" 
                className="rounded-lg w-full h-auto"
              />
              <div className="mt-6 text-center text-gray-600">
                Transform your fundraising story into a powerful, investor-magnet strategy.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            What Makes Our Fundraising Strategy Unique
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Investor Deck Creation",
                description: "Visually stunning and insight-rich presentations that clearly communicate your company's story and investment potential."
              },
              {
                title: "Financial Modeling",
                description: "Detailed, dynamic models that validate your projections and withstand investor scrutiny."
              },
              {
                title: "Due Diligence Readiness",
                description: "Full preparation of operational, legal, and financial documentation to navigate investor due diligence with confidence."
              },
              {
                title: "Pitch Coaching",
                description: "Expert coaching sessions to refine your pitch and deliver with clarity, impact, and authenticity."
              },
              {
                title: "Market Opportunity Analysis",
                description: "Data-backed analysis highlighting the market size, trends, and positioning to boost investor confidence."
              },
              {
                title: "Ongoing Advisory Support",
                description: "Strategic guidance post-funding to manage new stakeholder expectations and scale effectively."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Your Investment Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with experts who understand what investors need to see, and let’s secure your next round of funding with confidence.
          </p>
          <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
            Schedule a Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
