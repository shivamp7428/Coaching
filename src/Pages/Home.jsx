import React from 'react'
import StatsCounters from './StatsCounters'
import { MdDiversity3 } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const Home = () => {
  return (
    <>
 <div className="w-full bg-white px-6 md:px-30 py-16">
  <div className="grid md:grid-cols-2 items-center gap-10">
    <div className="space-y-6">
      <h1 className="text-2xl md:text-5xl font-semilight leading-tight text-slate-900">
        Having a good <span className="text-purple-600">attitude</span> <br />
        is very important to <span>succeed</span> in life.
      </h1>

      <p className="text-slate-600 md:text-lg font-light">
        Our career coaching methodology guides you on a deep
        transformational journey to find your success path.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="/pricing"
          className="bg-teal-500 text-white  md:text-xl text-sm px-3 py-3 md:px-6 md:py-3 rounded-lg shadow-md hover:opacity-90 font-light"
        >
          Get An Appointment
        </a>

        <a
          href="/login"
          className="border border-teal-500 md:text-xl  text-sm px-3 py-3  text-[#000066] md:px-6 md:py-3 rounded-lg hover:bg-teal-500 hover:text-white font-light transition"
        >
          Join Our Career
        </a>
      </div>
    </div>
    <div className="flex justify-center relative">
      <div className="absolute -z-10 w-72 h-72 bg-purple-200 rounded-full blur-2xl opacity-50"></div>

      <img
        src="https://media.istockphoto.com/id/1298623245/photo/amazed-young-male-kid-pointing-at-copy-space-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=GKmz_u3TptaBWR5N6rlDtie38GHGbNz3DEt-D69i0eM="
        alt="hero-person"
        className="rounded-full"
      />
    </div>

  </div>
     </div>
      <div>
        <StatsCounters/>
      </div>

     <div className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">

    <div className="relative">
      <img
        src="https://media.istockphoto.com/id/1079587192/photo/mid-adult-professor-teaching-a-lecture-from-desktop-pc-at-computer-lab.jpg?s=612x612&w=0&k=20&c=5uZGvFA6Sr7MNZl7Y-YwndvNR3E5Fex94ggHAdofTq4="
        className="w-full h-[420px] object-cover rounded-xl shadow-md"
        alt="computer"
      />

      <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#000066] rounded-full opacity-40"></div>
    </div>

    <div className="flex flex-col justify-center space-y-5">

      <div className="inline-block bg-gray-400 w-33 text-[#000066] px-4 py-1 rounded-md text-sm font-semilight">
        About <span className='text-[#0A0A0A] font-bold'>SK</span><span className="font-semilight text-slate-500">Tech</span>
      </div>

      <h1 className="text-2xl md:text-4xl  text-[#0A0A0A] leading-tight font-semilight">
        We care about your <span className="text-purple-600 font-mono">life better {" "}</span><br className='md:block hidden'/>
        you can trust us.
      </h1>

      <p className="text-slate-600 leading-relaxed  font-light">
        Our life coaching methodology guides you to get to the core of what
        you really want and what's holding you back. We’ll help you find the
        clarity you need to create a purposeful life that brings out your best self.
      </p>

      <p className="text-slate-600 leading-relaxed font-light">
        The one-on-one life coaching offers you the highest level of support
        from an expert coach that is committed to your success.
      </p>

      <a
        href="/services"
        className="mt-4 inline-block bg-teal-500 md:text-xl text-sm md:w-50 w-40 font-light text-white px-6 py-3 rounded-lg  hover:bg-teal-400 transition"
      >
        Learn Life Course
      </a>
    </div>
  </div>
   </div>
    <div className='m-4'>
      <h1 className='flex justify-center items-center gap-2 text-3xl md:text-4xl'>How Can i<span className='text-purple-600 font-serif'>help</span> you!</h1>
      <p className='flex justify-center items-center md:text-lg text-xs font-light'>We can discuss your problems & try solve your problems</p>
    </div>

  <div className="w-full py-14 bg-white flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">

    <div className="bg-white rounded-2xl group hover:bg-teal-500 p-8 shadow-md hover:shadow-xl transition cursor-pointer">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-300 
                      text-teal-500 text-4xl mb-4 mx-auto group-hover:bg-white group-hover:text-purple-600 transition">
        <GiStairsGoal />
      </div>
      <p className="text-lg font-light text-center group-hover:text-white transition">
        Don't Know Where To Go?
      </p>
    </div>

    <div className="bg-white rounded-2xl group hover:bg-teal-500 p-8 shadow-md hover:shadow-xl transition cursor-pointer">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-300 
                     text-teal-500 text-4xl mb-4 mx-auto group-hover:bg-white group-hover:text-purple-600 transition">
        <MdDiversity3 />
      </div>
      <p className="text-lg font-light text-center group-hover:text-white transition">
        We'll Sit and Talk To You
      </p>
    </div>

    <div className="bg-white rounded-2xl group hover:bg-teal-500 p-8 shadow-md hover:shadow-xl transition cursor-pointer">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-300 text-teal-500
                       mb-4 mx-auto group-hover:bg-white group-hover:text-purple-600 transition">
        <TbBulb className="w-10 h-10" />
      </div>
      <p className="text-lg font-light text-center group-hover:text-white transition">
        Find The Solution Here
      </p>
    </div>

  </div>
</div>
  <div className="w-full bg-white py-16 flex items-center justify-center">
  <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    <div>
      <img
        src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?fm=jpg&q=60&w=3000"
        alt="Computer"
        className="rounded-2xl shadow-lg"
      />
    </div>

    <div>
      <div className="inline-block bg-gray-400 w-40 text-[#000066] px-4 py-1 rounded-md text-sm font-semilight">
        Why classes <span className='text-[#0A0A0A] font-bold'>SK</span><span className="font-semilight text-slate-500">Tech</span>
      </div>

      <h1 className="text-3xl md:text-4xl  mb-4 leading-snug">
        Through this coaching, you will be able to achieve {" "}
        <span className="text-purple-600 font-sono">success</span> in your life.
      </h1>

      <p className="text-gray-600 leading-relaxed font-light mb-6">
        Our coaching methodology guides you to get to the core of what you
        really want with deep coaching tools. We help you make the clarity you
        need to create a purposeful life that brings out your best self.
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1><MdWorkspacePremium className='w-10 h-10 text-purple-600'/></h1>
          <p className="text-gray-700">Professional Coach</p>
        </div>

        <div className="flex items-center gap-3">
          <h1><FaUserTie  className='w-10 h-10 text-purple-600'/></h1>
          <p className="text-gray-700">Over 200+ Students</p>
        </div>

        <div className="flex items-center gap-3">
          <h1><GiTeacher  className='w-10 h-10 text-purple-600'/></h1>
          <p className="text-gray-700">Certified Coaching Experts</p>
        </div>
      </div>

    </div>

  </div>
</div>

<div className="w-full py-16 bg-white flex justify-center">
  <div className="w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    <div>
     <div className="inline-block bg-gray-400 w-40 text-[#000066] px-4 py-1 rounded-md text-sm font-semilight">
        About <span className='text-[#0A0A0A] font-bold'>SK</span><span className="font-semilight text-slate-500">Tech</span>
      </div>

      <h1 className="md:text-4xl  text-2xl text-gray-900 leading-snug mb-6">
        Why you should join <span className="text-purple-600">SKTech Coaching?</span>
      </h1>

      <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
        SKTech is built with one simple goal  to help students grow with 
        clear concepts, structured learning, and practical skills.
        We focus on making complicated things simple, and helping you reach 
        your full potential with confidence.
      </p>

      <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
        Our teaching style is friendly, deeply conceptual, and result-oriented.
        Whether you are preparing for your first job, learning a new skill,
        or improving your basics  SKTech gives you everything step by step.
      </p>

      <button className="bg-teal-500 hover:bg-teal-400 transition text-white px-6 py-3 rounded-xl text-lg font-light">
        <a href="/login">Get Sign Up</a>
      </button>
    </div>

    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsij1RaGIQb9NtrrpZX9bh9uEqNgKMdE9aw&s"
        alt="Coaching"
        className="rounded-full w-full object-cover"
      />
    </div>

  </div>
</div>

    </>
  )
}

export default Home
