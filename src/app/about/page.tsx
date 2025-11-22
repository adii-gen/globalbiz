import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-banner.jpg')",
          // backgroundColor: '#1e3a5f'
        }}
      >
        <div className="absolute inset-0 opacity-60"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold">
          About Us
        </h1>
      </div>

      {/* At A Glance Section */}
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-oswald text-blue mb-6">AT A GLANCE</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Bharat Gupta and Corporation, famously known as headquarted
                based on the infrastructure-build-construction, we always came
                up being one of the commanding charismatic insurer that is only
                entrance of the UAE.
              </p>
              <p>
                Since its foundation, we have helped in built all the equipments
                with up that even other competitive company does not have.
              </p>
              <p>
                Known has authenticity customised, full pledged business setup
                services, we also let has firm from the following perspective of
                insurances setup in the UAE land.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
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
        className="relative bg-cover bg-center py-16 px-32"
        style={{
          backgroundImage: "url('/images/meet-team.jpg')",
          backgroundColor: "#1e3a5f",
        }}
      >
        <div className="absolute inset-0 opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-oswald text-white mb-6">
              MEET THE TEAM
            </h2>
            <p className="text-white max-w-4xl mx-auto text-sm leading-relaxed font-raleway">
              With a team of over 35 years of collective experience, we help you
              to walk on an effortless path for doing business in this country.
              Our professionals have honed their expertise in extending quality
              business advisory to our clients. From the initial stages to the
              very end, we ensure to stand by your side and offer assistance
              through our business set-up services.
            </p>
          </div>

          {/* Team Grid */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="relative flex-1">
                <div className="border-l-4 border-yellow pl-4">
                  <h3 className=" p-2 font-bold text-2xl mb-1 bg-white text-blue">
                    Mr Pawan Gupta{" "}
                    <span className="text-yellow-400 text-2xl">
                      (Group CFO)
                    </span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed font-raleway">
                    A competent and result-oriented professional, Mr Pawan Gupta
                    is the man behind the management of Global Biz Setup's
                    financial operations and strategy. With his experience and
                    articulate sense of detail, he is known to preserve our
                    assets and manage the books successfully.
                  </p>
                </div>
              </div>

              {/* Mr Amit Kumar Gupta - Right Aligned */}
              <div className="relative flex-1">
                <div className="border-l-4 border-yellow pl-4 md:text-right md:border-l-0 md:border-r-4 md:pr-4 md:pl-0">
                  <h3 className="p-2 font-bold text-2xl mb-1 bg-white text-blue">
                    Mr Amit Kumar Gupta{" "}
                    <span className="text-yellow-400 text-2xl">(CTO)</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed font-raleway">
                    The Techno Head of Global Biz Digital, Mr Amit, loves to
                    stay on top of emerging tech trends and implements new
                    software to assist our firm in scaling growth. With his
                    skills and abilities, he ensures that the tech strategy
                    aligns with our overall goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mr Pankaj Singhal */}
              <div className="relative">
                <div className="text-center md:text-right">
                  <h3 className="text-yellow font-bold text-xl mb-1">
                    Mr Pankaj Singhal
                  </h3>
                  <h4 className="text-yellow text-base mb-3">
                    (Head, Corporate Services, India)
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
                    The man behind the smooth flow of work in India, Mr Pankaj
                    has the ability to handle everything from soup to nuts. With
                    his in-depth understanding of management, he works to
                    establish good working relationships between the employees
                    and the board.
                  </p>
                </div>
              </div>

              {/* Mrs Ranjana Gupta */}
              <div className="relative">
                <div className="text-center md:text-left">
                  <h3 className="text-yellow font-bold text-xl mb-1">
                    Mrs Ranjana Gupta
                  </h3>
                  <h4 className="text-yellow text-base mb-3">
                    (Director of Sales, Services and Sourcing)
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
                    Mrs Ranjana's world revolves around targets, and she leads
                    our Sales squad. With her analytical bend of mind, she
                    develops and executes strategic plans to achieve our sales
                    targets- while expanding our customer base.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Row - 2 Columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ms Sonika Bharti */}
              <div className="relative">
                <div className="text-center md:text-right">
                  <h3 className="text-yellow font-bold text-xl mb-1">
                    Ms Sonika Bharti
                  </h3>
                  <h4 className="text-yellow text-base mb-3">
                    (Head, Worldwide Corporate Service)
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
                    Critical support to Global Biz Setup, Ms Sonika Bharti,
                    works towards maintaining the integrity and efficiency of
                    the organisation. She's the centre of effective project
                    delivery and oversees finance, human resources, risk, legal
                    and compliance functions.
                  </p>
                </div>
              </div>

              {/* Mr Rajesh Shah */}
              <div className="relative">
                <div className="text-center md:text-left">
                  <h3 className="text-yellow font-bold text-xl mb-1">
                    Mr Rajesh Shah
                  </h3>
                  <h4 className="text-yellow text-base mb-3">
                    (Head of Corporate Service, UAE)
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
                    Mr Rajesh Shah is the Head of Corporate Service in UAE. From
                    monitoring the work culture to establishing procurement
                    policies, he does it all with passion and perseverance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
