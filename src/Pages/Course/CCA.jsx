import React from "react";
import { Link } from "react-router-dom";

export default function CCA() {
  return (
    <>
      <div className="px-6 pt-28 pb-10 max-w-6xl mx-auto">

        <Link
          to="/services"
          className="text-teal-600 font-semibold underline hover:text-teal-700"
        >
          ← Back to Courses
        </Link>

        <h1 className="text-4xl sm:text-5xl  text-gray-900 mt-6 mb-4">
          CCA – Certificate in Computer Application
        </h1>

        <p className="text-gray-600 text-lg font-light leading-relaxed  mb-10">
          The CCA Course is designed for beginners who want to gain complete 
          confidence in using computers for daily office work. 
          This course covers typing, MS Office, email, online form-filling, 
          file management, and practical computer handling essential for jobs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl shadow-sm">
            <h3 className="font-bold text-teal-700 mb-2">🖥 Computer Basics</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Learn computer components, operating system, file management,
              and daily essential computer operations.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm">
            <h3 className="font-bold text-yellow-700 mb-2">📄 MS Office Complete</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Learn to create documents, spreadsheets and presentations for
              professional office-level productivity.
            </p>
          </div>

          <div className="p-6 bg-purple-50 border border-purple-200 rounded-2xl shadow-sm">
            <h3 className="font-bold text-purple-700 mb-2">🌐 Internet & Email</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Learn safe internet usage, email communication, online forms,
              PDFs, cloud tools and cyber awareness.
            </p>
          </div>

        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Course Modules
        </h2>

        <div className="space-y-6">

          <div className="p-7 bg-gray-100 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              📌 1. Computer Fundamentals
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
              <li>• Introduction to Computers & Operating Systems</li>
              <li>• Hardware, Software & Storage Devices</li>
              <li>• Input / Output Devices</li>
              <li>• File & Folder Management</li>
              <li>• Control Panel & Basic Settings</li>
            </ul>
          </div>

          <div className="p-7 bg-gray-100 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              📌 2. Microsoft Word
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
              <li>• Creating & Formatting Documents</li>
              <li>• Tables, Shapes, Images & Layouts</li>
              <li>• Headers, Footers & Page Setup</li>
              <li>• Resume, Application & Report Creation</li>
            </ul>
          </div>

          <div className="p-7 bg-gray-100 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              📌 3. Microsoft Excel
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
              <li>• Basic Formulas & Functions</li>
              <li>• Charts, Graphs & Data Tables</li>
              <li>• Sorting, Filtering & Formatting</li>
              <li>• Office-Level Excel Sheet Preparation</li>
            </ul>
          </div>

          <div className="p-7 bg-gray-100 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              📌 4. Microsoft PowerPoint
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
              <li>• Creating Professional Presentations</li>
              <li>• Transitions, Animations & Slide Design</li>
              <li>• SmartArt & Layout Techniques</li>
              <li>• Presentation Skills for Office Use</li>
            </ul>
          </div>

          <div className="p-7 bg-gray-100 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              📌 5. Internet & Email
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
              <li>• Browsing, Search Engines & Online Tools</li>
              <li>• Creating & Managing Email Accounts</li>
              <li>• Online Form Filling & PDF Tools</li>
              <li>• Cyber Security & Safe Internet Practices</li>
            </ul>
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
    </>
  );
}
