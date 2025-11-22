// 'use client'
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface BusinessSetupServicesProps {
//   className?: string;
// }

// const BusinessSetupServices: React.FC<BusinessSetupServicesProps> = ({ 
//   className = '' 
// }) => {
//   const locations = [
//     'Ajman',
//     'Umm Al Quwain',
//     'Fujairah',
//     'Dubai',
//     'Abu Dhabi',
//     'Sharjah',
//     'RAK'
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerView = 4;

//   const handlePrev = () => {
//     setCurrentIndex((prev) => 
//       prev === 0 ? Math.max(0, locations.length - itemsPerView) : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => 
//       prev >= locations.length - itemsPerView ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className={`bg-yellow py-6 sm:py-6 lg:py-6 ${className}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 font-oswald uppercase leading-tight">
//           We Offer Business Setup<br className="sm:hidden" /> Services In
//         </h2>
        
//         {/* Carousel Container */}
//         <div className="relative flex items-center justify-center gap-4">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="flex-shrink-0 w-10 h-8 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-700" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden flex-1 max-w-7xl">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
//               }}
//             >
//               {locations.map((location, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 px-2"
//                   style={{ width: `${100 / itemsPerView}%` }}
//                 >
//                   <div className="bg-[#1e3a5f] rounded-xl p-2 sm:p-5 text-center hover:bg-[#2d4a6f] transition-colors duration-300 shadow-lg h-full flex items-center justify-center min-h-[60px] sm:min-h-[60px]">
//                     <h3 className="text-md sm:text-md lg:text-xl font-bold text-white font-sans">
//                       {location}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
//             aria-label="Next"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>

//         {/* Mobile: Show 2 cards at a time */}
//         <div className="lg:hidden mt-8">
//           <div className="grid grid-cols-2 gap-4">
//             {locations.slice(currentIndex, currentIndex + 2).map((location, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1e3a5f] rounded-xl p-4 text-center hover:bg-[#2d4a6f] transition-colors duration-300 shadow-lg"
//               >
//                 <h3 className="text-base sm:text-lg font-bold text-white font-sans">
//                   {location}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-6">
//           {Array.from({ length: Math.ceil(locations.length - itemsPerView + 1) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessSetupServices;


'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BusinessSetupServicesProps {
  className?: string;
}

const BusinessSetupServices: React.FC<BusinessSetupServicesProps> = ({
  className = '',
}) => {
  const locations = [
    'Ajman',
    'UAQ',
    'Fujairah',
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'RAK',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop shows 4, Mobile shows 1
  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 4;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, locations.length - itemsPerView) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= locations.length - itemsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className={`bg-yellow py-6 sm:py-6 lg:py-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 font-oswald uppercase leading-tight">
          We Offer Business Setup
          <br className="sm:hidden" /> Services In
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="h-5 w-5 sm:flex sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden flex-1 max-w-7xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#1e3a5f] rounded-xl p-3 sm:p-5 text-center hover:bg-[#2d4a6f] transition-colors duration-300 shadow-lg h-full flex items-center justify-center min-h-[60px]">
                    <h3 className="text-xs sm:text-md lg:text-xl font-bold text-white font-sans">
                      {location}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className=" sm:flex w-5 h-5 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetupServices;
