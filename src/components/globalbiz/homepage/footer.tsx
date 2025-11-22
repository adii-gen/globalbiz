


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

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const FooterSection: React.FC = () => {
    const offices = [
        {
            id: "uae",
            title: "UAE Office",
            address: [
                "IFZA Business Park",
                "Premises Number DDP 73033 - 001",
                "Makani Number A1 - 3641379065"
            ],
            phone: "+971 50 2056381",
            email: "contact@globalbizsetup.com",
            column: "left"
        },
        {
            id: "noida",
            title: "Noida Office",
            address: [
                "H-213, Sector 63 Rd, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh, 201309"
            ],
            phone: "+91-7840079095",
            email: "contact@globalbizsetup.com",
            column: "left"
        },
        {
            id: "uae-other",
            title: "UAE Other Contact Address",
            address: [
                "G-08, Dunes Apartments",
                "Dubai Silicon Oasis",
                "Dubai, UAE"
            ],
            phone: "+971 50 2056381",
            email: "contact@globalbizsetup.com",
            column: "middle"
        }
    ];

    const usefulLinks = [
        { name: "Home", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "Blog", url: "#" },
        { name: "About", url: "#" },
        { name: "Privacy Policy", url: "#" }
    ];

    const socialLinks = [
        { icon: Facebook, url: "#", name: "Facebook" },
        { icon: Instagram, url: "#", name: "Instagram" },
        { icon: Linkedin, url: "#", name: "LinkedIn" }
    ];

    // Reusable Office Card Component
    const OfficeCard = ({ office, hasBorder = false }: { office: typeof offices[0], hasBorder?: boolean }) => (
        <div className={hasBorder ? "pt-6 border-t border-gray-100" : ""}>
            <h3 className="text-xl font-semibold md:font-semibold font-oswald text-[#0b2b3d]">{office.title}</h3>
            <div className="mt-4 space-y-3 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                    <MapPin size={24} className="text-[#0b2b3d] flex-shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                        {office.address.map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                {idx < office.address.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#0b2b3d] flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#163a52] transition-colors">
                        {office.phone}
                    </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#0b2b3d] flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#163a52] transition-colors">
                        {office.email}
                    </a>
                </div>
            </div>
        </div>
    );

    // Filter offices by column
    const leftColumnOffices = offices.filter(office => office.column === "left");
    const middleColumnOffices = offices.filter(office => office.column === "middle");

    return (
        <footer className="bg-white font-oswald text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {/* Left Column: UAE Office & Noida Office */}
                    <div className="space-y-6">
                        {leftColumnOffices.map((office, idx) => (
                            <OfficeCard 
                                key={office.id} 
                                office={office} 
                                hasBorder={idx > 0}
                            />
                        ))}
                    </div>

                    {/* Middle Column: UAE Other Contact Address */}
                    <div className="md:border-l md:border-r border-gray-100 md:px-6">
                        {middleColumnOffices.map((office) => (
                            <OfficeCard key={office.id} office={office} />
                        ))}
                    </div>

                    {/* Right Column: Call to Action + Useful Links */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-[#0b2b3d]">READY TO GET STARTED?</h2>
                            <p className="mt-2 text-sm text-[#f1a200]">Would like to connect with an expert?</p>

                            <button 
                                className="mt-6 px-6 py-3 bg-[#163a52] text-white rounded-md shadow-md font-medium hover:bg-[#0f2838] transition-colors"
                                aria-label="Contact us"
                            >
                                Contact Us
                            </button>

                            <div className="mt-8">
                                <h4 className="text-[#163a52] mb-3 font-semibold">Useful Links</h4>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    {usefulLinks.map((link) => (
                                        <a 
                                            key={link.name} 
                                            href={link.url}
                                            className="hover:text-[#163a52] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-[#0b2b3d]">
                        © GenNext Global Biz Corporate Services FZCO
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-[#0b2b3d]">Follow Us</span>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={social.name}
                                        href={social.url}
                                        className="w-8 h-8 rounded-full border-2 border-[#0b2b3d] flex items-center justify-center hover:bg-[#0b2b3d] hover:text-white transition-colors text-[#0b2b3d]"
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