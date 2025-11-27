/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// interface BusinessProcess {
//   image: string;
//   heading: string;
//   description: string;
// }

// interface ProcessCardsProps {
//   processes: BusinessProcess[];
//   offshoreName?: string;
// }

// export const OffshoreProcessCards = ({ processes, offshoreName }: ProcessCardsProps) => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Safe image URL handler
//   const getSafeImageUrl = (imagePath: string | undefined, fallback: string = "/images/global.png") => {
//     if (!imagePath) return fallback;
    
//     if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
//       return imagePath;
//     }
    
//     if (!imagePath.startsWith("/")) {
//       return `/${imagePath}`;
//     }
    
//     return imagePath;
//   };

//   // Return early if no processes
//   if (!processes || processes.length === 0) {
//     return null;
//   }

//   const handleNext = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % processes.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handlePrev = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const getVisibleCards = () => {
//     const introCard = {
//       image: "/images/process-1.png",
//       heading: "Process to Start a Business >>",
//       description: "",
//       originalIndex: -1,
//     };

//     const cards = [introCard];

//     for (let i = 0; i < 3; i++) {
//       const index = (currentIndex + i) % processes.length;
//       cards.push({ 
//         ...processes[index], 
//         image: getSafeImageUrl(processes[index]?.image),
//         originalIndex: index 
//       });
//     }

//     return cards;
//   };

//   const visibleCards = getVisibleCards();

//   return (
//     <>
//       <div className="text-center mb-12 pt-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
//           PROCESS TO START A 
//         </h2>
//         <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
//           BUSINESS ON THE OFFSHORE
//         </h3>
//       </div>

//       <section
//         className="relative bg-cover bg-center bg-no-repeat h-full"
//         style={{ backgroundImage: "url('/images/process-bg.jpg')" }}
//       >
//         <div className="relative z-10">
//           {/* Navigation */}
//           <div className="absolute right-0 top-0 -translate-y-full z-20 flex gap-2">
//             <button
//               onClick={handlePrev}
//               className="bg-yellow hover:bg-yellow/90 rounded-full p-1 transition-all duration-300 shadow-lg"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-6 h-6 text-blue" />
//             </button>

//             <button
//               onClick={handleNext}
//               className="bg-yellow hover:bg-yellow/90 rounded-full p-1 transition-all duration-300 shadow-lg"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-6 h-6 text-blue" />
//             </button>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
//             {visibleCards.map((process, displayIndex) => (
//               <div
//                 key={`${process.heading}-${displayIndex}-${process.originalIndex}`}
//                 className={`relative h-80 bg-transparent overflow-hidden cursor-pointer transition-all duration-300 border-r border-white/50 ${
//                   displayIndex > 0 && isAnimating
//                     ? "transform transition-transform duration-500 ease-in-out"
//                     : ""
//                 }`}
//                 onMouseEnter={() => setHoveredCard(displayIndex)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{
//                   transform:
//                     hoveredCard === displayIndex
//                       ? "translateY(-10px)"
//                       : "translateY(0)",
//                   boxShadow:
//                     hoveredCard === displayIndex
//                       ? "0 20px 40px rgba(0,0,0,0.3)"
//                       : "0 4px 6px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 {/* Default State */}
//                 <div
//                   className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
//                     hoveredCard === displayIndex ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <Image
//                     src={getSafeImageUrl(process.image, `/images/process-${displayIndex + 1}.png`)}
//                     alt={process.heading}
//                     className="w-20 h-20 mb-6 object-contain"
//                     width={80}
//                     height={80}
//                     onError={(e) => {
//                       e.currentTarget.src = "/images/global.png";
//                     }}
//                   />
//                   <span className="text-yellow text-5xl font-bold font-oswald mb-4">
//                     {process.originalIndex === -1 ? "" : String(process.originalIndex + 1).padStart(2, "0")}
//                   </span>
//                   <h4 className="text-white text-xl font-oswald text-center leading-tight">
//                     {process.heading}
//                   </h4>
//                 </div>

