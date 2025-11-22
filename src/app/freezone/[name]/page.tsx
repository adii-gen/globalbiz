// /app/freezone/[name]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ProcessCards } from "@/components/freezone/ProcessCards";

interface LicenseType {
  heading: string;
  description: string;
}

interface BusinessEntity {
  title: string;
  description: string;
}

interface FreezoneDetails {
  description: string;
  benefits: string[];
  licenseTypes: LicenseType[];
  businessEntities: BusinessEntity[];
  createdAt?: string;
  updatedAt?: string;
  subFreezones?: Array<{ name: string }>;
}

interface FreezoneData {
  id: string;
  name: string;
  slug: string;
  details: FreezoneDetails;
}

interface ApiResponse {
  success: boolean;
  data: FreezoneData;
}

export default function FreezonePage() {
  const params = useParams();
  const router = useRouter();
  const freezoneName = params.name as string;

  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [subfreezonelist, setSubfreezoneList] = useState<
    Array<{ name: string; slug: string }>
  >([]);
 

  useEffect(() => {
    const fetchFreezoneData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/freezones/${freezoneName}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch freezone data: ${res.status}`);
        }

        const responseData = await res.json();
        console.log("Fetched freezone data:", responseData);

        if (!responseData?.success) {
          throw new Error("API returned unsuccessful response");
        }

        setData(responseData);

        // Extract and format subfreezones
        if (responseData.data?.details?.subFreezones) {
          const formatted = responseData.data.details.subFreezones.map(
            (sub: any) => ({
              name: sub.name,
              slug: sub.name.toLowerCase().replace(/\s+/g, "-"),
            })
          );
          setSubfreezoneList(formatted);
        }
      } catch (err) {
        console.error("Error loading freezone details:", err);
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while loading freezone details"
        );
      } finally {
        setLoading(false);
      }
    };

    if (freezoneName) {
      fetchFreezoneData();
    }
  }, [freezoneName]);

  const freezoneData = data?.data;
  const details = freezoneData?.details;

  return (
    <div className=" mx-auto py-8">
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/freezone-bg.png')",
        }}
      >
        <h1 className="text-4xl font-bold  text-white font-oswald mt-20">
          {freezoneData?.name || "Freezone Details"}
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
          <div className="text-gray-500">Loading freezone details...</div>
        </div>
      )}

      {!loading && freezoneData && (
        <div className="space-y-6">
          {details?.description && (
            <section className="bg-gray-50 px-8 md:pl-16 lg:pl-32 xl:pl-48 pt-10 pb-4">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide leading-tight">
                    BUSINESS SETUP
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-8 font-oswald tracking-wide">
                    IN {freezoneData?.name?.toUpperCase()}
                  </h3>

                  <div className="text-justify leading-relaxed space-y-4 font-raleway w-[600]">
                    {details.description
                      .split("\\n\\n")
                      .map((paragraph: string, index: number) => (
                        <p key={index} className="text-sm">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-2xl">
                    <img
                      src="/images/dubai-mainland-about.jpg"
                      alt="Dubai Freezone Business Setup"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* contact section */}

          <section className="bg-gray-50 px-8 md:px-16 lg:px-32 xl:px-48">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center lg:justify-start">
                {/* Main circular image */}
                <div className="relative z-10 w-full max-w-lg">
                  <img
                    src="/images/talk-to-img.png"
                    alt="Business Consultation"
                    className="w-full h-auto"
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-oswald tracking-wide leading-tight">
                    BENEFITS OF SETTING UP A
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-10 font-oswald tracking-wide">
                    BUSINESS IN THE {freezoneData?.name?.toUpperCase()}
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

          {/* License Types Section */}
          {details?.licenseTypes && details.licenseTypes.length > 0 && (
            <section className="bg-gray-50 px-8 md:px-16 lg:px-32 xl:px-48 py-16">
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
                  TYPES OF LICENCES FOR BUSINESS SETUP
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
                  IN {freezoneData?.name?.toUpperCase()}
                </h3>
              </div>

              {/* License Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {details.licenseTypes.map(
                  (license: LicenseType, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <img
                          src={`/images/license-icon-${index + 1}.png`}
                          alt={license.heading}
                          className="w-20 h-20 object-contain"
                        />
                      </div>

                      {/* Heading */}
                      <h3 className="text-xl font-semibold mb-4 font-oswald tracking-wide">
                        {license.heading}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed font-raleway">
                        {license.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          <section className="bg-gray-50 px-8 md:px-16 lg:px-32 xl:px-48 py-16">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue font-oswald tracking-wide">
                LIST OF FREEZONE
              </h2>
            </div>

            {/* Freezone Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {subfreezonelist.map((freezone, index) => (
                <Link
                  key={index}
                  href={`/freezone/${freezoneName}/${freezone.slug}`}
                  className="bg-blue  text-yellow px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:shadow-lg group"
                >
                  <img
                    src="https://images.emojiterra.com/google/android-12l/512px/1f449.png"
                    className="w-5 h-5"
                  />

                  <span className="font-raleway font-medium text-base">
                    {freezone.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Business Entities Section */}
          {details?.businessEntities && details.businessEntities.length > 0 && (
            <section className="bg-gray-100 px-8 md:px-16 lg:px-32 xl:px-48 py-16">
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide">
                  TYPES OF BUSINESS ENTITIES ALLOWED
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
                  IN {freezoneData?.name?.toUpperCase()}
                </h3>
              </div>

              {/* Business Entity Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {details.businessEntities.map(
                  (entity: BusinessEntity, index: number) => (
                    <div key={index} className="bg-white relative pb-12">
                      <div
                        className={`${
                          index === 0
                            ? "bg-blue"
                            : index === 1
                            ? "bg-yellow"
                            : "bg-blue"
                        } text-white px-6 py-4`}
                      >
                        <h3 className="text-xl font-oswald">{entity.title}</h3>
                      </div>

                      {/* Content */}
                      <div className="px-6 py-6">
                        <p className="text-gray-600 text-base leading-relaxed font-oswald">
                          {entity.description}
                        </p>
                      </div>

                      {/* V-shape pointing up at bottom */}
                      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
                        <svg
                          viewBox="0 0 400 60"
                          preserveAspectRatio="none"
                          className="w-full h-full"
                        >
                          <path
                            d="M0,60 L200,0 L400,60 L400,60 L0,60 Z"
                            fill="#f3f4f6"
                          />
                        </svg>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          <ProcessCards/>

          {/* Additional Info Section */}
          <section className="bg-white px-8 md:px-16 lg:px-32 xl:px-48 py-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image */}
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-2xl">
                  <img
                    src="/images/sin-why-choose.png"
                    alt="Why Choose Global Biz Setup"
                    className="w-full h-auto object-contain"
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
                    <span className="text-[#00a8a8] font-semibold">
                      Global Biz Setup
                    </span>{" "}
                    is known for offering top-notch services in the industry for
                    Freezone company formation in UAE. Our services cover the
                    whole range of procedures and assistance that you may
                    require in{" "}
                    <span className="font-bold text-gray-900">
                      free zone business setup in Dubai
                    </span>
                    . Our team comprises certified and experienced consultants
                    who will assist you with every step of the procedure,
                    including registration, trade licence acquisition, and
                    notarization of documents. Schedule an appointment with us
                    to know more about the{" "}
                    <span className="font-bold text-gray-900">
                      Dubai Freezone company formation
                    </span>
                    .
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
