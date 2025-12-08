/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Link from "next/link";

// interface Freezone {
//   id: string;
//   name: string;
//   slug: string;
// }

// interface Mainland {
//   id: string;
//   name: string;
//   slug: string;
// }

// interface Offshore {
//   id: string;
//   name: string;
//   slug: string;
// }

// interface DropdownItem {
//   name: string;
//   href: string;
// }

// const slugify = (name: string) => {
//   return name
//     .toLowerCase()
//     .replace(/ /g, "-")
//     .replace(/[^a-z0-9\-]/g, "");
// };

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [freezones, setFreezones] = useState<Freezone[]>([]);
//   const [mainlands, setMainlands] = useState<Mainland[]>([]);
//   const [offshores, setOffshores] = useState<Offshore[]>([]);

//   // Scroll effect handler
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fetch freezones data
//   useEffect(() => {
//     async function loadData() {
//       try {
//         const res = await fetch("/api/freezones");
//         const json = await res.json();
//         setFreezones(json.data || []);
//       } catch (error) {
//         console.error("Failed to load freezones:", error);
//       }
//     }
//     loadData();
//   }, []);

//   // Fetch mainland data
//   useEffect(() => {
//     async function loadData() {
//       try {
//         const res = await fetch("/api/mainland");
//         const json = await res.json();
//         setMainlands(json.data || []);
//       } catch (error) {
//         console.error("Failed to load mainlands:", error);
//       }
//     }
//     loadData();
//   }, []);
// useEffect(() => {
//   const handleClickOutside = (event: MouseEvent) => {
//     if (openDropdown && !(event.target as Element).closest('.relative')) {
//       setOpenDropdown(null);
//     }
//   };

//   document.addEventListener('mousedown', handleClickOutside);
//   return () => document.removeEventListener('mousedown', handleClickOutside);
// }, [openDropdown]);
//   // Fetch offshore data
//   useEffect(() => {
//     async function loadData() {
//       try {
//         const res = await fetch("/api/offshore");
//         const json = await res.json();
//         setOffshores(json.data || []);
//       } catch (error) {
//         console.error("Failed to load offshores:", error);
//       }
//     }
//     loadData();
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Pricings", href: "/pricing" },
//   ];

//   const endLinks = [
//     { name: "Blog", href: "/blogs" },
//     { name: "Contact Us", href: "/contactus" },
//   ];

//   // Desktop Dropdown Component
//   // Desktop Dropdown Component
// // Desktop Dropdown Component
// const DesktopDropdown = ({
//   label,
//   items,
//   dropdownKey,
// }: {
//   label: string;
//   items: DropdownItem[];
//   dropdownKey: string;
// }) => {
//   const isOpen = openDropdown === dropdownKey;

//   return (
//     <div className="relative cursor-pointer">
//       <div
//         className={`flex items-center gap-1 whitespace-nowrap hover:text-[#f6d674] transition-colors duration-300 ${
//           isScrolled ? "text-white" : "text-gray-100"
//         }`}
//         onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
//       >
//         {label} <ChevronDown size={18} />
//       </div>

//       {isOpen && (
//         <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[200px] p-3 z-50">
//           {items.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block py-2 hover:text-[#1f3b63] transition-colors"
//               onClick={() => setOpenDropdown(null)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
//   // Mobile Dropdown Component
// // Mobile Dropdown Component
// const MobileDropdown = ({
//   label,
//   items,
//   dropdownKey,
// }: {
//   label: string;
//   items: DropdownItem[];
//   dropdownKey: string;
// }) => {
//   const isOpen = openDropdown === dropdownKey;

//   const handleItemClick = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setMobileMenuOpen(false);
//     setOpenDropdown(null);
//   };

//   return (
//     <div className="border-b border-gray-600">
//       <button
//         className="flex items-center justify-between w-full py-2 text-left text-white"
//         onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
//       >
//         <span>{label}</span>
//         <ChevronDown
//           size={18}
//           className={`transform transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>
//       {isOpen && (
//         <div className="ml-4 mt-2 space-y-2 pb-2">
//           {items.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block py-1 hover:text-[#f6d674] transition-colors text-gray-200"
//               onClick={handleItemClick}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

//   // Transform API data to dropdown items
//   const freezoneItems: DropdownItem[] = freezones.map((item) => ({
//     name: item.name,
//     href: `/freezone/${slugify(item.slug)}`,
//   }));

//   const mainlandItems: DropdownItem[] = mainlands.map((item) => ({
//     name: item.name,
//     href: `/mainland/${slugify(item.slug)}`,
//   }));

//   const offshoreItems: DropdownItem[] = offshores.map((item) => ({
//     name: item.name,
//     href: `/offshore/${slugify(item.slug)}`,
//   }));

//   return (
//     <nav
//       className={`w-full fixed top-0 left-0 right-0 z-50 text-white font-sans text-sm font-semibold transition-all duration-500 ${
//         isScrolled ? "bg-[#1f3b63] shadow-lg" : "bg-transparent"
//       }`}
//     >
//       {/* Trusted By Banner */}
//       <div className="bg-yellow text-black py-2 sm:py-3 font-sans text-center px-2 sm:px-8 md:px-14 lg:px-32 xl:px-52 text-xs sm:text-sm">
//         Trusted by thousands of business owners and entrepreneurs worldwide...!
//       </div>

