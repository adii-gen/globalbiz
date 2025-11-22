

// // export default TestimonialsSection;
// 'use client'
// import React, { useState } from "react";

// const TestimonialsSection: React.FC = () => {
//   // Dummy testimonials data
//   const testimonials = [
//     {
//       id: 1,
//       name: "Abdul Rahman",
//       rating: 5,
//       text: "Global Biz Setup provides the right guidance and support to establish a business. They are completely professional and well-informed about every emirate. They helped me in setting up my Business in Abu Dhabi. Highly recommended!"
//     },
//     {
//       id: 2,
//       name: "Jomana Habiba",
//       rating: 5,
//       text: "Global Biz Setup is the best business setup consultant in UAE. I would like to thank them for their professional support, especially the financial team."
//     },
//     {
//       id: 3,
//       name: "Mohammed Ali",
//       rating: 5,
//       text: "Global Biz Setup is the best business setup consultant in UAE. I would like to thank them for their professional support, especially the financial team."
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
//     );
//   };

//   return (
//     <section
//       className="relative bg-cover bg-center py-20"
//       style={{ backgroundImage: "url('/global/herobg.png')" }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-[#0a2c50]/70"></div>

//       {/* Content Wrapper */}
//       <div className="relative max-w-7xl mx-auto px-20 text-center text-white">
//         <p className="text-[#F7C236] text-4xl font-oswald uppercase">
//           Testimonials
//         </p>
//         <h2 className="text-4xl md:text-5xl font-oswald font-semibold uppercase  mt-2">
//           From Our Clients
//         </h2>

//         {/* Testimonials Wrapper */}
//         <div className=" font-raleway grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
//           {/* Card 1 */}
//           <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
//             {/* Left Arrow */}
//             <button 
//               className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold"
//               onClick={prevTestimonial}
//             >
//               ←
//             </button>

//             <h3 className="text-2xl font-semibold">{testimonials[currentIndex].name}</h3>

//             {/* Stars */}
//             <div className="flex gap-1 text-[#F7C236] text-xl my-2">
//               {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             <p className="text-base leading-relaxed text-gray-200">
//               {testimonials[currentIndex].text}
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
//             {/* Right Arrow */}
//             <button 
//               className="absolute -right-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold"
//               onClick={nextTestimonial}
//             >
//               →
//             </button>

//             <h3 className="text-2xl font-semibold">{testimonials[currentIndex + 1].name}</h3>

//             <div className="flex gap-1 text-[#F7C236] text-xl my-2">
//               {[...Array(testimonials[currentIndex + 1].rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             <p className="text-base leading-relaxed text-gray-200">
//               {testimonials[currentIndex + 1].text}
//             </p>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-10">
//           {testimonials.slice(0, testimonials.length - 1).map((_, index) => (
//             <span 
//               key={index}
//               className={`w-3 h-3 rounded-full inline-block ${
//                 index === currentIndex ? 'bg-white' : 'bg-white/40'
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

'use client'
import React, { useState, useEffect, useCallback } from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abdul Rahman",
      rating: 5,
      text: "Global Biz Setup provides the right guidance and support to establish a business. They are completely professional and well-informed about every emirate. They helped me in setting up my Business in Abu Dhabi. Highly recommended!"
    },
    {
      id: 2,
      name: "Jomana Habiba",
      rating: 5,
      text: "Global Biz Setup is the best business setup consultant in UAE. I would like to thank them for their professional support, especially the financial team."
    },
    {
      id: 3,
      name: "Mohammed Ali",
      rating: 5,
      text: "Global Biz Setup is the best business setup consultant in UAE. I would like to thank them for their professional support, especially the financial team."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      // Swiped right
      prevTestimonial();
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} aria-hidden="true">★</span>
    ));
  };

  const TestimonialCard = ({ testimonial, showArrow, enableSwipe }: { testimonial: typeof testimonials[0], showArrow?: 'left' | 'right', enableSwipe?: boolean }) => (
    <div 
      className="border border-white/30 rounded-lg py-8 px-6 md:py-10 md:px-8 text-left relative bg-[#0a2c50]/30 backdrop-blur-sm transition-all duration-300 hover:border-white/50 touch-pan-y"
      onTouchStart={enableSwipe ? handleTouchStart : undefined}
      onTouchMove={enableSwipe ? handleTouchMove : undefined}
      onTouchEnd={enableSwipe ? handleTouchEnd : undefined}
    >
      {/* Arrow Buttons - Hidden on mobile */}
      {showArrow === 'left' && (
        <button 
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 items-center justify-center rounded-full text-black text-2xl font-bold hover:bg-[#ffd454] transition-colors shadow-lg"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ←
        </button>
      )}
      
      {showArrow === 'right' && (
        <button 
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 items-center justify-center rounded-full text-black text-2xl font-bold hover:bg-[#ffd454] transition-colors shadow-lg"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          →
        </button>
      )}

      <h3 className="text-xl md:text-2xl font-semibold mb-2">{testimonial.name}</h3>

      {/* Stars */}
      <div className="flex gap-1 text-[#F7C236] text-lg md:text-xl my-2" role="img" aria-label={`${testimonial.rating} star rating`}>
        {renderStars(testimonial.rating)}
      </div>

      <p className="text-sm md:text-base leading-relaxed text-gray-200">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <section
      className="relative bg-cover bg-center py-12 md:py-20"
      style={{ backgroundImage: "url('/global/herobg.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0a2c50]/70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 text-center text-white">
        <p className="text-[#F7C236] text-2xl md:text-4xl font-oswald uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold uppercase mt-2">
          From Our Clients
        </h2>

        {/* Desktop View - 2 Cards */}
        <div className="hidden md:grid font-raleway grid-cols-2 gap-6 lg:gap-10 mt-12 md:mt-16">
          <TestimonialCard 
            testimonial={testimonials[currentIndex]} 
            showArrow="left"
          />
          <TestimonialCard 
            testimonial={testimonials[(currentIndex + 1) % testimonials.length]} 
            showArrow="right"
          />
        </div>

        {/* Mobile View - 1 Card with Swipe */}
        <div className="md:hidden font-raleway mt-12">
          <TestimonialCard testimonial={testimonials[currentIndex]} enableSwipe />
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8 md:w-10' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;