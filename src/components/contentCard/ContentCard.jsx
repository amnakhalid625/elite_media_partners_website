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
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Insights</h1>
        <p className="text-gray-600">Explore fresh perspectives and expert analysis.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C1} alt="VAT Story" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">VAT Story so far and what's ahead</h3>
          <p className="text-gray-600 text-sm">It was just yesterday when VAT was considered to be a far fetched goal of the Government by...</p>
          <div className="mt-3 text-xs text-gray-500">
            <p>1397.6 × 120.5</p>
            <p>#383838 | 16px Montserrat</p>
            <p>Margin: 0px 0px 11px | Padding: 0px 111.8px</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C2} alt="VAT Awareness" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">15 most crucial takeaways from VAT Awareness workshop by MoF (UAE)</h3>
          <p className="text-gray-600 text-sm">– It's time to board already as the flight gains momentum: The UAE Ministry of Finance [MoF] has...</p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C3} alt="Economic Zone" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">The UAE's Economic Zone Model: Lessons Learned and Best Practices</h3>
          <p className="text-gray-600 text-sm">As a global business hub, the United Arab Emirates (UAE) has become a preferred destination for foreign investors...</p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C4} alt="VAT Refund" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">VAT Refund for Foreign Businesses and Tourists in UAE</h3>
          <p className="text-gray-600 text-sm">Did you know that businesses and tourists in the UAE can claim a VAT refund on eligible purchases?...</p>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C5} alt="60 Days" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">VAT – 60 Days Down The Line</h3>
          <p className="text-gray-600 text-sm">Value Added Tax (VAT) at the rate of 5 per cent was introduced in the UAE, and this...</p>
        </div>

        {/* Card 6 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C6} alt="VAT Determination" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">A Comprehensive Guide to VAT Determination in the UAE</h3>
          <p className="text-gray-600 text-sm">VAT determination plays a pivotal role in the financial landscape of businesses, especially in the UAE. This critical...</p>
        </div>

        {/* Card 7 - Generic */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C7} alt="Generic" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Generic</h3>
        </div>

        {/* Card 8 - How are a difference in */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img src={C8} alt="60 Days Difference" className="w-full h-32 object-cover mb-4 rounded"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">How are a difference in</h3>
          <p className="font-medium text-gray-700">FIRST 60 DAYS OF</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default ContentCard;