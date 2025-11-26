// "use client";

// import { useSearchParams } from "next/navigation";

// export default function ThankYouPage() {
//   const params = useSearchParams();

//   const name = params.get("name") ?? "N/A";
//   const email = params.get("email") ?? "N/A";
//   const phone = params.get("phone") ?? "N/A";
//   const service = params.get("service") ?? "N/A";
//   const message = params.get("message") ?? "N/A";

//   return (
//     <div className="bg-off-white min-h-screen flex flex-col font-display">
//         <div
//         className="relative h-60 bg-cover bg-center"
//         style={{ backgroundImage: "url('/global/breadcrumbs.png')" }}
//       >
//         <div className="absolute inset-0 opacity-60"></div>
//         <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
//           Thank You
//         </h1>
//       </div>
//       {/* Navbar */}
     

//       {/* Main */}
//       <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         {/* <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12"> */}
//           {/* Left Title + Shapes */}
//           {/* <div className="relative flex items-center justify-center p-8 lg:p-0">
//             <div className="absolute inset-0 z-0 overflow-hidden">
//               <div className="absolute -top-10 -left-10 w-48 h-48 bg-bold-yellow rounded-full opacity-80 mix-blend-multiply"></div>
//               <div className="absolute -bottom-16 right-0 w-64 h-64 bg-deep-blue/80 rounded-3xl rotate-45"></div>
//               <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/20 rounded-lg -rotate-12"></div>
//             </div>
//             <h1 className="relative z-10 text-deep-blue text-7xl lg:text-8xl font-black">Thank You!</h1>
//           </div> */}

//           {/* Right Card */}
//           <div className="bg-white rounded-xl shadow-lg border p-8 md:p-10">
//             <h3 className="text-dark-gray text-2xl font-bold">Your inquiry has been received.</h3>
//             <p className="text-dark-gray/80 mt-4">
//               We appreciate you contacting us. We’ll respond shortly & confirmation has been sent to your email.
//             </p>

//             {/* Details */}
//             <div className="mt-8">
//               <h3 className="text-deep-blue text-lg font-bold pb-2">Your Submission Details</h3>
//               <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t">
//                 {[
//                   { label: "Name", value: name },
//                   { label: "Email Address", value: email },
//                   { label: "Phone Number", value: phone },
//                   { label: "Service", value: service },
//                   { label: "Message", value: message },
//                 ].map((i, idx) => (
//                   <div key={idx} className="col-span-2 grid grid-cols-subgrid border-t py-4">
//                     <p className="text-dark-gray/70 text-sm font-medium">{i.label}</p>
//                     <p className="text-dark-gray text-sm text-right">{i.value}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Next section */}
//             <div className="mt-8 bg-blue-50 border rounded-lg p-5">
//               <h4 className="text-deep-blue font-bold">What Happens Next?</h4>
//               <p className="text-dark-gray/90 text-sm mt-1">
//                 We will get back to you within <b>24-48 business hours</b>.
//                 If urgent, call us at <b>(555) 987-6543</b>.
//               </p>
//                             <p className="text-dark-gray/90 text-sm mt-1">

//               If this time frame isn’t comfortable for you, kindly reply with a suitable time for us to connect. Please also share the phone number or email you prefer us to reach you through. Additionally, if there is anything you’d like us to prepare apart from the message you shared, feel free to attach that as well.
//                             </p>

//             </div>
//           </div>
//         {/* </div> */}
//       </main>

//       {/* Footer */}
     
//     </div>
//   );
// }


"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThankYouContent() {
  const params = useSearchParams();

  const name = params.get("name") ?? "N/A";
  const email = params.get("email") ?? "N/A";
  const phone = params.get("phone") ?? "N/A";
  const service = params.get("service") ?? "N/A";
  const message = params.get("message") ?? "N/A";

  return (
    <div className="bg-off-white min-h-screen flex flex-col font-display">
      <div
        className="relative h-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/global/breadcrumbs.png')" }}
      >
        <div className="absolute inset-0 opacity-60"></div>
        <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
          Thank You
        </h1>
      </div>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border p-8 md:p-10 w-full max-w-2xl">
          <h3 className="text-dark-gray text-2xl font-bold">Your inquiry has been received.</h3>
          <p className="text-dark-gray/80 mt-4">
            We appreciate you contacting us. We&apos;ll respond shortly & confirmation has been sent to your email.
          </p>

          <div className="mt-8">
            <h3 className="text-deep-blue text-lg font-bold pb-2">Your Submission Details</h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t">
              {[
                { label: "Name", value: name },
                { label: "Email Address", value: email },
                { label: "Phone Number", value: phone },
                { label: "Service", value: service },
                { label: "Message", value: message },
              ].map((i, idx) => (
                <div key={idx} className="col-span-2 grid grid-cols-subgrid border-t py-4">
                  <p className="text-dark-gray/70 text-sm font-medium">{i.label}</p>
                  <p className="text-dark-gray text-sm text-right">{i.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border rounded-lg p-5">
            <h4 className="text-deep-blue font-bold">What Happens Next?</h4>
            <p className="text-dark-gray/90 text-sm mt-1">
              We will get back to you within <b>24-48 business hours</b>.
              If urgent, call us at <b>(555) 987-6543</b>.
            </p>
            <p className="text-dark-gray/90 text-sm mt-1">
              If this time frame isn&apos;t comfortable for you, kindly reply with a suitable time for us to connect. Please also share the phone number or email you prefer us to reach you through. Additionally, if there is anything you&apos;d like us to prepare apart from the message you shared, feel free to attach that as well.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-dark-gray/60">
        © 2024 Company Name. All Rights Reserved.
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="bg-off-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-deep-blue mx-auto"></div>
          <p className="mt-4 text-dark-gray">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}