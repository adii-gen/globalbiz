"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isFreezoneOpen, setFreezoneOpen] = useState(false);
  const [isMainlandOpen, setMainlandOpen] = useState(false);
  const [isOffshoreOpen, setOffshoreOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  interface Freezone {
    id: string;
    name: string;
  }

  const [freezones, setFreezones] = useState<Freezone[]>([]);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 50px (ek scroll ke baad)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/freezones");
      const json = await res.json();
      setFreezones(json.data);
    }
    loadData();
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 text-white font-sans text-sm font-semibold transition-all duration-500 ${
        isScrolled ? "bg-[#1f3b63] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Trusted By Banner - Always visible with background */}
      <div className="bg-yellow text-black py-3  font-sans text-center px-52">
        Trusted by thousands of business owners and entrepreneurs worldwide...!
      </div>

      <div
        className={`max-w-[1500px] mx-auto flex items-center justify-between py-3 px-12 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        {/* LEFT — Logo & Phone */}
        <div className="flex items-center gap-4  md:gap-10">
          <Image
            src="/global/logo-navbar.png"
            alt="Global Biz"
            width={120}
            height={60}
            className={`transition-all duration-500 ${
              isScrolled ? "w-24 md:w-32" : "w-28 md:w-36"
            }`}
          />

          {/* Call Section - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <Image
              src="/global/phone-ic.png"
              width={30}
              height={30}
              alt="phone"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`text-sm transition-all duration-500 ${
                  isScrolled ? "text-white" : "text-gray-200"
                }`}
              >
                Call Us
              </span>
              <span
                className={`text-xl font-semibold transition-all duration-500 ${
                  isScrolled ? "text-white" : "text-gray-100"
                }`}
              >
                +971 50 2056381
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Call - Visible only on mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Image
            src="/global/phone-ic.png"
            width={20}
            height={20}
            alt="phone"
          />
          <span
            className={`text-xs font-semibold transition-all duration-500 ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            +971 50 2056381
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <a
            href="#"
            className={`hover:text-[#f6d674] transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`hover:text-[#f6d674] transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            About Us
          </a>

         {/* FREEZONE COMPANY */}
<div
  className="relative cursor-pointer"
  onMouseEnter={() => setFreezoneOpen(true)}
  onMouseLeave={() => setFreezoneOpen(false)}
>
  <div
    className={`flex items-center gap-1 hover:text-[#f6d674] transition-colors duration-300 ${
      isScrolled ? "text-white" : "text-gray-100"
    }`}
  >
    Freezone Company <ChevronDown size={18} />
  </div>

  {isFreezoneOpen && (
    <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[200px] p-3 z-50">
      {freezones.map((item) => (
        <a
          key={item.id}
          href={`/freezone/${item.id}`}
          className="block py-2 hover:text-[#1f3b63] transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  )}
</div>

          {/* MAINLAND COMPANY */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setMainlandOpen(true)}
            onMouseLeave={() => setMainlandOpen(false)}
          >
            <div
              className={`flex items-center gap-1 hover:text-[#f6d674] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-100"
              }`}
            >
              Mainland Company <ChevronDown size={18} />
            </div>

            {isMainlandOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[200px] p-3 z-50">
                <a
                  className="block py-2 hover:text-[#1f3b63] transition-colors"
                  href="#"
                >
                  Option 1
                </a>
                <a
                  className="block py-2 hover:text-[#1f3b63] transition-colors"
                  href="#"
                >
                  Option 2
                </a>
              </div>
            )}
          </div>

          {/* OFFSHORE COMPANY */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOffshoreOpen(true)}
            onMouseLeave={() => setOffshoreOpen(false)}
          >
            <div
              className={`flex items-center gap-1 hover:text-[#f6d674] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-100"
              }`}
            >
              Offshore Company <ChevronDown size={18} />
            </div>

            {isOffshoreOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[200px] p-3 z-50">
                <a
                  className="block py-2 hover:text-[#1f3b63] transition-colors"
                  href="#"
                >
                  Option 1
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className={`hover:text-[#f6d674] transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            Blog
          </a>
          <a
            href="#"
            className={`hover:text-[#f6d674] transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              size={28}
              className={isScrolled ? "text-white" : "text-gray-100"}
            />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-white" : "text-gray-100"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-6 py-4 transition-all duration-500 ${
            isScrolled
              ? "bg-[#1f3b63] border-gray-600"
              : "bg-black/80 backdrop-blur-sm border-gray-500"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
            >
              About Us
            </a>

           {/* Mobile Freezone Company Dropdown */}
<div className="border-b border-gray-600">
  <button
    className="flex items-center justify-between w-full py-2 text-left text-white"
    onClick={() => setFreezoneOpen(!isFreezoneOpen)}
  >
    <span>Freezone Company</span>
    <ChevronDown
      size={18}
      className={`transform transition-transform ${
        isFreezoneOpen ? "rotate-180" : ""
      }`}
    />
  </button>
  {isFreezoneOpen && (
    <div className="ml-4 mt-2 space-y-2 pb-2">
      {freezones.map((item) => (
        <a
          key={item.id}
          href={`/freezone/${item.id}`}
          className="block py-1 hover:text-[#f6d674] transition-colors text-gray-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  )}
</div>

            {/* Mobile Mainland Company Dropdown */}
            <div className="border-b border-gray-600">
              <button
                className="flex items-center justify-between w-full py-2 text-left text-white"
                onClick={() => setMainlandOpen(!isMainlandOpen)}
              >
                <span>Mainland Company</span>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    isMainlandOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMainlandOpen && (
                <div className="ml-4 mt-2 space-y-2 pb-2">
                  <a
                    href="#"
                    className="block py-1 hover:text-[#f6d674] transition-colors text-gray-200"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block py-1 hover:text-[#f6d674] transition-colors text-gray-200"
                  >
                    Option 2
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Offshore Company Dropdown */}
            <div className="border-b border-gray-600">
              <button
                className="flex items-center justify-between w-full py-2 text-left text-white"
                onClick={() => setOffshoreOpen(!isOffshoreOpen)}
              >
                <span>Offshore Company</span>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    isOffshoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOffshoreOpen && (
                <div className="ml-4 mt-2 space-y-2 pb-2">
                  <a
                    href="#"
                    className="block py-1 hover:text-[#f6d674] transition-colors text-gray-200"
                  >
                    Option 1
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
