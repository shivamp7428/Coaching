import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Sateesh Sir",
    subject: "CEO & Founder",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1758825812/sateesh2_ebo6if.jpg",
  },
  {
    id: 2,
    name: "Rahul Sir",
    subject: "Diploma Course",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1712345678/rahul_profile.jpg",
  },
  {
    id: 3,
    name: "Pooja Ma’am",
    subject: "MS Office, Tally & Accounting Software",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1712345690/pooja_profile.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % instructors.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + instructors.length) % instructors.length);
  };
  return (
    <div className="w-full font-sans overflow-hidden bg-gray-100 text-white">

      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">

        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526378722484-cc5c345348da')] bg-cover bg-center"
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="absolute w-40 h-40 bg-teal-500/20 rounded-full blur-2xl"
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <motion.div
          className="absolute bottom-10 right-20 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />

        <motion.div
          className="relative z-10 text-left px-8 max-w-7xl w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl font-bold tracking-widest text-teal-400">
            ABOUT US
          </h1>

          <h2 className="md:text-7xl text-4xl font-bold tracking-tight mt-2 text-white">
             <span className=" font-bold tracking-tight text-gray-700">
              SK<span className="font-light text-slate-500">Tech</span>
            </span> Systems
          </h2>

          <p className="mt-4 md:text-lg text-sm text-gray-300 font-light max-w-xl">
            A digital-first coaching institute dedicated to empowering students 
            with real-world skills, modern tools, and technology-driven learning.
          </p>

          <button className="mt-8 px-6 py-3 bg-teal-500 text-black font-light rounded-lg hover:bg-teal-400 transition duration-300">
            <a href="/blog">Explore Blog</a>
          </button>
        </motion.div>
      </section>

      <div className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 bg-gray-900 shadow-2xl">

          <motion.div
            className="flex flex-col md:flex-row gap-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.div
              className="flex-1 md:pr-10 md:border-r md:border-teal-500/50"
              variants={item}
            >
              <h2 className="text-4xl  mb-4 text-teal-400">
                Our Story!
              </h2>

              <p className="text-gray-300 md:text-lg text-sm leading-relaxed font-light mb-6">
               SKTech Systems began with a simple vision to make digital education accessible 
               to every learner, regardless of their background. What started as a small idea 
               slowly transformed into a mission to guide students toward technology and prepare
                them for the future that is built on skills, not just degrees. From day one, we 
                believed that every student deserves the opportunity to understand computers, coding,
                 and modern digital tools in a clear, practical, and confidence-building way. 

              </p>
            </motion.div>

            <div className="flex flex-1 flex-col sm:flex-row gap-10">

              <motion.div
                className="flex-1 bg-gray-800 p-6 rounded-xl border border-teal-500/50 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform"
                variants={item}
              >
                <h3 className="text-xl  mb-3 text-teal-300">
                  Our Mission
                </h3>

                <ul className="space-y-2 md:text-lg text-sm text-gray-300  list-disc pl-5 font-light">
                  <li>Bring students closer to the digital world</li>
                  <li>Provide "free education" for underprivileged learners</li>
                  <li>Build strong foundations through hands-on training</li>
                </ul>
              </motion.div>

              <motion.div
                className="flex-1 bg-gray-800 p-6 rounded-xl border border-fuchsia-500/50 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">
                  Our Vision
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5 font-light">
                  <li>Build a complete "Tech Product Company"</li>
                  <li>Create educational apps and software tools</li>
                  <li>Become India’s most trusted digital ecosystem</li>
                </ul>
              </motion.div>
          
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20 px-2 bg-gray-100">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 bg-gray-900 shadow-2xl">

          <motion.h2
            className="text-4xl text-teal-500 t tracking-tight mb-14 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Journey! 
          </motion.h2>

          <motion.div
            className="space-y-16 border-l-4 border-teal-500/50 pl-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <motion.div className="relative" variants={item}>
              <span className="absolute -left-[30px] top-0 w-5 h-5 bg-teal-500 rounded-full shadow-[0_0_10px_teal]"></span>
              <h3 className="text-2xl font-semibold text-teal-300">2022 — Foundation</h3>
              <p className="text-gray-400 font-light mt-1">
                SKTech Systems began with a mission to transform digital learning.
              </p>
            </motion.div>

            <motion.div className="relative" variants={item}>
              <span className="absolute -left-[30px] top-0 w-5 h-5 bg-fuchsia-500 rounded-full shadow-[0_0_10px_fuchsia]"></span>
              <h3 className="text-2xl font-semibold text-fuchsia-300">2023 — Growth</h3>
              <p className="text-gray-400 font-light mt-1">
                Over 150+ students completed certified digital courses.
              </p>
            </motion.div>

            <motion.div className="relative" variants={item}>
              <span className="absolute -left-[30px] top-0 w-5 h-5 bg-teal-500 rounded-full shadow-[0_0_10px_teal]"></span>
              <h3 className="text-2xl font-semibold text-teal-300">2024 — Expansion</h3>
              <p className="text-gray-400 font-light mt-1">
                More than 30 structured courses were introduced.
              </p>
            </motion.div>

            <motion.div className="relative" variants={item}>
              <span className="absolute -left-[30px] top-0 w-5 h-5 bg-fuchsia-500 rounded-full shadow-[0_0_10px_fuchsia]"></span>
              <h3 className="text-2xl font-semibold text-fuchsia-300">2025 — Future Vision</h3>
              <p className="text-gray-400 font-light mt-1">
                New digital learning apps and products are under development.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

    <section className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl text-teal-500 font-bold text-center">
          Meet Our Instructor & Founder
        </h2>

        {/* CAROUSEL WRAPPER */}
        <div className="relative mt-10 flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gray-800 p-3 rounded-full text-teal-400 hover:bg-teal-700 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* SINGLE SLIDE CARD */}
          <div className="w-[320px] bg-gray-800 p-6 rounded-xl border border-teal-500/50 shadow-lg
                          hover:shadow-[0_0_25px_teal] transition-all duration-300">
            <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <img
                src={instructors[index].img}
                alt={instructors[index].name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl text-teal-300 font-semibold">
              {instructors[index].name}
            </h3>

            <p className="text-gray-400 font-light mt-1">
              {instructors[index].subject}
            </p>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-gray-800 p-3 rounded-full text-teal-400 hover:bg-teal-700 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>


    </div>
  );
}
