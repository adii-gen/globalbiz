// Add this before the main component or in a separate file

import { useState } from "react";

export const ProcessCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const processes = [
    {
      number: "01",
      icon: "/images/process-icon-1.png", // building/activity icon
      title: "Choose a business activity",
      description: "Select the type of business activity you want to conduct in the freezone based on your business objectives."
    },
    {
      number: "02",
      icon: "/images/process-icon-2.png", // freezone/location icon
      title: "Find a free zone",
      description: "Choose the most suitable freezone for your business based on location, facilities, and industry requirements."
    },
    {
      number: "03",
      icon: "/images/process-icon-3.png", // document icon
      title: "Select a company name",
      description: "You need to finalise a name for your company that is available for registration on the Dubai free zone authority portal. In addition, there are certain standards to which the name must adhere."
    }
  ];

  return (
    <>
         <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
                  PROCESS TO START A
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
                  BUSINESS ON THE FREEZONE
                </h3>
              </div>
    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
  
      {processes.map((process, index) => (
        <div
          key={index}
          className="relative h-80 bg-gradient-to-b from-[#2c4a6f] to-[#1e3a5f] overflow-hidden group cursor-pointer"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Default State */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
              hoveredCard === index ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img 
              src={process.icon} 
              alt={process.title}
              className="w-20 h-20 mb-6"
            />
            <span className="text-yellow text-5xl font-bold font-oswald mb-4">
              {process.number}
            </span>
            <h4 className="text-white text-xl font-oswald text-center leading-tight">
              {process.title}
            </h4>
          </div>

          {/* Hover State */}
          <div 
            className={`absolute inset-0 bg-white p-8 flex flex-col justify-center transition-opacity duration-300 ${
              hoveredCard === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-yellow text-5xl font-bold font-oswald mb-4">
              {process.number}
            </span>
            <h4 className="text-[#1e3a5f] text-2xl font-bold font-oswald mb-4">
              {process.title}
            </h4>
            <p className="text-gray-700 text-sm font-raleway leading-relaxed">
              {process.description}
            </p>
          </div>

          {/* Border effect on hover */}
          <div className={`absolute inset-0 border-4 border-yellow transition-opacity duration-300 ${
            hoveredCard === index ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
      ))}
    </div>
    </>
  );
};