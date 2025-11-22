// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import React from "react";

// const AboutUsSec = () => {
//   return (
//     <section className="w-full bg-white flex items-center justify-between px-28 py-20">

    

//       {/* RIGHT IMAGE */}
//       <div className="hidden md:block">
//         <img
//           src="/global/aboutus.png"
//           alt="Hero Illustration"
//           className="w-[460px] h-auto object-contain drop-shadow-2xl"
//         />
//       </div>

//   {/* LEFT SIDE */}
//       <div className="max-w-3xl text-left text-white">
//         <p className="md:text-6xl mb-8 text-[62px] font-oswald text-blue max-w-xl">
//           About Global Biz 
//           <span className="text-yellow"> Setup</span>
//         </p>

//         <p className="md:text-sm text-xs text-blue font-sans max-w-xl opacity-90 mb-10">
//           Global Biz Setup is a renowned online business setup company extending compelling and customised solutions that match our client's vision and budget. Since our inception, we have worked towards offering the best possible assistance to help locals and expatriates set up a business across the UAE seamlessly.

//           We have an enthusiastic and passionate team at the helm with a collective experience of more than 35 years in the industry. The team puts their best foot forward to provide the most value and expedite your business setup in the UAE. We pride ourselves on being a trusted provider of ended-to-end services for business setup in the UAE. With our assistance, you can have your business up and running in the UAE in no time. So, if you are looking for business setup registration, compliance or taxes, get associated with our company formation consultants in the UAE today.
//         </p>

//         <div className="flex flex-wrap gap-4">
//           <Link href="/book-consultation">
//             <Button
//               size="lg"
//               className="bg-yellow text-dark-blue font-semibold px-8"
//             >
//               Contact Us
//             </Button>
//           </Link>

//           <Button
//             size="lg"
//             variant="outline"
//             className="border-2 border-white text-white font-semibold px-8 bg-transparent hover:bg-white hover:text-dark-blue"
//           >
//             View Services
//           </Button>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default AboutUsSec;


"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AboutUsSec = () => {
  return (
    <section
      className="
        w-full bg-white 
        flex flex-col md:flex-row 
        items-start md:items-center 
        justify-between 
        px-6 md:px-28 
        py-10 md:py-20
        gap-10
      "
    >
      {/* RIGHT IMAGE (desktop only) */}
      <div className="block">
        <img
          src="/global/aboutus.png"
          alt="Hero Illustration"
          className="w-[460px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* LEFT SIDE */}
      <div className="text-left text-blue w-full max-w-3xl">
        <p className="text-4xl md:text-6xl font-oswald mb-6">
          About Global Biz 
          <span className="text-yellow"> Setup</span>
        </p>

        <p className="text-sm md:text-base font-raleway opacity-90 mb-8 leading-relaxed">
          Global Biz Setup is a renowned online business setup company extending
          compelling and customised solutions that match our client's vision and
          budget. Since our inception, we have worked towards offering the best
          possible assistance to help locals and expatriates set up a business
          across the UAE seamlessly.<br /><br />
          We have an enthusiastic and passionate team at the helm with a
          collective experience of more than 35 years in the industry. The team
          puts their best foot forward to provide the most value and expedite
          your business setup in the UAE. We pride ourselves on being a trusted
          provider of end-to-end services for business setup in the UAE.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/book-consultation">
            <Button
              size="lg"
              className="bg-yellow text-dark-blue font-semibold px-8"
            >
              Contact Us
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="
              border-2 border-blue 
              text-blue 
              font-semibold 
              px-8 
              bg-transparent 
              hover:bg-blue 
              hover:text-white
            "
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSec;
