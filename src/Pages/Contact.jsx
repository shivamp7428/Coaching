import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl  text-teal-600">Contact Us</h1>
        <p className="text-gray-600 mt-3 font-light text-lg">
          We’re here to help! Reach out for queries, course info, or support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
         <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl  text-teal-700 mb-6">Send Message</h2>

          <form className="md:space-y-5">
            <div>
              <label className="block text-gray-700  mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border font-light px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700  mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border px-4 font-light py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className="w-full border font-light px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-light py-3 rounded-xl flex items-center justify-center gap-2 text-lg transition"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl  text-teal-700 mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-teal-600" />
              <a href="tel:+91 6232456010" className="text-gray-700 font-light text-lg">+91 6232456010</a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-teal-600" />
              <p className="text-gray-700 text-lg font-light cursor-pointer">SKTech62@gmail.com</p>
            </div> 

            <div className="flex items-start gap-4">
              <MapPin className="text-teal-600 mt-1" />
              <p className="text-gray-700 text-lg font-light leading-relaxed cursor-pointer">
                SK Ji Computer Coaching Classes And Institute,  
                Shookhy Tola, Kharam Seda,  
                Satna, Madhya Pradesh 485775
              </p>
            </div>
          </div>
          <div className="mt-8">
            <iframe
              title="map"
              className="w-full h-56 rounded-xl border border-gray-200"
              src="https://www.google.com/maps?q=7X8M%2BF4J%20Sk%20Ji%20Computer%20Coaching%20Classes%20And%20Institute%2C%20Shookhy%20Tola%2C%20Kharam%20Seda%2C%20Satna%2C%20Madhya%20Pradesh%20485775&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
