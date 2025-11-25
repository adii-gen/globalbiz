/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
interface BusinessEntity {
  title: string;
  description?: string;
}

interface SubFreezone {
  name: string;
  benefits: string[];
  description: string;
  businessEntitiesAllowed: BusinessEntity[];
}

interface FreezoneData {
  id: string;
  name: string;
  slug: string;
  details: {
    subFreezones: SubFreezone[];
  };
}

interface ApiResponse {
  success: boolean;
  data: FreezoneData;
}

export default function SubFreezonePage() {
  const params = useParams();
  const parentFreezone = params.name as string;
  const subfreezoneslug = params.subfreezones as string;

  const [subFreezone, setSubFreezone] = useState<SubFreezone | null>(null);
  const [parentName, setParentName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubFreezoneData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/freezones/${parentFreezone}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: ApiResponse = await res.json();

        if (!data.success || !data.data.details.subFreezones) {
          throw new Error("No subfreezones found");
        }

        setParentName(data.data.name);

        // Find matching subfreezone by converting name to slug format
        const found = data.data.details.subFreezones.find(
          (sf) => sf.name.toLowerCase().replace(/\s+/g, "-") === subfreezoneslug
        );

        if (!found) {
          throw new Error("Subfreezone not found");
        }

        setSubFreezone(found);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSubFreezoneData();
  }, [parentFreezone, subfreezoneslug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error || !subFreezone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error || "Data not found"}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto py-8">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/freezone-bg.png')" }}
      >
        <h1 className="text-4xl font-bold text-white font-oswald mt-20">
          {subFreezone.name}
        </h1>
        <div className="absolute inset-0 opacity-60"></div>
      </div>

      {/* Description Section */}
      <section className="bg-gray-50 px-8 md:pl-16 lg:pl-32 xl:pl-48 pt-10 pb-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold font-oswald tracking-wide mb-6">
              <span className="text-blue">
                {subFreezone.name
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")
                  .toUpperCase()}
              </span>{" "}
              <span className="text-yellow">
                {subFreezone.name.split(" ").slice(2).join(" ").toUpperCase()}
              </span>
            </h3>

            <div className="text-justify leading-relaxed space-y-4 font-raleway text-gray-700">
              <p className="text-base">{subFreezone.description}</p>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative max-w-md">
              <Image
                src="/images/abu-dhabi-global-img.jpg"
                alt={subFreezone.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}

      <section
        className="bg-gray-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/talk-to-img-bg.png')" }}
      >
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left side - Empty for background image to show */}
          <div className="relative flex justify-center lg:justify-start">
            {/* This div is left empty so the background image shows through */}
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide text-center">
              TALK TO OUR
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-8 font-oswald tracking-wide text-center">
              BUSINESS SETUP EXPORT
            </h3>

            <form className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1e3a5f] transition-colors bg-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1e3a5f] transition-colors bg-white"
              />

              <div className="flex gap-3">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1e3a5f] transition-colors bg-white"
                  />
                </div>
              </div>

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1e3a5f] transition-colors resize-none bg-white"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1e3a5f] text-white font-semibold py-4 rounded-md hover:bg-[#163152] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 px-8 md:px-16 lg:px-32 xl:px-48 py-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/benefits.jpg"
                alt={subFreezone.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-oswald tracking-wide leading-tight">
              REASONS WHY ONE SHOULD CONSIDER SETTING UP A
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow mb-10 font-oswald tracking-wide">
              BUSINESS IN {subFreezone.name.toUpperCase()}
            </h3>

            <div className="space-y-1">
              {subFreezone.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#1e3a5f] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base font-raleway leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Entities Section */}
      <section className="bg-gray-100 px-8 md:px-16 lg:px-32 xl:px-48 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue font-oswald tracking-wide">
            TYPES OF BUSINESS ENTITIES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-yellow font-oswald tracking-wide">
            <span className="text-blue">IN</span>{" "}
            {subFreezone.name.toUpperCase()}
          </h3>
        </div>

        <div className="space-y-16">
          {subFreezone.businessEntitiesAllowed.map((entity, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald tracking-wide mb-4">
                  <span className="text-yellow">
                    {entity.title.split(" ").slice(0, -1).join(" ")}
                  </span>{" "}
                  <span className="text-blue">
                    {entity.title.split(" ").slice(-1)}
                  </span>
                </h3>

                {entity.description && (
                  <p className="text-gray-600 text-base leading-relaxed font-raleway">
                    {entity.description}
                  </p>
                )}
              </div>

              {/* Image - Same image for even positions, same image for odd positions */}
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <Image
                  src={
                    index % 2 === 0
                      ? "/images/entity-inner-1.jpg"
                      : "/images/entity-inner-2.jpg"
                  }
                  alt={entity.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* why choose section */}

      <section
        className="relative bg-cover bg-center bg-no-repeat px-8 md:px-16 lg:px-32 xl:px-48 py-20"
        style={{ backgroundImage: "url('/images/why-choose.png')" }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-yellow-400/90"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl  text-blue font-bold mb-2 font-oswald tracking-wide">
            WHY CHOOSE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-oswald tracking-wide">
            GLOBAL BIZ SETUP?
          </h3>

          <div className=" leading-relaxed font-raleway max-w-2xl">
            <p className="text-base mb-4">
              The {subFreezone.name} is well known for providing a unique
              environment for the international and local organisations for
              setting up their business. Investors can therefore make the most
              of their money after considering it as their business location.
              Being one of the fastest-growing free zones, one can make use of
              the facilities such as furnished, spacious, serviced units for the
              operation of their trade.
            </p>

            <p className="text-base mb-4">
              However, to channel the resources to the maximum, it is advised to
              seek the consultation of experts in the region. Not only will they
              provide the answers to all of your business needs but will also
              ensure to cater to your needs by helping you learn about the zone
              to the best of their ability.
            </p>

            <p className="text-base mb-4">
              The follow-up support services are the cherry on the cake that
              will help in the expansion of your business further. If you want
              to push the ball in your court then get in touch with the experts
              from <span className="font-semibold">Global Biz Setup</span>. We
              at Global Biz will be happy to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
