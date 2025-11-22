"use client";

import { useState } from "react";

export default function ContactCallback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Submitted!");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
        <div
                className="relative h-60 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/global/breadcrumbs.png')",
                }}
            >
                <div className="absolute inset-0 opacity-60"></div>

                {/* Bottom-center aligned heading */}
                <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald
        ">
                    Contact Us
                </h1>
            </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">

  {/* LEFT SIDE IMAGE */}
  <div className="w-full h-full border rounded overflow-hidden">
  

    <div className="hidden md:block mt-4">
      <img
        src="/global/contactform.png"
        alt="Hero Illustration"
        className="w-[460px] h-auto object-contain drop-shadow-2xl"
      />
    </div>
  </div>

  {/* RIGHT SIDE FORM */}
  <div>
    <h2 className="text-4xl font-oswald font-bold text-blue mb-6 uppercase">
    GET IN TOUCH WITH US
    </h2>

    <p className="text-gray-600 font-raleway mb-6">
      Interested in working on a project with us? Fill the form below, and we'll get back to you at the earliest.
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="+91"
          name="phone"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Service"
          name="service"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
      </div>
      <input
          type="texteditor"
          placeholder="Message"
          name="Message"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

      <button className="bg-blue text-white font-raleway w-full py-3 rounded">
        Submit
      </button>
    </form>
  </div>

</div>

    </div>
  );
}
