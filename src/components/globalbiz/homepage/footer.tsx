


// import { Mail, MapPin, PhoneCallIcon, Facebook, Instagram, Linkedin } from "lucide-react";
// import React from "react";

// const FooterSection: React.FC = () => {
//     const offices = [
//         {
//             id: "uae",
//             title: "UAE Office",
//             address: [
//                 "IFZA Business Park",
//                 "Premises Number DDP 73033 - 001",
//                 "Makani Number A1 - 3641379065"
//             ],
//             phone: "+971 50 2056381",
//             email: "contact@globalbizsetup.com"
//         },
//         {
//             id: "noida",
//             title: "Noida Office",
//             address: [
//                 "H-213, Sector 63 Rd, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh, 201309"
//             ],
//             phone: "+91-7840079095",
//             email: "contact@globalbizsetup.com"
//         },
//         {
//             id: "uae-other",
//             title: "UAE Other Contact Address",
//             address: [
//                 "G-08, Dunes Apartments",
//                 "Dubai Silicon Oasis",
//                 "Dubai, UAE"
//             ],
//             phone: "+971 50 2056381",
//             email: "contact@globalbizsetup.com"
//         }
//     ];

//     const usefulLinks = [
//         { name: "Home", url: "#" },
//         { name: "Contact Us", url: "#" },
//         { name: "Blog", url: "#" },
//         { name: "About", url: "#" },
//         { name: "Privacy Policy", url: "#" }
//     ];

//     const socialLinks = [
//         { icon: Facebook, url: "#", name: "Facebook" },
//         { icon: Instagram, url: "#", name: "Instagram" },
//         { icon: Linkedin, url: "#", name: "LinkedIn" }
//     ];

//     return (
//         <footer className="bg-white font-oswald text-gray-800">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//                     {/* Left Column: UAE Office & Noida Office */}
//                     <div className="space-y-6">
//                         {/* UAE Office */}
//                         <div>
//                             <h3 className="text-xl font-oswald text-[#0b2b3d]">{offices[0].title}</h3>
//                             <div className="mt-4 space-y-3 text-sm">
//                                 <div className="flex items-start gap-3">
//                                     <MapPin size={24} className="text-[#0b2b3d] flex-shrink-0" />
//                                     <div>
//                                         <div className="leading-relaxed">
//                                             {offices[0].address.map((line, idx) => (
//                                                 <React.Fragment key={idx}>
//                                                     {line}
//                                                     {idx < offices[0].address.length - 1 && <br />}
//                                                 </React.Fragment>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <PhoneCallIcon className="text-[#0b2b3d]" />
//                                     <div>{offices[0].phone}</div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <Mail size={24} className="text-[#0b2b3d]" />
//                                     <div>{offices[0].email}</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Noida Office */}
//                         <div className="pt-6 border-t border-gray-100">
//                             <h3 className="text-xl  text-[#0b2b3d]">{offices[1].title}</h3>
//                             <div className="mt-4 space-y-3 text-sm">
//                                 <div className="flex items-start gap-3">
//                                     <MapPin className="text-[#0b2b3d] flex-shrink-0" />
//                                     <div>
//                                         {offices[1].address.map((line, idx) => (
//                                             <React.Fragment key={idx}>
//                                                 {line}
//                                                 {idx < offices[1].address.length - 1 && <br />}
//                                             </React.Fragment>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <PhoneCallIcon className="text-[#0b2b3d]" />
//                                     <div>{offices[1].phone}</div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <Mail size={24} className="text-[#0b2b3d]" />
//                                     <div>{offices[1].email}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Middle Column: UAE Other Contact Address */}
//                     <div className="border-l border-r  border-gray-100 px-6">
//                         <h3 className="text-xl font-semibold text-[#0b2b3d]">{offices[2].title}</h3>
//                         <div className="mt-4 space-y-3 text-sm">
//                             <div className="flex items-start gap-3">
//                                 <MapPin size={24} className="text-[#0b2b3d] flex-shrink-0" />
//                                 <div>
//                                     {offices[2].address.map((line, idx) => (
//                                         <React.Fragment key={idx}>
//                                             {line}
//                                             {idx < offices[2].address.length - 1 && <br />}
//                                         </React.Fragment>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <PhoneCallIcon className="text-[#0b2b3d]" />
//                                 <div>{offices[2].phone}</div>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <Mail size={24} className="text-[#0b2b3d]" />
//                                 <div>{offices[2].email}</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column: Call to Action + Useful Links */}
//                     <div className="flex flex-col justify-between">
//                         <div>
//                             <h2 className="text-2xl font-bold text-[#0b2b3d]">READY TO GET STARTED?</h2>
//                             <p className="mt-2 text-sm text-[#f1a200]">Would like to connect with an expert?</p>

