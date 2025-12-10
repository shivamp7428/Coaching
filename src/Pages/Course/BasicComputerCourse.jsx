import { Link } from "react-router-dom";

export default function BasicComputerCourse() {
  return (
      <>
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link to="/services" className="text-teal-600 hover:text-teal-800 font-medium transition duration-200 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Courses
        </Link>
      </div>
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl  text-gray-900">
          <span className=" border-teal-500 pb-2">
            Basic Computer Course
          </span>
        </h1>

        <p className="text-gray-600 text-lg font-light max-w-3xl mx-auto mt-4">
          A beginner-friendly program designed to build essential digital and office-ready skills.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-14">
        <h2 className="text-3xl  text-gray-900 mb-6">
          Course Overview
        </h2>

        <p className="text-gray-600 font-light leading-relaxed text-lg">
          The Basic Computer Course is designed for complete beginners who want
          to start using computers confidently. This course teaches essential
          digital skills such as typing, MS Office basics, document formatting,
          email usage, browsing, and safe internet practices. It is ideal for
          students, job seekers, and anyone who wants to build a strong
          foundation in computer operations.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl  text-gray-900 mb-6">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-2 font-light gap-6">
          {[
            "Introduction to Computers",
            "Windows Operating System",
            "File & Folder Management",
            "Typing Skills (English/Hindi)",
            "Microsoft Word (Full Basics)",
            "Microsoft Excel (Tables, Basic Formulas)",
            "Microsoft PowerPoint (Slides & Presentations)",
            "Internet Browsing & Research",
            "Email Setup & Usage",
            "Online Forms & Applications",
            "PDF Handling & Document Conversion",
            "Safe Internet Practices & Cyber Awareness",
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md border border-gray-100 
                         hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                         flex items-start gap-3"
            >
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1"></div>
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-teal-500 text-white rounded-2xl p-8 shadow-lg mb-14">
        <h2 className="text-3xl mb-4">Course Details</h2>
        
        <div className="grid sm:grid-cols-2 gap-6 text-lg">
          <p><>Duration:</> 1 Month</p>
          <p><>Level:</> Beginner</p>
          <p><>Certification:</> Yes (Institute Certified)</p>
          <p><>Mode:</> Offline / Online (Optional)</p>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl  text-gray-900 mb-6">
          Career Opportunities
        </h2>

        <div className="grid md:grid-cols-2 font-light gap-6">
          {[
            "Office Assistant",
            "Front Desk Executive",
            "Computer Operator",
            "Back Office Staff",
            "Billing Assistant",
            "Data Entry Operator",
          ].map((career, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md border border-gray-100 
                         hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex gap-3"
            >
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1"></div>
              <p className="text-gray-700 text-lg">{career}</p>
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
      </>
  );
}