//       <div
//         className={`max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-500 ${
//           isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
//         }`}
//       >
//         {/* Logo & Phone */}
//         <div className="flex items-center gap-3 sm:gap-4 md:gap-10">
//           <Link
// prefetch={true} href="/">
//             <Image
//               src="/global/logo-navbar.png"
//               alt="Global Biz"
//               width={120}
//               height={60}
//               className={`transition-all duration-500 ${
//                 isScrolled ? "w-20 sm:w-24 md:w-32" : "w-24 sm:w-28 md:w-36"
//               }`}
//             />
//           </Link>

//           {/* Desktop Call Section */}
//           <div className="hidden md:flex items-center gap-3">
//             <Image
//               src="/global/phone-ic.png"
//               width={30}
//               height={30}
//               alt="phone"
//             />
//             <div className="flex flex-col leading-tight">
//               <span
//                 className={`text-sm transition-all duration-500 ${
//                   isScrolled ? "text-white" : "text-gray-200"
//                 }`}
//               >
//                 Call Us
//               </span>
//               <a
//                 href="tel:+97150205638"
//                 className={`text-xl font-semibold transition-all duration-500 hover:text-[#f6d674] ${
//                   isScrolled ? "text-white" : "text-gray-100"
//                 }`}
//               >
//                 +971 50 2056381
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Call */}
//         <div className="md:hidden flex items-center gap-2">
//           <Image
//             src="/global/phone-ic.png"
//             width={18}
//             height={18}
//             alt="phone"
//           />
//           <a
//             href="tel:+971502056381"
//             className={`text-xs font-semibold transition-all duration-500 hover:text-[#f6d674] ${
//               isScrolled ? "text-white" : "text-gray-100"
//             }`}
//           >
//             +971 50 2056381
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 text-sm">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={`hover:text-[#f6d674] transition-colors duration-300 ${
//                 isScrolled ? "text-white" : "text-gray-100"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}

//           <DesktopDropdown
//             label="Freezone Company"
//             items={freezoneItems}
//             dropdownKey="freezone"
//           />

//           <DesktopDropdown
//             label="Mainland Company"
//             items={mainlandItems}
//             dropdownKey="mainland"
//           />

//           <DesktopDropdown
//             label="Offshore Company"
//             items={offshoreItems}
//             dropdownKey="offshore"
//           />

//           {endLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={`hover:text-[#f6d674] transition-colors duration-300 ${
//                 isScrolled ? "text-white" : "text-gray-100"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? (
//             <X
//               size={24}
//               className={isScrolled ? "text-white" : "text-gray-100"}
//             />
//           ) : (
//             <Menu
//               size={24}
//               className={isScrolled ? "text-white" : "text-gray-100"}
//             />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           className={`lg:hidden border-t px-6 py-4 transition-all duration-500 ${
//             isScrolled
//               ? "bg-[#1f3b63] border-gray-600"
//               : "bg-black/80 backdrop-blur-sm border-gray-500"
//           }`}
//         >
//           <div className="flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}

//             <MobileDropdown
//               label="Freezone Company"
//               items={freezoneItems}
//               dropdownKey="freezone-mobile"
//             />

//             <MobileDropdown
//               label="Mainland Company"
//               items={mainlandItems}
//               dropdownKey="mainland-mobile"
//             />

//             <MobileDropdown
//               label="Offshore Company"
//               items={offshoreItems}
//               dropdownKey="offshore-mobile"
//             />

//             {endLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Freezone {
  id: string;
  name: string;
  slug: string;
}

interface Mainland {
  id: string;
  name: string;
  slug: string;
}

interface Offshore {
  id: string;
  name: string;
  slug: string;
}

interface DropdownItem {
  name: string;
  id?:string;
  href: string;
}

const slugify = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

