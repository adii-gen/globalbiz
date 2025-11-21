"use client";

import { useState } from "react";

export default function ContactCallback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
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
    <div className="w-full bg-[#fafafa] py-10 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ==== LEFT SIDE FORM ==== */}
        <div>
          <h2 className="text-4xl font-oswald text-blue mb-6 uppercase">
            Request a Call Back
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

          

            <button className="bg-yellow text-black font-raleway w-full py-3 rounded">
              Submit
            </button>
          </form>
        </div>

        {/* ==== RIGHT SIDE MAP ==== */}
        <div className="w-full h-full border rounded overflow-hidden">
            <span className="font-oswald text-blue">Location Name: G-08, Dunes Apartments Dubai Silicon Oasis</span>
           <iframe
  width="100%"
  height="450"
  style={{border:0}}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.262599330646!2d55.3754807!3d25.1096715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1504b446cd2d%3A0x87e52c1812b6c3b1!2s25%C2%B006'34.8%22N%2055%C2%B022'41.0%22E!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae">
</iframe>

        </div>

      </div>
    </div>
  );
}
