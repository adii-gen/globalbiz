import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HeroSec = () => {
    return (
        // <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        //     <div
        //         id="logo"
        //         className="relative w-full h-max bg-cover bg-center flex items-center"
        //         style={{ backgroundImage: "url('/global/herobg.png')" }}
        //     >
        //         {/* dark overlay */}
        //         <div className="absolute inset-0 bg-black/10"></div>

        //         {/* 2 COLUMN LAYOUT */}
        //         <div className="w-full flex items-center justify-between px-28 pt-40 pb-20">

        //             {/* LEFT SIDE TEXT */}
        //             <div className="max-w-3xl text-left">
        //                 <h1 className="text-yellow text-2xl md:text-2xl lg:text-2xl font-sans mb-6 leading-tight">
        //                     The Trusted leader for Businesses
        //                 </h1>

        //                 <p className="md:text-6xl mb-8 text-[62px] text-white font-oswald max-w-xl">
        //                     #1 ONLINE COMPANY SETUP SERVICES <br /> IN
        //                     <span className="text-yellow"> UAE</span>
        //                 </p>

        //                 <p className="md:text-sm text-xs text-white font-sans max-w-xl mb-10">
        //                     Dubai is considered as the commercial capital of United Arab Emirates and has favourable economy for business investment. This is the main business hub amongst Arab countries.
        //                 </p>

        //                 <div className="flex flex-wrap gap-4">
        //                     <Link href={"/book-consultation"}>
        //                         <Button
        //                             size="lg"
        //                             className="bg-yellow text-blue font-semibold px-8"
        //                         >
        //                             Contact Us
        //                         </Button>
        //                     </Link>
        //                     <Button
        //                         size="lg"
        //                         className="outline-white text-white bg-transparent font-semibold px-8 border-white"
        //                     >
        //                         View Services
        //                     </Button>
        //                 </div>
        //             </div>

        //             {/* RIGHT SIDE IMAGE */}
        //             <div className="hidden md:block">
        //                 <img
        //                     src="/global/Hero-side-logo.png"
        //                     alt="Hero Illustration"
        //                     className="w-[420px] h-auto object-contain drop-shadow-2xl"
        //                 />
        //             </div>

        //         </div>
        //     </div>
        // </section>
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
    <div
        id="logo"
        className="relative w-full h-max bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/global/herobg.png')" }}
    >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* RESPONSIVE WRAPPER */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-28 pt-52 md:pt-40 pb-10 md:pb-20 gap-10 md:gap-0">

            {/* LEFT TEXT (unchanged) */}
            <div className="max-w-3xl text-left">
                <h1 className="text-yellow text-2xl md:text-2xl lg:text-2xl font-sans mb-6 leading-tight">
                    The Trusted leader for Businesses
                </h1>

                <p className="md:text-6xl mb-8 text-[30px] font-semibold md:text-[62px] text-white font-oswald max-w-xl">
                    #1 ONLINE COMPANY SETUP SERVICES <br /> IN
                    <span className="text-yellow"> UAE</span>
                </p>

                <p className="md:text-sm text-xs text-white font-sans max-w-xl mb-10">
                    Dubai is considered as the commercial capital of United Arab Emirates and has favourable economy for business investment.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link href={"/book-consultation"}>
                        <Button
                            size="lg"
                            className="bg-yellow text-blue font-semibold px-8"
                        >
                            Contact Us
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        className="outline-white text-white bg-transparent font-semibold px-8 border-white"
                    >
                        View Services
                    </Button>
                </div>
            </div>

            {/* RIGHT IMAGE */}
          <div className="hidden md:block">
  <img
    src="/global/Hero-side-logo.png"
    alt="Hero Illustration"
    className="w-[420px] h-auto object-contain drop-shadow-2xl"
  />
</div>

        </div>
    </div>
</section>

    )
}

export default HeroSec