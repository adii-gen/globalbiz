// import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
// import React from "react";

// // Next.js + Tailwind + TypeScript component
// // Screenshot (for reference) included as image: /mnt/data/044f4e6f-327e-4e19-90db-0f177e6cc141.png

// const FooterReplica: React.FC = () => {
//     return (
//         <footer className="bg-white font-raleway text-gray-800">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Left Column: Offices */}
//                     <div className="space-y-6">
//                         <div>
//                             <h3 className="text-xl font-semibold text-[#0b2b3d]">UAE Office</h3>
//                             <div className="mt-4 space-y-3 text-sm">
//                                 <div className="flex items-start gap-3">
//                                     <MapPin size={24} />

//                                     <div>
//                                         <div className="leading-relaxed">
//                                             IFZA Business Park<br />
//                                             Premises Number DDP 73033 - 001<br />
//                                             Makani Number A1 - 3641379065
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <PhoneCallIcon />

//                                     <div>+971 50 2056381</div>
//                                 </div>

//                                 <div className="flex items-center gap-3">

//                                     <Mail size={24} />

//                                     <div>contact@globalbizsetup.com</div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="pt-6 border-t border-gray-100">
//                             <h3 className="text-xl font-semibold text-[#0b2b3d]">Noida Office</h3>
//                             <div className="mt-4 space-y-3 text-sm">
//                                 <div className="flex items-start gap-3">
//                                     <MapPin size={40} />

//                                     <div>
//                                         H-213, Sector 63 Rd, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh, 201309
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <PhoneCallIcon />
//                                     <div>+91-7840079095</div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <Mail size={24} />

//                                     <div>contact@globalbizsetup.com</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Middle Column: UAE Other Contact Address (keeps similar vertical spacing) */}
//                     <div className="border-l border-r border-gray-100 px-6">
//                         <h3 className="text-xl font-semibold text-[#0b2b3d]">UAE Other Contact Address</h3>
//                         <div className="mt-4 space-y-3 text-sm">
//                             <div className="flex items-start gap-3">
//                                 <MapPin size={24} />
//                                 <div>
//                                     G-08, Dunes Apartments<br />
//                                     Dubai Silicon Oasis<br />
//                                     Dubai, UAE
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <PhoneCallIcon />

//                                 <div>+971 50 2056381</div>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <Mail size={24} />

//                                 <div>contact@globalbizsetup.com</div>
//                             </div>
//                         </div>

//                         {/* Decorative vertical spacing to match the original layout */}
//                         <div className="mt-8">
//                             <img src="/mnt/data/044f4e6f-327e-4e19-90db-0f177e6cc141.png" alt="reference-screenshot" className="hidden" />
//                         </div>
//                     </div>

//                     {/* Right Column: Call to Action + Useful Links */}
//                     <div className="flex flex-col justify-between">
//                         <div>
//                             <h2 className="text-2xl font-bold text-[#0b2b3d]">READY TO GET STARTED?</h2>
//                             <p className="mt-2 text-sm text-[#f1a200]">Would like to connect with an expert?</p>

//                             <button className="mt-6 px-6 py-3 bg-[#163a52] text-white rounded-md shadow-md font-medium">Contact Us</button>

//                             <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
//                                 <div>
//                                     <h4 className="font-bold text-[#163a52] mb-3">Useful Links</h4>
//                                     <ul className="space-y-2">
//                                         <li>Home</li>
//                                         <li>Blog</li>
//                                         <li>Privacy Policy</li>
//                                     </ul>
//                                 </div>

