import React from "react";

const services = [
  {
    title: "Resourcing",
    description: "Expert-driven staffing ensures the right talent at the right time efficiently, boosting productivity & success.",
    image: "/images/resourcing.jpg",
  },
  {
    title: "Tax",
    description: "Integrated tax solutions optimize liabilities, ensure compliance, and support global expansion.",
    image: "/images/tax.jpg",
  },
  {
    title: "Accounting",
    description: "Precise financial records enabling informed decisions and efficient business operations.",
    image: "/images/accounting.jpg",
  },
  {
    title: "Assurance",
    description: "Unbiased financial assessment to help organizations tackle global challenges with confidence.",
    image: "/images/assurance.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0d2c40] mb-2 relative inline-block">
          Services
          <span className="block w-16 h-1 bg-[#b91c1c] absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 relative"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-70 group-hover:-translate-y-2"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a
                href="#"
                className="text-[#b91c1c] font-semibold flex items-center gap-2 transition-all hover:underline"
              >
                Read more
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Bottom border animation */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#b91c1c] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
