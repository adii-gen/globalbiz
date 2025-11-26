"use client";

import { useState } from "react";
import Swal from "sweetalert2";
export default function ContactCallback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message:"",
  });
const [loading, setLoading] = useState(false);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Inquiry Sent",
        text: "We have received your inquiry and will contact you soon.",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while sending your inquiry.",
      });
    }
  } catch (err) {
    setLoading(false);
    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Unable to send inquiry right now. Try again later.",
    });
  }
};

  return (
    <div className="w-full bg-[#fafafa] py-10 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ==== LEFT SIDE FORM ==== */}
        <div>
          <h2 className="text-3xl font-oswald text-blue font-semibold mb-6 uppercase">
            Request a Call Back
          </h2>

          <p className="text-gray-600 font-raleway mb-6">
            Interested in working on a project with us? Fill the form below, and we &apos; ll get back to you at the earliest.
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

          
  <textarea
              name="message"
              placeholder="Message"
              className="p-3 border border-gray-300 rounded w-full h-28"
              onChange={handleChange}
            />
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