export default function Navbar() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [freezones, setFreezones] = useState<Freezone[]>([]);
  const [mainlands, setMainlands] = useState<Mainland[]>([]);
  const [offshores, setOffshores] = useState<Offshore[]>([]);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch freezones data
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/freezones");
        const json = await res.json();
        setFreezones(json.data || []);
      } catch (error) {
        console.error("Failed to load freezones:", error);
      }
    }
    loadData();
  }, []);

  // Fetch mainland data
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/mainland");
        const json = await res.json();
        setMainlands(json.data || []);
      } catch (error) {
        console.error("Failed to load mainlands:", error);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openDropdown && !target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // Fetch offshore data
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/offshore");
        const json = await res.json();
        setOffshores(json.data || []);
      } catch (error) {
        console.error("Failed to load offshores:", error);
      }
    }
    loadData();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pricings", href: "/pricing" },
  ];

  const endLinks = [
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contactus" },
  ];

  // Desktop Dropdown Component
  const DesktopDropdown = ({
    label,
    items,
    dropdownKey,
  }: {
    label: string;
    items: DropdownItem[];
    dropdownKey: string;
  }) => {
    const isOpen = openDropdown === dropdownKey;

    const handleItemClick = (href: string) => {
      setOpenDropdown(null);
      router.push(href);
    };

    return (
      <div className="relative dropdown-container">
        <div
          className={`flex items-center gap-1 whitespace-nowrap hover:text-[#f6d674] transition-colors duration-300 cursor-pointer ${
            isScrolled ? "text-white" : "text-gray-100"
          }`}
          onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
        >
          {label} <ChevronDown size={18} />
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[200px] p-3 z-50">
            {items.map((item) => (
              <div
                key={item.name}
                className="block py-2 hover:text-[#1f3b63] transition-colors cursor-pointer"
                onClick={() => handleItemClick(item.href)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mobile Dropdown Component
  const MobileDropdown = ({
    label,
    items,
    dropdownKey,
  }: {
    label: string;
    items: DropdownItem[];
    dropdownKey: string;
  }) => {
    const isOpen = openDropdown === dropdownKey;

    const handleItemClick = (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile item clicked:', href);
      setMobileMenuOpen(false);
      setOpenDropdown(null);
      setTimeout(() => {
        router.push(href);
      }, 100);
    };

    return (
      <div className="border-b border-gray-600">
        <button
          className="flex items-center justify-between w-full py-2 text-left text-white"
          onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
        >
          <span>{label}</span>
          <ChevronDown
            size={18}
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-2 pb-2">
            {items.map((item) => (
              <button
                key={item.name}
                className="block py-2 px-2 hover:text-[#f6d674] transition-colors text-gray-200 cursor-pointer w-full text-left active:bg-gray-700"
                onClick={(e) => handleItemClick(e, item.href)}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleItemClick(e as any, item.href);
                }}
              >
                {item.id}

              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Transform API data to dropdown items
  const freezoneItems: DropdownItem[] = freezones.map((item) => ({
    name: item.name,
    href: `/freezone/${item.id}`,
  }));

  const mainlandItems: DropdownItem[] = mainlands.map((item) => ({
    name: item.name,
    href: `/mainland/${slugify(item.slug)}`,
  }));

  const offshoreItems: DropdownItem[] = offshores.map((item) => ({
    name: item.name,
    href: `/offshore/${item.id}`,
  }));

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 text-white font-sans text-sm font-semibold transition-all duration-500 ${
        isScrolled ? "bg-[#1f3b63] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Trusted By Banner */}
      <div className="bg-yellow text-black py-2 sm:py-3 font-sans text-center px-2 sm:px-8 md:px-14 lg:px-32 xl:px-52 text-xs sm:text-sm">
        Trusted by thousands of business owners and entrepreneurs worldwide...!
      </div>

      <div
        className={`max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-500 ${
          isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
        }`}
      >
        {/* Logo & Phone */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-10">
          <Link
prefetch={true} href="/">
            <Image
              src="/global/logo-navbar.png"
              alt="Global Biz"
              width={120}
              height={60}
              className={`transition-all duration-500 ${
                isScrolled ? "w-20 sm:w-24 md:w-32" : "w-24 sm:w-28 md:w-36"
              }`}
            />
          </Link>

          {/* Desktop Call Section */}
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
              <a
                href="tel:+97150205638"
                className={`text-xl font-semibold transition-all duration-500 hover:text-[#f6d674] ${
                  isScrolled ? "text-white" : "text-gray-100"
                }`}
              >
                +971 50 2056381
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Call */}
        <div className="md:hidden flex items-center gap-2">
          <Image
            src="/global/phone-ic.png"
            width={18}
            height={18}
            alt="phone"
          />
          <a
            href="tel:+971502056381"
            className={`text-xs font-semibold transition-all duration-500 hover:text-[#f6d674] ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            +971 50 2056381
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
prefetch={true}
              key={link.name}
              href={link.href}
              className={`hover:text-[#f6d674] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <DesktopDropdown
            label="Freezone Company"
            items={freezoneItems}
            dropdownKey="freezone"
          />

          <DesktopDropdown
            label="Mainland Company"
            items={mainlandItems}
            dropdownKey="mainland"
          />

          <DesktopDropdown
            label="Offshore Company"
            items={offshoreItems}
            dropdownKey="offshore"
          />

          {endLinks.map((link) => (
            <Link
prefetch={true}
              key={link.name}
              href={link.href}
              className={`hover:text-[#f6d674] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? "text-white" : "text-gray-100"}
            />
          ) : (
            <Menu
              size={24}
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
            {navLinks.map((link) => (
              <Link
prefetch={true}
                key={link.name}
                href={link.href}
                className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <MobileDropdown
              label="Freezone Company"
              items={freezoneItems}
              dropdownKey="freezone-mobile"
            />

            <MobileDropdown
              label="Mainland Company"
              items={mainlandItems}
              dropdownKey="mainland-mobile"
            />

            <MobileDropdown
              label="Offshore Company"
              items={offshoreItems}
              dropdownKey="offshore-mobile"
            />

            {endLinks.map((link) => (
              <Link
prefetch={true}
                key={link.name}
                href={link.href}
                className="py-2 hover:text-[#f6d674] transition-colors border-b border-gray-600 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}