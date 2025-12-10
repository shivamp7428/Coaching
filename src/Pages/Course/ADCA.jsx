import React from "react";
import { Link } from "react-router-dom";

const CourseIcon = ({ children }) => (
  <div className="p-3 bg-teal-100 text-blue-600 rounded-full flex items-center justify-center mr-4 shadow-inner">
    {children}
  </div>
);

const SyllabusModuleCard = ({ title, items, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:shadow-2xl hover:scale-[1.01] transition duration-300 ease-in-out">
    <div className="flex items-center mb-4">
      <CourseIcon>{icon}</CourseIcon>
      <h3 className="text-xl ">{title}</h3>
    </div>
    <ul className="space-y-3 text-gray-600 pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-base">
          <span className="text-teal-500 mr-2 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);


export default function ADCA() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link to="/services" className="text-teal-600 hover:text-teal-800 font-medium transition duration-200 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Courses
        </Link>
      </div>

      <div className="bg-gradient-to-r from-teal-900 py-24 px-6 text-white text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-teal-600/50 text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider ring-2 ring-blue-400">
            Advanced Diploma
          </span>
          <h1 className="text-2xl md:text-4xl leading-tight">
            ADCA (Advanced Diploma in Computer Applications)
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg font-light opacity-90">
            The complete 12-Month Professional Computer Diploma to build a strong foundation in office tools, graphic design, accounting, and essential digital productivity skills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-teal-600">
                <h2 className="text-3xl  text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">💡</span> About The ADCA Program
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                    ADCA is one of the most demanded diploma programs for students, job seekers, and working professionals. This comprehensive course covers everything from core computer basics to advanced applications like MS Office, database handling, Tally accounting, presentation designing, and essential graphic design basics.
                </p>
                <p className="text-gray-600 mt-4 text-base italic font-light">
                    Ideal for government jobs, office administration roles, receptionist positions, data entry, and computer assistant profiles across various industries.
                </p>
            </div>

            <div className="lg:col-span-1 grid grid-cols-3 lg:grid-cols-1 gap-6">
                {[
                    { title: "Duration", value: "12 Months", icon: "🕒" },
                    { title: "Eligibility", value: "10th / 12th Pass", icon: "🎓" },
                    { title: "Mode", value: "Offline / Online", icon: "💻" },
                ].map((detail, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-blue-100 text-center hover:ring-2 hover:ring-teal-500 transition duration-300">
                        <h3 className="text-base font-semibold text-gray-600 mb-1">{detail.title}</h3>
                        <p className="text-xl font-extrabold text-teal-700">{detail.value}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <hr className="my-10" />

        <div className="mt-12">
            <h2 className="text-3xl  text-gray-900 mb-8 text-center">
                Why Choose Our ADCA Course?
            </h2>
            <div className="grid md:grid-cols-3  gap-6">
                {[
                    { title: "Complete 12-Month Training", icon: "🗓️" },
                    { title: "Practical & Theory Sessions", icon: "👨‍🏫" },
                    { title: "Govt. Exam Friendly Course", icon: "🏛️" },
                    { title: "Hands-on Professional Assignments", icon: "📝" },
                    { title: "100% Job Assistance Support", icon: "💼" },
                    { title: "Industry-Level Software Focus", icon: "⚙️" },
                ].map((item, i) => (
                    <div 
                        key={i} 
                        className="bg-white shadow-xl p-6 rounded-xl text-gray-800 text-center font-light 
                        border-b-4 border-teal-500  transform hover:scale-[1.03] transition duration-300 ring-1 ring-gray-100"
                    >
                        <span className="text-3xl block mb-2">{item.icon}</span>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>

        <hr className="my-16" />

        <div className="mt-16 bg-blue-50 p-8 rounded-3xl shadow-inner">
          <h2 className="text-4xl  text-teal-800 mb-10 text-center">
            Detailed Syllabus Structure
          </h2>
          
          <div className="grid md:grid-cols-2 font-light gap-8">

            <SyllabusModuleCard 
              title="Module 1: Computer Fundamentals & Digital Skills" 
              icon="🖥️"
              items={[
                "Introduction to Computers, Hardware & Software",
                "Operating Systems (Windows/Linux) & Utilities",
                "Internet and Browsing Security",
                "Professional Email Writing & Digital Communication",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 2: Microsoft Office Suite (Productivity)" 
              icon="📈"
              items={[
                "MS Word – Documents, Formatting, Resume Creation",
                "MS Excel – Formulas, Advanced Sheets, Data Handling & Charts",
                "MS PowerPoint – Dynamic Presentation Design & Delivery",
                "MS Access – Database Basics, Tables & Queries",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 3: Graphic Designing Basics" 
              icon="🎨"
              items={[
                "Adobe Photoshop – Basic Tools & Image Manipulation",
                "Logo & Banner Designing Principles",
                "Canva Professional (for quick social media graphics)",
                "Image Sizing, Optimization, and Printing Basics",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 4: Financial Accounting Basics" 
              icon="💰"
              items={[
                "Tally Prime – Introduction and Company Setup",
                "Ledger, Voucher Entry, and Financial Statements Intro",
                "GST Overview & Basic Billing/Invoicing",
                "Bank Reconciliation & Inventory Management Basics",
              ]}
            />
          </div>
        </div>

        <hr className="my-16" />
        <div className="mt-16">
          <h2 className="text-3xl  text-gray-900 mb-8 text-center">
            Pathway to Career Opportunities
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Computer Operator",
              "Office Assistant",
              "Data Entry Operator",
              "Receptionist",
              "Back Office Executive",
              "Junior Accountant",
              "Desktop Publishing (DTP) Operator",
              "Clerk / Computer Teacher",
            ].map((role, i) => (
              <div 
                key={i} 
                className="bg-white shadow p-6 rounded-xl text-center text-gray-700 font-light border-l-4 border-teal-400 hover:shadow-lg transition duration-300"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
                <button 
                    className="bg-teal-500 hover:bg-teal-700 text-white text-xl px-12 py-3 rounded-xl
                    transform hover:scale-[1.05] cursor-pointer transition-all duration-300 ring-4 ring-green-300/50"
                >
                    <a href="/pricing">Enroll Now →</a>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}