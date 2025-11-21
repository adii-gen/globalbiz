// import React from "react";

// const TestimonialsSection: React.FC = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center py-20"
//       style={{ backgroundImage: "url('/global/herobg.png')" }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-[#0a2c50]/70"></div>

//       {/* Content Wrapper */}
//       <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
//         <p className="text-[#F7C236] text-lg tracking-wider font-semibold uppercase">
//           Testimonials
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mt-2">
//           From Our Clients
//         </h2>

//         {/* Testimonials Wrapper */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
//           {/* Card 1 */}
//           <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
//             {/* Left Arrow */}
//             <button className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold">
//               ←
//             </button>

//             <h3 className="text-2xl font-semibold">Abdul Rahman</h3>

//             {/* Stars */}
//             <div className="flex gap-1 text-[#F7C236] text-xl my-2">
//               {[1, 2, 3, 4, 5].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             <p className="text-base leading-relaxed text-gray-200">
//               Global Biz Setup provides the right guidance and support to establish a
//               business. They are completely professional and well-informed about
//               every emirate. They helped me in setting up my Business in Abu Dhabi.
//               Highly recommended!
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
//             {/* Right Arrow */}
//             <button className="absolute -right-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold">
//               →
//             </button>

//             <h3 className="text-2xl font-semibold">Jomana Habiba</h3>

//             <div className="flex gap-1 text-[#F7C236] text-xl my-2">
//               {[1, 2, 3, 4, 5].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             <p className="text-base leading-relaxed text-gray-200">
//               Global Biz Setup is the best business setup consultant in UAE. I would
//               like to thank them for their professional support, especially the
//               financial team.
//             </p>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-10">
//           <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
//           <span className="w-3 h-3 bg-white/40 rounded-full inline-block"></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
'use client'
import React, { useState } from "react";

const TestimonialsSection: React.FC = () => {
  // Dummy testimonials data
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/global/herobg.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0a2c50]/70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-20 text-center text-white">
        <p className="text-[#F7C236] text-lg tracking-wider font-semibold uppercase">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mt-2">
          From Our Clients
        </h2>

        {/* Testimonials Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Card 1 */}
          <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
            {/* Left Arrow */}
            <button 
              className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold"
              onClick={prevTestimonial}
            >
              ←
            </button>

            <h3 className="text-2xl font-semibold">{testimonials[currentIndex].name}</h3>

            {/* Stars */}
            <div className="flex gap-1 text-[#F7C236] text-xl my-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="text-base leading-relaxed text-gray-200">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-white/30 rounded-md py-10 px-8 text-left relative">
            {/* Right Arrow */}
            <button 
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-[#F7C236] w-12 h-12 flex items-center justify-center rounded-full text-black text-2xl font-bold"
              onClick={nextTestimonial}
            >
              →
            </button>

            <h3 className="text-2xl font-semibold">{testimonials[currentIndex + 1].name}</h3>

            <div className="flex gap-1 text-[#F7C236] text-xl my-2">
              {[...Array(testimonials[currentIndex + 1].rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="text-base leading-relaxed text-gray-200">
              {testimonials[currentIndex + 1].text}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.slice(0, testimonials.length - 1).map((_, index) => (
            <span 
              key={index}
              className={`w-3 h-3 rounded-full inline-block ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;