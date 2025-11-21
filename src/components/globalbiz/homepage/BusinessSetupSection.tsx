import React from "react";
import { Check } from "lucide-react";

const BusinessSetupSection = () => {
    const steps = [
        "Find a local sponsor who will act as your service agent in setting up your business in Dubai.",
        "Select an economic activity for your business and, based on that, a legal form",
        "Present an application for your entity's registration to the Department of Economic Development (DED) along with a suggested company name.",
        "Submit your company's documents to the DED or Chamber of Commerce and Industry, and obtain a trade licence.",
        "Create a Memorandum of Association (MOA) for your company and get it notarized",
        "Get the trade name of your company registered.",
        "Apply for an Establishment Card for the company",
        "Acquire the initial and special approvals.",
        "Sign the MOA and lease agreement for the company in presence of a public notary.",
        "Procure approval for location and inspection from the Municipality.",
        "Get all the documents processed and a payment voucher issued.",
        "Pay the licence fee for issuing a trade licence",
        "In order to hire employees, get approval from the Name Board and Ministry of Labour in the UAE"
    ];

    return (
        <div className="w-full">
            {/* Top Section - Business Setup Steps */}
            <section className="w-full bg-white flex items-stretch">
                {/* Left Image - Single Collage */}
                <div className="hidden lg:block w-1/2 relative">
                    <img
                        src="/global/businesssetup.png"
                        alt="Dubai Business Setup"
                        className="w-[24] h-[24] object-cover"
                    />
                    {/* Yellow accent strip */}
                     <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fbb040]"></div>
                </div>

                {/* Right Content */}
                <div className="flex-1 px-8 lg:px-20 ">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#2c4a6b] mb-12 font-sans leading-tight">
                    Process of
company formation
in the UAE
                    </h2>

                    {/* Steps List */}
                    <div className="space-y-5">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#fbb040] flex items-center justify-center bg-white">
                                        <Check className="w-5 h-5 text-[#fbb040]" strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-base text-gray-700 leading-relaxed font-sans">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Section - Why Choose Global Biz */}
            <section className="w-full bg-white flex items-stretch">
                {/* Left Content */}
                <div className="flex-1 px-8 lg:px-20 bg-white relative">
                    {/* Yellow background accent */}
                    <div className="absolute left-0 top-0 w-64 h-full bg-[#fbb040] -z-0"></div>
                    
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#2c4a6b] mb-8 font-sans leading-tight">
                            WHY CHOOSE<br />
                            GLOBAL <span className="text-[#fbb040]">BIZ SETUP?</span>
                        </h2>

                        <p className="text-base text-gray-700 leading-relaxed mb-10 font-sans">
                            Setting up a business in any emirate of the UAE is a fair and profitable investment. 
                            Businesses from diverse countries are seizing the opportunity to grow their business in 
                            Dubai and drench under the rain of extensive revenues. However, as not everyone is 
                            accustomed to the UAE laws, consultants can help with company registration, 
                            incorporation and legal consulting services. We at Global Biz Setup have been working in 
                            this industry for years and have honed our expertise in offering business advisory through 
                            leadership and a team of passionate experts. Our business setup consultants in the UAE 
                            will assist you in establishing your business from the initial stage till its commencement 
                            through our extensive array of business setup services. Schedule an appointment with us 
                            to understand the process and avail this opportunity!
                        </p>

                        <button className="bg-[#fbb040] text-white font-semibold px-8 py-3 rounded hover:bg-[#e9a030] transition-colors font-sans">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden lg:block w-1/2 relative">
                    <img
                        src="/api/placeholder/600/800"
                        alt="Professional Woman"
                        className="w-full h-full object-cover"
                    />
                    {/* Yellow accent strip bottom right */}
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#fbb040]"></div>
                </div>
            </section>
        </div>
    );
};

export default BusinessSetupSection;