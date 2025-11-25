/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";

interface TeamMember {
  id: string;
  Name: string;
  Designation: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
}

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/management");
      if (!response.ok) {
        throw new Error(`Failed to fetch team members: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data);
      setTeamMembers(data);
    } catch (err: any) {
  console.error("Error fetching team members:", err);
  setError(err.message);
  setTeamMembers([]);
} finally {
      setLoading(false);
    }
  };

  // Split members into rows of 2
  const teamRows = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    teamRows.push(teamMembers.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div
        className="relative h-60 sm:h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 opacity-60"></div>
        <h1 className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-3xl sm:text-5xl font-oswald">
          About Us
        </h1>
      </div>

      {/* At A Glance Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-4xl font-oswald font-semibold text-blue mb-4 sm:mb-6">
              AT A GLANCE
            </h2>
            <div className="space-y-3 sm:space-y-4 font-raleway text-gray-700 text-sm sm:text-base">
              <p>
                GenNext Global Biz Corporate Services FZCO, a renowned name in
                the industry, was established with the agenda of assisting
                individuals in commencing a business hassle-free in any emirate
                of the UAE.
              </p>
              <p>
                Since its inception, we have helped a host of entrepreneurs set
                up their own businesses in the UAE.
              </p>
              <p>
                Known for extending customised, full-fledged business setup
                services, we aim to free you from the tiresome procedure of
                business setup in the UAE. Since its foundation, we have helped
                in built all the equipments with up that even other competitive
                company does not have.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/about-sec.png"
              alt="Business meeting"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div
        className="relative bg-cover bg-center py-8 px-4 sm:py-16 sm:px-32"
        style={{
          backgroundImage: "url('/images/meet-team.jpg')",
          backgroundColor: "#1e3a5f",
        }}
      >
        <div className="absolute inset-0 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold font-oswald text-white mb-4 sm:mb-6">
              MEET THE TEAM
            </h2>
            <p className="text-white max-w-4xl mx-auto text-xs sm:text-sm leading-relaxed font-raleway px-2">
              With a team of over 35 years of collective experience, we help you
              to walk on an effortless path for doing business in this country.
              Our professionals have honed their expertise in extending quality
              business advisory to our clients. From the initial stages to the
              very end, we ensure to stand by your side and offer assistance
              through our business set-up services.
            </p>
          </div>

          {/* First Row - Hardcoded (CFO and CTO) - NO vertical center line */}
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-40">
            <div className="relative flex-1">
              <div className="border-l-4 border-yellow pl-2">
                <h3 className="font-oswald p-2 font-bold text-lg sm:text-2xl mb-1 bg-white text-blue">
                  Mr Pawan Gupta{" "}
                  <span className="text-yellow-400 text-lg sm:text-2xl">
                    (Group CFO)
                  </span>
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-raleway">
                  A competent and result-oriented professional, Mr Pawan Gupta
                  is the man behind the management of Global Biz Setup&apos;s
                  financial operations and strategy. With his experience and
                  articulate sense of detail, he is known to preserve our
                  assets and manage the books successfully.
                </p>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="border-r-4 border-yellow pr-2 md:text-right md:border-l-0 md:border-r-4 md:pr-4 md:pl-0">
                <h3 className="p-2 font-oswald font-bold text-lg sm:text-2xl mb-1 bg-white text-blue">
                  Mr Amit Kumar Gupta{" "}
                  <span className="text-yellow-400 text-lg sm:text-2xl">
                    (CTO)
                  </span>
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-raleway">
                  The Techno Head of Global Biz Digital, Mr Amit, loves to
                  stay on top of emerging tech trends and implements new
                  software to assist our firm in scaling growth. With his
                  skills and abilities, he ensures that the tech strategy
                  aligns with our overall goals.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Team Members Rows - WITH continuous vertical line */}
          <div className="relative mt-6">

  {/* Continuous vertical line in center */}
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0"></div>

  {loading ? (
    <div className="text-center text-white py-8 text-lg">Loading team members...</div>
  ) : teamRows.length > 0 ? (
    teamRows.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 py-2 relative z-10"
      >
        {/* Left Member */}
        {row[0] && (
          <div className="flex-1 text-right pr-10 md:pr-8">
            <h3 className="text-yellow font-oswald font-bold text-xl md:text-2xl mb-1">
              {row[0].Name}
            </h3>
            <h4 className="text-yellow tracking-wide font-oswald text-xl md:text-2xl mb-3 opacity-90">
              ({row[0].Designation})
            </h4>
            <p className="text-white text-xs md:text-sm leading-relaxed opacity-90">
              {row[0].Description}
            </p>
          </div>
        )}

        {/* Right Member */}
        {row[1] ? (
          <div className="flex-1 text-left pl-10 md:pl-8">
            <h3 className="text-yellow font-oswald font-bold text-xl md:text-2xl mb-1">
              {row[1].Name}
            </h3>
            <h4 className="text-yellow tracking-wide font-oswald text-xl md:text-2xl mb-3 opacity-90">
              ({row[1].Designation})
            </h4>
            <p className="text-white text-xs md:text-sm leading-relaxed opacity-90">
              {row[1].Description}
            </p>
          </div>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    ))
  ) : (
    <div className="text-center text-white py-12">No additional team members found.</div>
  )}
</div>

        </div>
      </div>
    </div>
  );
}