//                                 <div>
//                                     <h4 className="font-semibold text-[#163a52] mb-3">&nbsp;</h4>
//                                     <ul className="space-y-2">
//                                         <li>Contact Us</li>
//                                         <li>About</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
//                             <div className="text-sm">© GenNext Global Biz Corporate Services FZCO</div>
//                             <div className="flex items-center gap-3">
//                                 <button className="bg-[#1b63b8] text-white text-xs px-3 py-1 rounded">Follow Us</button>
//                                 <div className="flex items-center gap-2">
//                                     <span className="w-7 h-7 rounded-full border flex items-center justify-center">f</span>
//                                     <span className="w-7 h-7 rounded-full border flex items-center justify-center">◎</span>
//                                     <span className="w-7 h-7 rounded-full border flex items-center justify-center">in</span>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default FooterReplica;



import { Mail, MapPin, PhoneCallIcon, Facebook, Instagram, Linkedin } from "lucide-react";
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
            email: "contact@globalbizsetup.com"
        },
        {
            id: "noida",
            title: "Noida Office",
            address: [
                "H-213, Sector 63 Rd, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh, 201309"
            ],
            phone: "+91-7840079095",
            email: "contact@globalbizsetup.com"
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
            email: "contact@globalbizsetup.com"
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

    return (
        <footer className="bg-white font-raleway text-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {/* Left Column: UAE Office & Noida Office */}
                    <div className="space-y-6">
                        {/* UAE Office */}
                        <div>
                            <h3 className="text-xl font-oswald text-[#0b2b3d]">{offices[0].title}</h3>
                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin size={24} className="text-[#0b2b3d] flex-shrink-0" />
                                    <div>
                                        <div className="leading-relaxed">
                                            {offices[0].address.map((line, idx) => (
                                                <React.Fragment key={idx}>
                                                    {line}
                                                    {idx < offices[0].address.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <PhoneCallIcon className="text-[#0b2b3d]" />
                                    <div>{offices[0].phone}</div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail size={24} className="text-[#0b2b3d]" />
                                    <div>{offices[0].email}</div>
                                </div>
                            </div>
                        </div>

                        {/* Noida Office */}
                        <div className="pt-6 border-t border-gray-100">
                            <h3 className="text-xl font-semibold text-[#0b2b3d]">{offices[1].title}</h3>
                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin size={40} className="text-[#0b2b3d] flex-shrink-0" />
                                    <div>
                                        {offices[1].address.map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                {idx < offices[1].address.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <PhoneCallIcon className="text-[#0b2b3d]" />
                                    <div>{offices[1].phone}</div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail size={24} className="text-[#0b2b3d]" />
                                    <div>{offices[1].email}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: UAE Other Contact Address */}
                    <div className="border-l border-r border-gray-100 px-6">
                        <h3 className="text-xl font-semibold text-[#0b2b3d]">{offices[2].title}</h3>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={24} className="text-[#0b2b3d] flex-shrink-0" />
                                <div>
                                    {offices[2].address.map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            {idx < offices[2].address.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <PhoneCallIcon className="text-[#0b2b3d]" />
                                <div>{offices[2].phone}</div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={24} className="text-[#0b2b3d]" />
                                <div>{offices[2].email}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Call to Action + Useful Links */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-[#0b2b3d]">READY TO GET STARTED?</h2>
                            <p className="mt-2 text-sm text-[#f1a200]">Would like to connect with an expert?</p>

                            <button className="mt-6 px-6 py-3 bg-[#163a52] text-white rounded-md shadow-md font-medium hover:bg-[#0f2838] transition-colors">
                                Contact Us
                            </button>

                            <div className="mt-8">
                                <h4 className="font-bold text-[#163a52] mb-3">Useful Links</h4>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    {usefulLinks.map((link, idx) => (
                                        <a 
                                            key={idx} 
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
                    <div className="text-sm text-[#0b2b3d]">© GenNext Global Biz Corporate Services FZCO</div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-[#0b2b3d]">Follow Us</span>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={idx}
                                        href={social.url}
                                        className="w-8 h-8 rounded-full border-2 border-[#0b2b3d] flex items-center justify-center hover:bg-[#0b2b3d] hover:text-white transition-colors text-[#0b2b3d]"
                                        aria-label={social.name}
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