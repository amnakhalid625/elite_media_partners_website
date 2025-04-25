import React from 'react';


const Webinar = () => {
  const webinars = [
    {
      id: 1,
      title: "FEB 15 (Import of Asia)",
      subtitle: "PFBS KI Understanding Leases and Active Health Plans"
    },
    {
      id: 2,
      title: "President Mobility",
      subtitle: "Talk & Amplifiers | Head video Study"
    },
    {
      id: 3,
      title: "Legendary Strategy at the UAE Team",
      youtubeUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 4,
      title: "Understanding Leases and Lease Difficulties",
      subtitle: "Webinar | 2024",
      youtubeUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: 5,
      title: "Understanding the VAT Impact"
    },
    {
      id: 6,
      title: "Freezone Relief: insight from the latest FT4 guide",
      subtitle: "UAE | Tax | 2024",
      youtubeUrl: "https://www.youtube.com/watch?v=example3"
    },
    {
      id: 7,
      title: "UAE Corporate Tax"
    },
    {
      id: 8,
      title: "UAE Corporate Tax | How to get prepared",
      youtubeUrl: "https://www.youtube.com/watch?v=example4"
    },
    {
      id: 9,
      title: "The Middle East ESG Imperative",
      subtitle: "A Discussion with Experts | UAE",
      youtubeUrl: "https://www.youtube.com/watch?v=example5"
    },
    {
      id: 10,
      title: "RECAP OF UAE VAT LAW AMENDMENTS"
    }
  ];

  const handleWebinarClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Webinars</h1>
      <p className="text-lg text-gray-600 mb-8">
        Stay updated on the latest market trends with videos from industry leaders.
      </p>

      <div className="space-y-6">
        {webinars.map((webinar) => (
          <div 
            key={webinar.id}
            className={`group border-b border-gray-200 pb-6 ${webinar.youtubeUrl ? 'cursor-pointer' : ''}`}
            onClick={() => webinar.youtubeUrl && handleWebinarClick(webinar.youtubeUrl)}
          >
            <div className={`transition-opacity duration-300 ${webinar.youtubeUrl ? 'group-hover:opacity-75' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800">{webinar.title}</h2>
              {webinar.subtitle && (
                <p className="text-gray-600 mt-1">{webinar.subtitle}</p>
              )}
              {webinar.youtubeUrl && (
                <div className="mt-2 flex items-center">
                  <span className="text-red-600 font-medium">Watch on YouTube</span>
                  <svg 
                    className="w-5 h-5 ml-1 text-red-600" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinar;