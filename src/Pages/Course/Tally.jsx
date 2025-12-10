import React from "react";
import { Link } from "react-router-dom";

const CourseIcon = ({ children }) => (
  <div className="p-3 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mr-4 shadow-inner">
    {children}
  </div>
);

const SyllabusModuleCard = ({ title, items, icon }) => (
  <div className="bg-white p-2 md:p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:shadow-2xl hover:scale-[1.01] transition duration-300 ease-in-out">
    <div className="flex items-center mb-4">
      <CourseIcon>{icon}</CourseIcon>
      <h3 className="text-lg">{title}</h3>
    </div>
    <ul className="md:space-y-3 text-gray-700 md:pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex  font-light items-start text-base">
          <span className="text-teal-500 mr-2 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function TallyPrimeCourse() {
  return (
    <div className="min-h-screen bg-gray-50/50">

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/services"
          className="text-teal-700 hover:text-teal-900 font-medium transition duration-200 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Courses
        </Link>
      </div>

      {/* HEADER SECTION */}
      <div className="bg-gradient-to-r from-teal-700 py-24 px-6 text-white text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-teal-600/40 text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider ring-2 ring-blue-300">
            Accounting & GST Specialization
          </span>

          <h1 className="text-3xl md:text-5xl leading-tight font-bold">
            Tally Prime + GST  
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg font-light opacity-90">
            Master the complete accounting & taxation workflow including GST billing, returns, payroll,
            stock, financial reports, and business accounting — fully practical training for job-ready careers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          <div className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-teal-600">
            <h2 className="md:text-3xl text-xl mb-4 flex items-center text-gray-900">
              <span className="mr-2">📘</span> About This Course
            </h2>
            <p className="text-gray-700 md:text-lg text-sm leading-relaxed font-light">
              Tally Prime with GST is India’s most widely used business accounting software. 
              This course teaches you complete accounting, taxation, stock management, payroll, 
              GST billing, returns, reporting, reconciliation, and business financial operations.
            </p>
            <p className="text-gray-600 mt-4 md:text-base italic font-light">
              Perfect for jobs in CA firms, offices, shops, industries, billing departments, and accounting roles.
            </p>
          </div>

          <div className="lg:col-span-1 grid  lg:grid-cols-1 gap-6">
            {[
              { title: "Duration", value: "3 Months", icon: "🕒" },
              { title: "Training", value: "100% Practical", icon: "⚙️" },
              { title: "Mode", value: "Offline / Online", icon: "💻" },
            ].map((detail, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-teal-200 text-center hover:ring-2 hover:ring-teal-500 transition duration-300"
              >
                <h3 className="text-base  text-gray-600 mb-1">{detail.title}</h3>
                <p className="text-xl text-teal-700">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10" />
        <h2 className="md:text-3xl text-2xl text-gray-900 mb-8 text-center">
          Why Choose Tally?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Most demanded accounting skill in India",
            "Used by 70%+ companies & industries",
            "GST + E-invoicing + E-way Bill Training",
            "Live business transactions practice",
            "100% job assistance support",
            "Perfect for fresher Accountant roles",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-lg rounded-xl border-b-4 border-teal-500 text-center text-gray-700 font-light transform hover:scale-[1.03] transition duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        <hr className="my-16" />

        <div className="mt-16 bg-teal-50 p-8 rounded-3xl shadow-inner">
          <h2 className="md:text-4xl text-2xl text-teal-900 mb-10 text-center ">
            Complete Syllabus
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <SyllabusModuleCard
              title="Module 1: Accounting Basics & Tally Setup"
              icon="📘"
              items={[
                "Basics of Accounting (Debit-Credit, Journal Entry)",
                "Business Transactions & Real-time Examples",
                "Tally Interface, Gateway, Configurations",
                "Company Creation & Security Setup",
              ]}
            />

            <SyllabusModuleCard
              title="Module 2: Ledger, Groups & Voucher Entries"
              icon="📄"
              items={[
                "Ledger Creation – Customer, Supplier, Expense",
                "Groups & Classification",
                "Sales, Purchase, Receipt & Payment",
                "Debit Note / Credit Note / Contra / Journal",
              ]}
            />

            <SyllabusModuleCard
              title="Module 3: GST Complete Training"
              icon="🧾"
              items={[
                "GST Concepts, HSN/SAC, ITC Rules",
                "GST Sales & Purchase Billing",
                "E-Invoice & E-Way Bill",
                "GSTR-1, GSTR-3B Return Filing",
              ]}
            />

            <SyllabusModuleCard
              title="Module 4: Inventory & Stock Management"
              icon="📦"
              items={[
                "Stock Items, Units & Categories",
                "Godown / Location Management",
                "Batch-wise / Expiry Stock",
                "Inventory Valuation & Analysis",
              ]}
            />

            <SyllabusModuleCard
              title="Module 5: Payroll & Salary Processing"
              icon="👨‍💼"
              items={[
                "Employee Database Creation",
                "Attendance & Leave Management",
                "Salary Structure, Allowances & Deductions",
                "PF, ESI, Professional Tax, Salary Slips",
              ]}
            />

            <SyllabusModuleCard
              title="Module 6: Reports & Financial Statements"
              icon="📊"
              items={[
                "Balance Sheet & P&L Analysis",
                "Trial Balance, Ratio Analysis",
                "Cash Flow, Bank Reconciliation",
                "Data Export: PDF, Excel, Reports",
              ]}
            />
          </div>
        </div>

        <hr className="my-16" />

        <h2 className="md:text-3xl text-2xl mb-8 text-center text-gray-900">
          Career Opportunities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Accountant",
            "Tally Operator",
            "GST Assistant",
            "Billing Executive",
            "Finance Assistant",
            "Office Administrator",
            "Data Entry Accountant",
            "Back Office Executive",
          ].map((role, i) => (
            <div
              key={i}
              className="bg-white shadow p-6 rounded-xl text-center text-gray-700 font-light border-l-4 border-teal-500 hover:shadow-lg transition duration-300"
            >
              {role}
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
