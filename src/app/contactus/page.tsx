"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      const params = new URLSearchParams(form).toString();
      router.push(`/thank-you?${params}`);
    } else {
      alert("Error sending email");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20">
      {/* Banner */}
      <div
        className="relative h-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/global/breadcrumbs.png')" }}
      >
        <div className="absolute inset-0 opacity-60"></div>
        <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
          Contact Us
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full h-full rounded overflow-hidden hidden lg:block">
          <Image
            src="/global/Contactform.png"
            width={900}
            height={600}
            alt="Contact Banner"
            className="rounded"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <h2 className="text-4xl font-oswald font-bold mb-6 uppercase text-[#002F6C]">
            GET IN TOUCH WITH US
          </h2>

          <p className="text-gray-600 mb-6 font-raleway">
            Interested in working with us? Fill the form below, and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded"
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded"
                onChange={handleChange}
                type="email"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="phone"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded"
                onChange={handleChange}
              />
              <input
                name="service"
                placeholder="Service"
                className="p-3 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="p-3 border border-gray-300 rounded w-full h-28"
              onChange={handleChange}
            />

            <button className="bg-[#002F6C] text-white font-raleway w-full py-3 rounded hover:bg-blue-900 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


// "use client";

// interface ThankYouProps {
//   name?: string;
//   email?: string;
//   phone?: string;
// }

// export default function ThankYouPage({
//   name = "John Doe",
//   email = "john.doe@example.com",
//   phone = "(555) 123-4567",
// }: ThankYouProps) {
//   return (
//     <div className="bg-off-white min-h-screen flex flex-col font-display">
//       {/* Navbar */}
//       <header className="flex items-center justify-between border-b border-[#e7ebf3] px-6 sm:px-10 lg:px-20 py-4 bg-white">
//         <div className="flex items-center gap-4 text-deep-blue">
//           {/* Placeholder Logo */}
//           <div className="size-6 text-deep-blue">
//             <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 ..."
//                 fill="currentColor"
//               />
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold">Company Logo</h2>
//         </div>
//         <a href="/" className="text-deep-blue text-sm font-medium hover:text-primary transition-colors">
//           Back to Home
//         </a>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left abstract shapes + title */}
//             <div className="relative flex items-center justify-center p-8 lg:p-0">
//               <div className="absolute inset-0 z-0 overflow-hidden">
//                 <div className="absolute -top-10 -left-10 w-48 h-48 bg-bold-yellow rounded-full opacity-80 mix-blend-multiply" />
//                 <div className="absolute -bottom-16 right-0 w-64 h-64 bg-deep-blue/80 rounded-3xl rotate-45" />
//                 <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/20 rounded-lg -rotate-12" />
//               </div>
//               <h1 className="relative z-10 text-deep-blue text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
//                 Thank You!
//               </h1>
//             </div>

//             {/* Right card */}
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-8 md:p-10">
//               <div className="flex items-center gap-3">
//                 <div className="size-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
//                   ✓
//                 </div>
//                 <h3 className="text-dark-gray text-2xl font-bold tracking-tight">
//                   Your inquiry has been received.
//                 </h3>
//               </div>

//               <p className="text-dark-gray/80 mt-4">
//                 We appreciate you contacting us. One of our colleagues will get back to you shortly.
//                 We’ve sent a confirmation to your email address.
//               </p>

//               {/* Details section */}
//               <div className="mt-8">
//                 <h3 className="text-deep-blue text-lg font-bold pb-2">Your Submission Details</h3>

//                 <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-gray-200">
//                   {[
//                     { label: "Name", value: name },
//                     { label: "Email Address", value: email },
//                     { label: "Phone Number", value: phone },
//                   ].map((item, i) => (
//                     <div key={i} className="col-span-2 grid grid-cols-subgrid border-t border-gray-200 py-4 first:border-t-0">
//                       <p className="text-dark-gray/70 text-sm font-medium">{item.label}</p>
//                       <p className="text-dark-gray text-sm text-right font-normal">{item.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Next steps box */}
//               <div className="mt-8 bg-blue-50 border border-blue-200/50 rounded-lg p-5">
//                 <h4 className="text-deep-blue font-bold text-base">What Happens Next?</h4>
//                 <p className="text-dark-gray/90 text-sm mt-1 leading-relaxed">
//                   We will review your inquiry and get back to you within{" "}
//                   <span className="font-semibold text-deep-blue">24-48 business hours</span>.
//                   If your matter is urgent, please call us at (555) 987-6543.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-[#e7ebf3] py-6 px-6 sm:px-10 lg:px-20">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-dark-gray/60 text-sm">© 2024 Company Name. All Rights Reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="text-dark-gray/80 hover:text-primary text-sm transition-colors">Privacy Policy</a>
//             <a href="#" className="text-dark-gray/80 hover:text-primary text-sm transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
