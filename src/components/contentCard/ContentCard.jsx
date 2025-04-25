import React from 'react';
import C1 from '../../assets/images/content1.png';
import C2 from '../../assets/images/content2.png';
import C3 from '../../assets/images/content3.png';
import C4 from '../../assets/images/content4.png';
import C5 from '../../assets/images/content5.png';
import C6 from '../../assets/images/content6.png';
import C7 from '../../assets/images/content7.png';
import C8 from '../../assets/images/content8.png';

const ContentCard = () => {
  const cardData = [
    {
      id: 1,
      image: C1,
      title: "VAT Story so far and what's ahead",
      description: "It was just yesterday when VAT was considered to be a far fetched goal of the Government by...",
      specs: [
        "1397.6 × 120.5",
        "#383838 | 16px Montserrat",
        "Margin: 0px 0px 11px | Padding: 0px 111.8px"
      ]
    },
    {
      id: 2,
      image: C2,
      title: "15 most crucial takeaways from VAT Awareness workshop by MoF (UAE)",
      description: "– It's time to board already as the flight gains momentum: The UAE Ministry of Finance [MoF] has..."
    },
    {
      id: 3,
      image: C3,
      title: "The UAE's Economic Zone Model: Lessons Learned and Best Practices",
      description: "As a global business hub, the United Arab Emirates (UAE) has become a preferred destination for foreign investors..."
    },
    {
      id: 4,
      image: C4,
      title: "VAT Refund for Foreign Businesses and Tourists in UAE",
      description: "Did you know that businesses and tourists in the UAE can claim a VAT refund on eligible purchases?..."
    },
    {
      id: 5,
      image: C5,
      title: "VAT – 60 Days Down The Line",
      description: "Value Added Tax (VAT) at the rate of 5 per cent was introduced in the UAE, and this..."
    },
    {
      id: 6,
      image: C6,
      title: "A Comprehensive Guide to VAT Determination in the UAE",
      description: "VAT determination plays a pivotal role in the financial landscape of businesses, especially in the UAE. This critical..."
    },
    {
      id: 7,
      image: C7,
      title: "Generic"
    },
    {
      id: 8,
      image: C8,
      title: "How are a difference in",
      subtitle: "FIRST 60 DAYS OF"
    }
  ];

  return (
    <div className="max-w-9xl  my-8 p-6 bg-white  shadow-sm">
      {/* Header */}
      <div className="mb-8">
      <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-primary"></div>
          <h2 className="text-3xl font-bold text-secondary">Insights</h2>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
        <p className="text-gray-600">Explore fresh perspectives and expert analysis.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div key={card.id} className="border border-gray-200 rounded-lg p-4">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-32 object-cover mb-4 rounded"
              loading="lazy" 
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
            {card.description && <p className="text-gray-600 text-sm">{card.description}</p>}
            {card.subtitle && <p className="font-medium text-gray-700 mt-1">{card.subtitle}</p>}
            {card.specs && (
              <div className="mt-3 text-xs text-gray-500">
                {card.specs.map((spec, index) => (
                  <p key={index}>{spec}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default ContentCard;