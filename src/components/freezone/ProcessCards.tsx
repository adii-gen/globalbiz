"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const ProcessCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const processes = [
    {
      number: "",
      icon: "/images/process-3.png",
      title: "Process to Start a Business >>",
      description: "",
    },
    {
      number: "01",
      icon: "/images/process-1.png",
      title: "Choose a business activity",
      description:
        "Select a business activity you wish to carry out in Dubai as the type of licence required will depend on the nature of your business activity.",
    },
    {
      number: "02",
      icon: "/images/process-2.png",
      title: "Find a freezone",
      description:
        "After you decide a business activity, you need to check which free zone is right for you. As there are sector-specific zones, research is required for selecting one particular zone.",
    },
    {
      number: "03",
      icon: "/images/process-3.png",
      title: "Select a company name",
      description:
        "You need to finalise a name for your company that is available for registration on the Dubai free zone authority portal. In addition, there are certain standards to which the name must adhere.",
    },
    {
      number: "04",
      icon: "/images/process-4.png",
      title: "Gather documents and apply for a license",
      description:
        "After finalising the name and business activity, you need to apply for a licence. To do so, you are required to fill out an application form and gather documents as mentioned in the form.",
    },
    {
      number: "05",
      icon: "/images/process-4.png",
      title: "Open a corporate bank account",
      description:
        "To commence a business, you are required to open a bank account. To open one, you need to gather documents along with your business licence and provide them to the financial institution.",
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % (processes.length - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + (processes.length - 1)) % (processes.length - 1)
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get visible cards - first card always stays, other 3 rotate
  const getVisibleCards = () => {
    const cards = [processes[0]]; // Always include the first card

    // Get the next 3 cards from the remaining processes (excluding first)
    for (let i = 0; i < 3; i++) {
      const index = ((currentIndex + i) % (processes.length - 1)) + 1;
      cards.push(processes[index]);
    }

    return cards;
  };

  const visibleCards = getVisibleCards();

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
      <section
        className="relative bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url('/images/process-bg.jpg')" }}
      >
        <div className="relative z-10">
          {/* Carousel Container */}
          <div className="relative mx-auto">
            {/* Navigation Arrows */}
            <div className="absolute right-0 top-0 -translate-y-full z-20 flex gap-2">
              <button
                onClick={handlePrev}
                className="bg-yellow hover:bg-yellow/90 rounded-full p-1 transition-all duration-300 shadow-lg "
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
                  key={`${process.number}-${displayIndex}`}
                  className={`relative h-80 bg-transparent overflow-hidden cursor-pointer transition-all duration-300 border-r border-white/50 ${
                    displayIndex > 0 && isAnimating ? 'transform transition-transform duration-500 ease-in-out' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(displayIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform:
                      hoveredCard === displayIndex
                        ? "translateY(-10px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredCard === displayIndex
                        ? "0 20px 40px rgba(0,0,0,0.3)"
                        : "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Default State */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
                      hoveredCard === displayIndex ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Image
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
                    className={`absolute inset-0 bg-gradient-to-t from-transparent to-blue p-8 flex flex-col justify-center text-white transition-opacity duration-300 ${
                      hoveredCard === displayIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-yellow text-4xl font-semibold font-oswald mb-3">
                      {process.number}
                    </span>
                    <h4 className=" text-xl font-bold font-oswald mb-3">
                      {process.title}
                    </h4>
                    <p className=" text-sm font-raleway leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};