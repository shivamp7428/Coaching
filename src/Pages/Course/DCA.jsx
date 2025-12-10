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
      <h3 className="md:text-xl font-semibold text-gray-900">{title}</h3>
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

export default function DCA() {
  return (
    <div className="min-h-screen bg-gray-50/50">

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/services"
          className="text-teal-600 hover:text-teal-800 font-medium transition duration-200 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Courses
        </Link>
      </div>

      <div className="bg-gradient-to-r from-teal-900 py-24 px-6 text-white text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-teal-600/50 text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider ring-2 ring-blue-400">
            Diploma Course
          </span>

          <h1 className="text-2xl md:text-4xl leading-tight font-semibold">
            DCA – Diploma in Computer Application
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg font-light opacity-90">
            A beginner-friendly, job-focused 6-month complete computer
            application course designed for students, job seekers, office work,
            documentation, spreadsheets, and essential digital skills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          <div className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-teal-600">
            <h2 className="md:text-3xl text-2xl text-gray-900 mb-4 flex items-center">
              <span className="mr-2 hidden md:block">💡</span> About the DCA Program
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm md:text-lg font-light">
              DCA is the most popular entry-level computer course, ideal for
              students, job seekers, professionals, and anyone who wants to
              improve their computer knowledge. It covers MS Office, Internet,
              Email, Typing, Basic Designing, and Digital Skills essential for
              government and private jobs.
            </p>

            <p className="text-gray-600 mt-4 text-sm md:text-lg  italic">
              Perfect for office work, billing, documentation, data management,
              and basic computer operations.
            </p>
          </div>

          <div className="lg:col-span-1 grid  lg:grid-cols-1 gap-6">
            {[
              { title: "Duration", value: "6 Months", icon: "🕒" },
              { title: "Eligibility", value: "10th / 12th Pass", icon: "🎓" },
              { title: "Level", value: "Beginner Friendly", icon: "🌱" },
            ].map((detail, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-blue-100 text-center hover:ring-2 hover:ring-teal-500 transition duration-300"
              >
                <h3 className="text-base  text-gray-600 mb-1">
                  {detail.title}
                </h3>
                <p className="text-xl  text-teal-700">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10" />
        <h2 className="md:text-3xl text-2xl text-gray-900 mb-8 text-center">
          Why Choose Our DCA Course?
        </h2>

        <div className="grid md:grid-cols-3 font-light gap-6">
          {[
            { title: "Beginner Friendly Course", icon: "👌" },
            { title: "Complete Office Training", icon: "📄" },
            { title: "Job-Oriented Skills", icon: "💼" },
            { title: "Hands-on Practice", icon: "📝" },
            { title: "Updated Syllabus", icon: "📚" },
            { title: "Perfect for Govt. Exams", icon: "🏛️" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-6 rounded-xl text-gray-800 text-center border-b-4 border-teal-500 transform hover:scale-[1.03] transition duration-300 ring-1 ring-gray-100"
            >
              <span className="text-3xl block mb-2">{item.icon}</span>
              {item.title}
            </div>
          ))}
        </div>

        <hr className="my-16" />

        <div className="bg-blue-50 p-8 rounded-3xl shadow-inner">
          <h2 className="md:text-4xl text-2xl text-teal-800 mb-10 text-center">
            Complete DCA Syllabus (6 Months)
          </h2>

          <div className="grid md:grid-cols-2 gap-8 font-light">

            <SyllabusModuleCard
              title="Module 1: Computer Basics & Fundamentals"
              icon="🖥️"
              items={[
                "Introduction to Computer Systems",
                "Hardware, Software, Devices",
                "Operating Systems Basics",
                "Computer Maintenance",
                "File Management Concepts",
              ]}
            />

            <SyllabusModuleCard
              title="Module 2: MS Word  Professional Document Work"
              icon="📝"
              items={[
                "Word Interface & Basics",
                "Formatting, Tables, SmartArt",
                "Mail Merge (Letters, Certificates)",
                "Report, CV, Project Creation",
              ]}
            />

            <SyllabusModuleCard
              title="Module 3: MS Excel  Data Handling & Calculations"
              icon="📊"
              items={[
                "Basic & Intermediate Formulas",
                "Sorting, Filtering",
                "Charts & Data Visualization",
                "Billing Sheets, Reports",
              ]}
            />

            <SyllabusModuleCard
              title="Module 4: MS PowerPoint – Presentation Skills"
              icon="🎤"
              items={[
                "Slide Design",
                "Transitions & Animations",
                "Charts, SmartArt",
                "Professional Presentation Creation",
              ]}
            />

            <SyllabusModuleCard
              title="Module 5: Internet, Email & Online Tools"
              icon="🌍"
              items={[
                "Internet Surfing",
                "Email Creation & Management",
                "Online Forms, Payments",
                "Google Tools (Docs, Drive, Sheets)",
              ]}
            />

            <SyllabusModuleCard
              title="Module 6: Typing (English + Hindi)"
              icon="⌨️"
              items={[
                "Touch Typing Introduction",
                "Speed Practice",
                "Accuracy Improvement",
                "Typing Software Training",
              ]}
            />
          </div>
        </div>

        <hr className="my-16" />

        <h2 className="md:text-3xl text-2xl text-gray-900 mb-8 text-center">
          Career Opportunities After DCA
        </h2>

        <div className="grid md:grid-cols-3 font-light gap-6 text-center text-gray-700 text-lg">
          {[
            "Office Assistant",
            "Computer Operator",
            "Receptionist",
            "Data Entry Operator",
            "Back Office Executive",
            "Billing Operator",
          ].map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl"
            >
              ✔ {job}
            </div>
          ))}
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