//                             <button className="mt-6 px-6 py-3 bg-[#163a52] text-white rounded-md shadow-md font-medium hover:bg-[#0f2838] transition-colors">
//                                 Contact Us
//                             </button>

//                             <div className="mt-8">
//                                 <h4 className=" text-[#163a52] mb-3">Useful Links</h4>
//                                 <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
//                                     {usefulLinks.map((link, idx) => (
//                                         <a 
//                                             key={idx} 
//                                             href={link.url}
//                                             className="hover:text-[#163a52] transition-colors"
//                                         >
//                                             {link.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
//                     <div className="text-sm text-[#0b2b3d]">© GenNext Global Biz Corporate Services FZCO</div>
//                     <div className="flex items-center gap-3">
//                         <span className="text-sm text-[#0b2b3d]">Follow Us</span>
//                         <div className="flex items-center gap-2">
//                             {socialLinks.map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a 
//                                         key={idx}
//                                         href={social.url}
//                                         className="w-8 h-8 rounded-full border-2 border-[#0b2b3d] flex items-center justify-center hover:bg-[#0b2b3d] hover:text-white transition-colors text-[#0b2b3d]"
//                                         aria-label={social.name}
//                                     >
//                                         <Icon className="w-4 h-4" />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default FooterSection;
'use client';

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Office {
  id: string;
  officeName: string;
  officeAddress: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  data: Office[];
}

const FooterSection: React.FC = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch addresses from API
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/address');
      const result: ApiResponse = await response.json();
      
      if (result.success) {
        setOffices(result.data || []);
      } else {
        setError('Failed to fetch addresses');
      }
    } catch (err) {
      setError('Failed to fetch addresses');
      console.error('Error fetching addresses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);
 

//   const usefulLinks = [
//     { name: "Home", url: "#" },
//     { name: "Contact Us", url: "#" },
//     { name: "Blog", url: "#" },
//     { name: "About", url: "#" },
//     { name: "Privacy Policy", url: "#" }
//   ];

  const socialLinks = [
    { icon: Facebook, url: "#", name: "Facebook" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Linkedin, url: "#", name: "LinkedIn" }
  ];


  // Show loading state
  if (loading) {
    return (
      <footer className="bg-white font-oswald text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[1, 2, 3].map((col) => (
              <div key={col} className="space-y-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  // Show error state
  if (error && offices.length === 0) {
    return (
      <footer className="bg-white font-oswald text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-red-600">
            <p>Failed to load addresses. Please try again later.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
 <footer className="bg-white font-oswald text-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Left Column - Addresses in dynamic 2x2 grid */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {(() => {
            // Create pairs of addresses for 2-column layout
            const addressPairs: Office[][] = [];
            for (let i = 0; i < offices.length; i += 2) {
              addressPairs.push(offices.slice(i, i + 2));
            }

            // Flatten the pairs to render in grid
            const flattenedAddresses: Office[] = [];
            addressPairs.forEach(pair => {
              flattenedAddresses.push(...pair);
            });

            return flattenedAddresses.map((office) => (
              <div key={office.id} className="space-y-6">
                <h3 className="text-xl text-blue">{office.officeName}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-600 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-700 leading-relaxed">
                      {office.officeAddress.split('\n').map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-black flex-shrink-0" />
                    <span className="text-gray-700">{office.phone.trim()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-black flex-shrink-0" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>

      {/* Right Column - CTA Section */}
      <div className="space-y-4">
        {/* READY TO GET STARTED Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-blue">READY TO GET STARTED?</h2>
          <p className="text-base text-yellow font-oswald">Would like to connect with an expert?</p>
        </div>

     

        {/* Contact Us Button */}
        <div>
          <button className="px-4 bg-blue font-raleway text-white py-3 font-medium hover:bg-gray-800 transition-colors">
            <Link href="/contactus">Contact Us</Link>
          </button>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg text-blue mb-4">Useful Links</h4>
          <div className="grid grid-cols-2 gap-2 text-base">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-4 border-t border-gray flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-xl text-blue font-oswald">
        © GenNext Global Biz Corporate Services FZCO
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-blue">Follow Us</span>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url}
                className="w-8 h-8 rounded-full border-2 border-blue flex items-center justify-center hover:bg-bluehover:text-white transition-colors text-blue"
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default FooterSection;