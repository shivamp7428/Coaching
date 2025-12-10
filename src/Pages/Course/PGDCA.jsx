import React from "react";
import { Link } from "react-router-dom";

const CourseIcon = ({ children }) => (
  <div className="p-3 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-4 shadow-inner">
    {children}
  </div>
);

const SyllabusModuleCard = ({ title, items, icon }) => (
  <div className="bg-white md:p-6 p-2 rounded-2xl shadow-xl border border-gray-100 transform hover:shadow-2xl hover:scale-[1.01] transition duration-300 ease-in-out">
    <div className="flex items-center mb-4">
      <CourseIcon>{icon}</CourseIcon>
      <h3 className="text-xl">{title}</h3>
    </div>
    <ul className="md:space-y-3 text-gray-600 md:pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-base">
          <span className="text-teal-500 mr-2 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function PGDCA() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link to="/services" className="text-teal-600 hover:text-teal-800 font-medium transition duration-200 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Courses
        </Link>
      </div>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-teal-900 py-24 px-6 text-white text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-teal-600/50 text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider ring-2 ring-blue-400">
            Post Graduate Diploma
          </span>

          <h1 className="text-2xl md:text-4xl leading-tight font-semibold">
            PGDCA ( Post Graduate Diploma in Computer Applications)
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg font-light opacity-90">
            A 1-Year Professional Diploma for graduates to gain advanced skills 
            in computer applications, DBMS, networking, IT tools, office automation, and industry-level digital knowledge.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-teal-600">
              <h2 className="md:text-3xl text-2xl text-gray-900 mb-4 flex items-center">
                  <span className="mr-2 md:block hidden">💡</span> About the PGDCA Program
              </h2>
              <p className="text-gray-700 leading-relaxed md:text-lg text-sm font-light">
                PGDCA is one of the most valuable 1-year diploma programs designed 
                for graduates from any stream to gain complete professional 
                knowledge of computers, database handling, networking, and modern 
                IT tools used in industries.
              </p>

              <p className="text-gray-600 mt-4 md:text-base text-sm italic font-light">
                Perfect for students preparing for government jobs, office 
                administration roles, technical assistant jobs, and careers in 
                educational institutes or corporate sectors.
              </p>
          </div>

          <div className="lg:col-span-1 grid lg:grid-cols-1 gap-6">
              
              {[
                { title: "Duration", value: "1 Year", icon: "🕒" },
                { title: "Eligibility", value: "Graduation (Any Stream)", icon: "🎓" },
                { title: "Mode", value: "Offline / Online", icon: "💻" },
              ].map((detail, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-blue-100 text-center hover:ring-2 hover:ring-teal-500 transition duration-300">
                    <h3 className="text-base  text-gray-600 mb-1">{detail.title}</h3>
                    <p className="text-xl  text-teal-700">{detail.value}</p>
                </div>
              ))}
          </div>
        </div>

        <hr className="my-10" />

        <div className="mt-12">
            <h2 className="md:text-3xl text-2xl text-gray-900 mb-8 text-center">
                Why Choose PGDCA?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Complete 1-Year Professional Training", icon: "🗓️" },
                    { title: "Covers Office, DBMS, Networking & IT Tools", icon: "🎯" },
                    { title: "Industry-Level Practical Sessions", icon: "🛠️" },
                    { title: "Govt. Exam Compatible Computer Course", icon: "🏛️" },
                    { title: "Strong Demand in Corporate & Education", icon: "🏢" },
                    { title: "Boosts Career Growth & Promotions", icon: "🚀" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-xl p-6 rounded-xl text-gray-800 text-center font-light border-b-4 border-teal-500 transform hover:scale-[1.03] transition duration-300 ring-1 ring-gray-100"
                    >
                        <span className="text-3xl block mb-2">{item.icon}</span>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>

        <hr className="my-16" />

        <div className="mt-16 bg-blue-50 p-8 rounded-3xl shadow-inner">
          <h2 className="md:text-4xl text-2xl text-teal-800 mb-10 text-center">
            PGDCA Syllabus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 font-light">

            <SyllabusModuleCard 
              title="Module 1: Computer Fundamentals"
              icon="🖥️"
              items={[
                "Computer Systems & Components",
                "Operating System Concepts",
                "Input/Output Devices",
                "Data Representation & Number Systems",
                "Software Types & Applications",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 2: Office Automation"
              icon="📊"
              items={[
                "MS Word – Advanced Formatting",
                "MS Excel – Functions, Charts, Dashboards",
                "MS PowerPoint – Presentation Mastery",
                "Email & Internet Tools",
                "Digital Office Techniques",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 3: Database Management (DBMS)"
              icon="🗄️"
              items={[
                "DBMS Concepts",
                "SQL Queries, Joins, Views",
                "Database Design & Normalization",
                "MySQL Hands-On Practice",
                "Data Handling & Analysis",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 4: Fundamentals of Networking"
              icon="🌐"
              items={[
                "Basics of Networking",
                "LAN, WAN, MAN Concepts",
                "Router & Switch Operations",
                "Internet Technologies",
                "Network Security Basics",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 5: Cyber Security & IT Tools"
              icon="🔒"
              items={[
                "Cyber Security Concepts",
                "Data Protection Techniques",
                "Firewall & Antivirus Tools",
                "IT Act & Digital Laws",
                "Safe Internet Usage",
              ]}
            />

            <SyllabusModuleCard 
              title="Module 6: Advanced Excel (Professional)"
              icon="📈"
              items={[
                "Advanced Formulas (VLOOKUP, IF, SUMIF)",
                "Pivot Table & Pivot Chart",
                "Data Sorting & Validation",
                "MIS Reporting",
                "Automation Basics",
              ]}
            />
          </div>
        </div>

        <hr className="my-16" />

        <div className="mt-16">
          <h2 className="md:text-3xl text-2xl text-gray-900 mb-8 text-center">Career Opportunities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Computer Operator",
              "Technical Support Executive",
              "Office Assistant",
              "Data Analyst",
              "Lab Instructor",
              "Back Office Executive",
              "Computer Teacher",
              "IT Support Assistant",
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
