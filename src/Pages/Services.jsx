import React from "react";
import Courses from "./Course";
import { BookOpen, Laptop, Users, GraduationCap, Award, Globe, CheckCircle, Star, Briefcase, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-teal-600 text-white py-20 px-6 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl tracking-wide">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg font-light opacity-90">
          SK Computer Coaching Institute – Providing high quality computer education with modern learning methods.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <BookOpen className="w-14 h-14 text-teal-600 mb-4 " />
          <h3 className="text-xl">Professional Courses</h3>
          <p className="text-gray-600 font-light mt-2">
            Certificate and Diploma courses like DCA, ADCA, PGDCA, CCA, and Tally Prime.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <Laptop className="w-14 h-14 text-teal-600 mb-4" />
          <h3 className="text-xl">Practical Lab Training</h3>
          <p className="text-gray-600 font-light mt-2">
            Hands-on practice sessions on real systems with assignments.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <Users className="w-14 h-14 text-teal-600 mb-4" />
          <h3 className="text-xl">Expert Faculty</h3>
          <p className="text-gray-600 font-light mt-2">
            Friendly and experienced instructors providing personalized guidance.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <GraduationCap className="w-14 h-14 text-teal-600 mb-4" />
          <h3 className="text-xl">Certification</h3>
          <p className="text-gray-600 font-light mt-2">
            Govt & Institute recognized certificates after completion.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <Award className="w-14 h-14 text-teal-600 mb-4" />
          <h3 className="text-xl">Skill Development</h3>
          <p className="text-gray-600 font-light mt-2">
            Real-world skill training designed to prepare students for jobs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <Globe className="w-14 h-14 text-teal-600 mb-4" />
          <h3 className="text-xl">Modern Computer Lab</h3>
          <p className="text-gray-600 font-light mt-2">
            Latest computers, study material, and internet access.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:flex items-center justify-center gap-3 md:text-4xl text-center  text-gray-800 mb-10">
          <h1 className="flex items-center justify-center md:gap-3 gap-1">Why Choose<h1 className="md:text-4xl text-2xl font-bold tracking-tight text-[#0A0A0A]">SK<span className="font-light text-slate-500">Tech</span></h1></h1> Computer Coaching?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Affordable fees with high-quality training",
            "Weekly tests & assignments",
            "One-to-one doubt clearing sessions",
            "Fully practical based learning",
            "Experienced teaching staff",
            "Friendly learning environment",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 mt-1" />
              <p className="text-gray-700 font-light">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6 shadow-inner">
        <h2 className="text-3xl md:text-4xl text-center  text-gray-800 mb-12">
          Our Teaching Process
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <Star className="mx-auto text-teal-600 w-14 h-14" />
            <h3 className="text-xl mt-4">1. Learn</h3>
            <p className="text-gray-600 text-sm mt-2">
              Concepts explained in simple and clear manner.
            </p>
          </div>

          <div>
            <Laptop className="mx-auto text-teal-600 w-14 h-14" />
            <h3 className="text-xl mt-4">2. Practice</h3>
            <p className="text-gray-600 text-sm mt-2">
              Hands-on practical lab sessions.
            </p>
          </div>

          <div>
            <Users className="mx-auto text-teal-600 w-14 h-14" />
            <h3 className="text-xl mt-4">3. Test</h3>
            <p className="text-gray-600 text-sm mt-2">
              Weekly tests to check progress.
            </p>
          </div>

          <div>
            <Award className="mx-auto text-teal-600 w-14 h-14" />
            <h3 className="text-xl mt-4">4. Achieve</h3>
            <p className="text-gray-600 text-sm mt-2">
              Certificate + job-ready skills.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto md:px-6 px-5 py-16">
        <h2 className="text-2xl md:text-4xl text-center  text-gray-800 mb-10">
          Placement & Career Support
        </h2>

        <div className="bg-white md:p-10 p-2 rounded-2xl shadow-md">
          <div className="flex items-start gap-2 md:gap-6">
            <Briefcase className="md:w-16 md:h-16 w-30 h-30 text-teal-600" />
            <div>
              <p className="text-gray-700 text-sm  leading-relaxed font-light">
                We provide essential career support like soft skills training, resume preparation,
                interview guidance, and job updates. Our mission is to help students build 
                confidence and secure the best opportunities in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <Courses />
      </section>

      <section className="bg-teal-600 text-white py-14 mt-16 text-center shadow-lg">
        <h2 className="md:text-4xl text-2xl">Ready to Start Your Journey?</h2>
        <p className="max-w-xl mx-auto mt-3 md:text-lg text-sm font-light opacity-90">
          Join thousands of students who choose <strong> SK </strong>Computer Coaching for a brighter future.
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-teal-600 font-semibold rounded-full flex mx-auto items-center gap-2 hover:bg-gray-200 transition">
          <a href="/login" className="flex justify-center items-center gap-3">Enroll Now <ArrowRight size={18} /></a>
        </button>
      </section>

    </div>
  );
}