//                 {/* Hover State */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-t from-transparent to-blue p-8 flex flex-col justify-center text-white transition-opacity duration-300 ${
//                     hoveredCard === displayIndex ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <span className="text-yellow text-4xl font-semibold font-oswald mb-3">
//                     {process.originalIndex === -1 ? "" : String(process.originalIndex + 1).padStart(2, "0")}
//                   </span>
//                   <h4 className="text-xl font-bold font-oswald mb-3">
//                     {process.heading}
//                   </h4>
//                   <p className="text-sm font-raleway leading-relaxed">
//                     {process.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


// /components/offshore/ProcessCards.tsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface BusinessProcess {
  image: string;
  heading: string;
  description: string;
}

interface ProcessCardsProps {
  processes: BusinessProcess[];
  offshoreName?: string;
}

export const OffshoreProcessCards = ({ processes, offshoreName }: ProcessCardsProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!processes || processes.length === 0) return null;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % processes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
const fallbackImages = [
    "/licenses/GeneralLicense.png",
    "/licenses/IndustrialLicense.png",
    "/licenses/PremiumConsultancy.png",
    "/licenses/ServiceLicense.png",
    "/licenses/TradingLicense.png",
  ];

  const getImageSrc = (image: string | undefined, index: number) => {
    const fallback = fallbackImages[index % fallbackImages.length];

    if (!image || image.trim() === "") return fallback;

    if (image.startsWith("/")) return image;
    return `/${image}`;
  };

  const getVisibleCards = () => {
    const introCard = {
      image: "/images/process-1.png",
      heading: "Process to Start a Business >>",
      description: "",
      originalIndex: -1,
    };

    const cards = [introCard];

    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % processes.length;
      cards.push({
        ...processes[index],
        image: getImageSrc(processes[index]?.image, index),
        originalIndex: index,
      });
    }

    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <>
      <div className="text-center mb-12 pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
          PROCESS TO START A 
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
          BUSINESS ON THE OFFSHORE
        </h3>
      </div>

      <section
        className="relative bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url('/images/process-bg.jpg')" }}
      >
        <div className="relative z-10">
          {/* Navigation */}
          <div className="absolute right-0 top-0 -translate-y-full z-20 flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-yellow hover:bg-yellow/90 rounded-full p-1 transition-all duration-300 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-blue" />
            </button>

            <button
              onClick={handleNext}
              className="bg-yellow hover:bg-yellow/90 rounded-full p-1 transition-all duration-300 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-blue" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {visibleCards.map((process, displayIndex) => (
              <div
                key={`${process.heading}-${displayIndex}-${process.originalIndex}`}
                className={`relative h-80 bg-transparent overflow-hidden cursor-pointer transition-all duration-300 border-r border-white/50 ${
                  displayIndex > 0 && isAnimating ? "transform transition-transform duration-500 ease-in-out" : ""
                }`}
                onMouseEnter={() => setHoveredCard(displayIndex)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === displayIndex ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: hoveredCard === displayIndex ? "0 20px 40px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Default State */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
                    hoveredCard === displayIndex ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src={process.image}
                    alt={process.heading}
                    className="w-20 h-20 mb-6 object-contain"
                    width={80}
                    height={80}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const fallback = fallbackImages[displayIndex % fallbackImages.length];
                      if (img.src !== fallback) img.src = fallback;
                    }}
                  />
                  <span className="text-yellow text-5xl font-bold font-oswald mb-4">
                    {process.originalIndex === -1 ? "" : String(process.originalIndex + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-white text-xl font-oswald text-center leading-tight">
                    {process.heading}
                  </h4>
                </div>

                {/* Hover State */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-transparent to-blue p-8 flex flex-col justify-center text-white transition-opacity duration-300 ${
                    hoveredCard === displayIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-yellow text-4xl font-semibold font-oswald mb-3">
                    {process.originalIndex === -1 ? "" : String(process.originalIndex + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-xl font-bold font-oswald mb-3">{process.heading}</h4>
                  <p className="text-sm font-raleway leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
