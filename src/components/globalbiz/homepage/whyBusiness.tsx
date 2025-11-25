"use client";

import React from "react";
import { Check } from "lucide-react";

const WhyBusiness = () => {
    const benefits = [
        "As a growing and diversified market, UAE has a high global demand for imports & exports and offers vast opportunities for suppliers.",
        "The country is strategically located in a region full of enormous resources.",
        "The country offers easy access and global connectivity to businesses with over 90 airlines and 170 shipping lines.",
        "No trade barriers to commerce in the UAE",
        "No currency restrictions on the trade of money",
        "Exemption from taxes on personal, capital or corporate income",
        "Abundant energy supply that comes at affordable prices",
        "Competitive prices for real estate and freight"
    ];

    return (
        <section className="w-full bg-[#1a3a5c] flex items-stretch justify-between">
            {/* LEFT SIDE */}
            <div className="flex-1 text-left text-white px-8 md:px-28 py-20">
                <h1 className="text-4xl md:text-6xl font-bold font-oswald text-white mb-8 leading-tight">
                    WHY SET UP<br />
                    YOUR <span className="text-[#fbb040]">BUSINESS</span> IN<br />
                    THE UAE?
                </h1>

                <p className="text-sm md:text-lg font-raleway text-white mb-10  opacity-95">
                    UAE is one of the most developed economies offering a favourable business environment, 
                    exceptional infrastructure, agile amenities, pliable government norms, and state-of-the-art 
                    services to all incoming business ventures, regardless of their country of origin. 
                    Business Setup Company in UAE is considered an insightful and profitable business 
                    decision due to the following reasons
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-10">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                                <div className="w-6 h-6 rounded-full border-2 border-[#fbb040] flex items-center justify-center bg-transparent">
                                    <Check className="w-4 h-4 text-[#fbb040]" strokeWidth={3} />
                                </div>
                            </div>
                            <p className="text-sm md:text-base font-raleway text-white opacity-95">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:block flex-1 relative overflow-hidden -ml-8">
                <img
                    src="/global/why-business.jpg"
                    alt="Business Analytics Dashboard"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default WhyBusiness;