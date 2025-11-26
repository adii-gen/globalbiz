// /app/offshore/[name]/page.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { OffshoreProcessCards } from "@/components/offshore/ProcessCards";

interface Perk {
  image: string;
  description: string;
}
interface BusinessProcess {
  image: string;
  heading: string;
  description: string;
}

interface OffshoreDetails {
  id: string;
  offshoreId: string;
  description: string;
  understanding: string[];
  prerequisites: string[];
    benefits: string[];
  buesinessProcess: BusinessProcess[]; 
  perks: Perk[];
  createdAt: string;
  updatedAt: string;
}

interface OffshoreData {
  id: string;
  name: string;
  slug: string;
  details: OffshoreDetails;
}

interface ApiResponse {
  success: boolean;
  data: OffshoreData;
}

export default function OffshorePage() {
  const params = useParams();
  const offshoreSlug = params.name as string;

  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffshoreData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/offshore/${offshoreSlug}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch offshore data: ${res.status}`);
        }

        const responseData = await res.json();
        console.log("Fetched offshore data:", responseData);

        if (!responseData?.success) {
          throw new Error("API returned unsuccessful response");
        }

        setData(responseData);
      } catch (err) {
        console.error("Error loading offshore details:", err);
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while loading offshore details"
        );
      } finally {
        setLoading(false);
      }
    };

    if (offshoreSlug) {
      fetchOffshoreData();
    }
  }, [offshoreSlug]);

  const offshoreData = data?.data;
  const details = offshoreData?.details;

  return (
    <div className="mx-auto py-8">
      <div
        className="relative h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/freezone-bg.png')",
        }}
      >
        <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
          {offshoreData?.name || "Offshore Details"}
        </h1>
        <div className="absolute inset-0 opacity-60"></div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-12">
          <div className="text-gray-500">Loading offshore details...</div>
        </div>
      )}

      {!loading && offshoreData && (
        <div className="space-y-6">
          {/* Description Section */}
          {details?.description && (
            <section className="bg-gray-50 px-4 md:pl-8 lg:pl-12 xl:pl-16 pt-8 pb-4">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* TEXT CONTENT */}
                <div className="flex-1 w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide leading-tight">
                    BUSINESS SETUP
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-8 font-oswald tracking-wide">
                    IN {offshoreData?.name?.toUpperCase()}
                  </h3>

                  <div className="text-justify leading-relaxed space-y-4 font-raleway">
                    <p className="text-sm">{details.description}</p>
                  </div>
                </div>

                {/* IMAGE — HIDE ON MOBILE */}
                <div className="hidden md:flex flex-1 justify-center lg:justify-end">
                  <div className="relative w-full max-w-2xl">
                    <Image
                      src="/images/dubai-mainland-about.jpg"
                      alt="Dubai Offshore Business Setup"
                      className="w-full h-auto object-contain"
                      width={300}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          <section className="bg-gray-50 px-8 md:px-16 lg:px-32 xl:px-48">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center lg:justify-start">
                {/* Main circular image */}
                <div className="relative z-10 w-full max-w-lg">
                  <Image
                    src="/images/talk-to-img.png"
                    alt="Business Consultation"
                    className="w-full h-auto"
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide text-center">
                  TALK TO OUR
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-8 font-oswald tracking-wide text-center">
                  BUSINESS SETUP EXPERT
                </h3>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                  />

                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                  />

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#1e3a5f] text-white font-semibold py-4 rounded-lg hover:bg-[#2c5282] transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Understanding Section */}
          {/* {details?.understanding && details.understanding.length > 0 && (
            <section className="bg-white px-8 md:px-16 lg:px-32 xl:px-48 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
                  UNDERSTANDING
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
                  {offshoreData?.name?.toUpperCase()}
                </h3>
              </div>

              <div className="space-y-4">
                {details.understanding.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base font-raleway leading-relaxed flex-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )} */}
          {details?.understanding && details.understanding.length > 0 && (
            <section
              className="relative bg-cover bg-center bg-no-repeat px-8 md:px-16 lg:px-32 xl:px-48 py-16"
              style={{ backgroundImage: "url('/images/business-type-bg.jpg')" }}
            >
              <div className="absolute inset-0 opacity-90"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                {/* Benefits List */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-oswald tracking-wide leading-tight uppercase">
                    Understanding international
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-10 font-oswald tracking-wide">
                    BUSINESS COMPANIES
                  </h3>

                  <div className="space-y-2">
                    {details.understanding.map(
                      (benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-[#1e3a5f]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-xm lg:text-xm font-raleway leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Benefits Section */}
{details?.benefits && details.benefits.length > 0 && (
  <section
    className="relative bg-cover bg-center bg-no-repeat px-8 md:px-16 lg:px-32 xl:px-48 py-16"
    style={{ backgroundImage: "url('/images/business-type-bg.jpg')" }}
  >
    <div className="absolute inset-0 opacity-90"></div>

    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
      {/* Benefits List */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-oswald tracking-wide leading-tight uppercase">
          ADVANTAGES OF SETTING UP A
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-10 font-oswald tracking-wide">
          COMPANY IN {offshoreData?.name?.toUpperCase()}
        </h3>

        <div className="space-y-2">
          {details.benefits.map((benefit: string, index: number) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#1e3a5f]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-white text-xm lg:text-xm font-raleway leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

          {details?.perks && details.perks.length > 0 && (
            <section className="bg-gray-50 px-4 md:px-8 lg:px-16 xl:px-24 py-16">
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide uppercase ">
                  Perks of opting for
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
                  {offshoreData?.name?.toUpperCase()} BUSINESS SETUP
                </h3>
              </div>

              {/* License Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {details.perks.map((perk: Perk, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <Image
                        src={`/images/license-icon-${index + 1}.png`}
                        alt="image"
                        className="w-40 h-20 object-contain"
                        width={40}
                        height={20}
                      />
                    </div>

                    {/* Heading */}

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed font-raleway">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Prerequisites Section */}
          {details?.prerequisites && details.prerequisites.length > 0 && (
            <section className="bg-yellow px-8 md:px-16 lg:px-12 xl:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* LEFT IMAGE */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">
                      <Image
                        src="/global/offshore.png"
                        alt="Dubai Offshore Business Setup"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        width={500}
                        height={600}
                      />
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-oswald font-bold text-blue uppercase leading-tight">
                        What are the Process and Prerequisites
                      </h2>
                      <h3 className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase mt-2">
                        of {offshoreData?.name?.toUpperCase()} Business Setup
                      </h3>
                    </div>

                    <div className="space-y-3 mt-8">
                      {details.prerequisites.map(
                        (item: string, index: number) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-3 h-3 bg-blue rounded-full mt-2"></div>
                            <p className="text-blue text-sm md:text-base font-raleway leading-relaxed flex-1">
                              {item}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

             {/* Process Cards Section - Only show if data is present */}
{/* Process Cards Section - Only show if data is present */}
{offshoreData && details?.buesinessProcess && details.buesinessProcess.length > 0 && (
  <OffshoreProcessCards 
    processes={details.buesinessProcess}
    offshoreName={offshoreData.name}
  />
)}

          {/* Why Choose Section */}
          <section className="bg-white px-8 md:px-12 lg:px-12 xl:px-12 py-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image */}
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-2xl">
                  <Image
                    src="/images/sin-why-choose.png"
                    alt="Why Choose Global Biz Setup"
                    className="w-full h-auto object-contain"
                    width={500}
                    height={400}
                  />
                </div>
              </div>

           

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide leading-tight">
                  WHY CHOOSE
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-6 font-oswald tracking-wide">
                  GLOBAL BIZ SETUP?
                </h3>

                <div className="text-gray-700 leading-relaxed font-raleway">
                  <p className="text-base mb-4">
                    Global Biz Setup around, establishing business overseas
                    could not have been as easy as it is now. With a team of
                    highly specialized members, Global Biz Setup will help in
                    setting up all the documents needed in the process of{" "}
                    {offshoreData?.name} business setup. For any consultants
                    regarding the same, our panel of professionals are right
                    there to assist and help you maximise your profile while
                    doing business abroad.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
