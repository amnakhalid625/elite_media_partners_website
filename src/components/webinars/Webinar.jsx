import React from 'react';

const Webinar = () => {
  const webinars = [
    {
      id: 1,
      title: "IFRS 16: Understanding Leases and Lease Modifications",
      date: "Tuesday, 10 May",
      time: "10:00 UAE TIME",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "WEBINAR | @HGGLANG | 2024"
    },
    {
      id: 2,
      title: "Freezone Relief: Insight from the latest FTA guide",
      date: "15 April, 2024",
      time: "11:00 AM",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/7213361/pexels-photo-7213361.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "UAE | Tax | 2024"
    },
    {
      id: 3,
      title: "The Middle East ESG Imperative: A Discussion with Experts",
      date: "17 May, 2024",
      time: "14:00 UAE TIME",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/4872028/pexels-photo-4872028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "UAE"
    },
    {
      id: 4,
      title: "UAE Corporate Tax | Preparation and Compliance",
      date: "20 June, 2023",
      time: "10:30 AM",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/7983548/pexels-photo-7983548.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "2023"
    },
    {
      id: 5,
      title: "Understanding the VAT Impact",
      date: "25 March, 2024",
      time: "13:00 UAE TIME",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "UAE"
    },
    {
      id: 6,
      title: "UAE Corporate Tax | How to get prepared",
      date: "5 May, 2024",
      time: "11:30 AM",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/29253461/pexels-photo-29253461/free-photo-of-speaker-presenting-on-3d-printing-use-cases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "2024"
    },
    {
      id: 7,
      title: "IAS 36 | Impairment Testing | What you need to know about it",
      date: "12 April, 2024",
      time: "15:00 UAE TIME",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/8761554/pexels-photo-8761554.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "2024"
    },
    {
      id: 8,
      title: "Recap of UAE vat law Amendments",
      date: "22 February, 2024",
      time: "10:00 AM",
      cta: "WATCH NOW",
      image: "https://images.pexels.com/photos/29708254/pexels-photo-29708254/free-photo-of-person-speaking-at-indoor-conference-event.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      tag: "2024"
    }
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-primary"></div>
          <h2 className="text-3xl font-bold text-secondary">Webinars</h2>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
          <p className="text-gray-600 mt-2">
            Stay updated on the latest market trends with videos from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 right-0 bg-primary text-white px-3 py-1 rounded-tl-md">
                  {webinar.cta}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-500">{webinar.tag}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {webinar.date}
                  </div>
                  <button className="bg-primary text-white text-xs px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                    WATCH NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-primary text-white font-bold px-6 py-2 rounded hover:bg-red-700 transition-colors">
            View More
          </button>
        </div>
        
        <div className="fixed bottom-4 right-4 flex items-center bg-white px-3 py-2 rounded-full shadow-lg">
          <span className="text-sm mr-2">Need Help? Chat with us</span>
          <div className="bg-green-500 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;