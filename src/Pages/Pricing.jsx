import React, { useState, useEffect } from "react";
import { CheckCircle, Search } from "lucide-react";

const ALL_COURSES = [
  { category: "Diploma", name: "Diploma in Computer Applications (DCA)", price: 1000 },
  { category: "Post Graduate", name: "Post Graduate Diploma in Computer Applications (PGDCA)", price: 1500 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Computer Applications (ADCA)", price: 1200 },
  { category: "Diploma", name: "Diploma in Computer Programming (DICP)", price: 1100 },
  { category: "Diploma", name: "Diploma in Programming & Computer Technology (DPCTT)", price: 1300 },
  { category: "Diploma", name: "Diploma in Web Development (DIWD)", price: 1400 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Financial Accounting (ADFA)", price: 1500 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Computer Science (ADCS)", price: 1600 },
  { category: "Post Graduate", name: "PG Diploma in Computer Hardware Networking (PGDCHN)", price: 1700 },
  { category: "Master Diploma", name: "Master Diploma in Computer Applications (MDCA)", price: 2000 },
  { category: "Post Graduate", name: "PG Diploma in IT (PGDIT)", price: 1800 },
  { category: "Advanced Diploma", name: "Advanced Diploma in CS & Web Development (ADCSWD)", price: 1900 },
  { category: "Post Graduate", name: "PG Diploma in Management (PGDM)", price: 2200 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Digital Marketing (ADDM)", price: 2100 },
  { category: "Post Graduate", name: "PG Diploma in Software Technology (PGDST)", price: 2400 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Computer & Technical Training (ADCTT)", price: 2000 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Web Development (ADWD)", price: 2100 },
  { category: "Diploma", name: "Diploma in Computer Financial Accounting (DCFA)", price: 1500 },
  { category: "Diploma", name: "Diploma in Office Administration & Planning (DOAP)", price: 1300 },
  { category: "Diploma", name: "Diploma in Journalism & Mass Communication (DJMC)", price: 1800 },
  { category: "Diploma", name: "Diploma in Software Development (DSD)", price: 1700 },
  { category: "Post Graduate", name: "PG Diploma in International Relations (PGDIRM)", price: 2500 },
  { category: "Post Graduate", name: "PG Diploma in Banking & Finance (PGDBF)", price: 2200 },
  { category: "Diploma", name: "Diploma in Banking & Finance (DBF)", price: 1600 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Fashion & Textile (ADFAT)", price: 1900 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Management (ADMA)", price: 2100 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Digital Photography (ADDP)", price: 2000 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Computer Organization (ADCO)", price: 2200 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Creative Photography (ADCP)", price: 2100 },
  { category: "Post Graduate", name: "PG Diploma in Computer Web Development (PGDCWD)", price: 2500 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Environmental & Organic Farming (ADDEO)", price: 2300 },
  { category: "Diploma", name: "Diploma in Network & Technical Training (DNTT)", price: 1500 },
  { category: "Diploma", name: "Diploma in Office Automation (DIOA)", price: 1200 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Horticulture (ADHN)", price: 1800 },
  { category: "Post Graduate", name: "Post Graduate Diploma in Arts (PGDA)", price: 2200 },
  { category: "Diploma", name: "Diploma in Industrial & Organizational Psychology (DICO)", price: 1400 },
  { category: "Certificate", name: "Certificate in Technical Training (CTTC)", price: 900 },
  { category: "Diploma", name: "Diploma in Photography (DPT)", price: 1500 },
  { category: "Diploma", name: "Diploma in Data Engineering (DDE)", price: 2000 },
  { category: "Advanced Diploma", name: "Advanced Diploma in Arts (ADA)", price: 1700 },
  { category: "Diploma", name: "Diploma in Travel & Tourism Management (DTTM)", price: 1500 },
  { category: "Diploma", name: "Diploma in Computer Financial Services (DCFS)", price: 1800 }
];

const categories = ["All", "Diploma", "Advanced Diploma", "Post Graduate", "Master Diploma", "Certificate"];

const PricingPage = () => {
  const [selectedCat, setSelectedCat] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState([]);

  // FILTERING
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      let data = ALL_COURSES;

      if (selectedCat !== "All") {
        data = data.filter((c) => c.category === selectedCat);
      }

      if (search.trim()) {
        data = data.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Show default first 6
      setVisible(data.slice(0, 6));
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [selectedCat, search]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">

      <div className="text-center">
        <h1 className="text-4xl  text-teal-600">Our Pricing</h1>
        <p className="text-gray-600 font-light mt-2">
          Choose from 40+ professional computer courses.
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-8">
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow border">
          <Search className="text-teal-600" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-5 py-2 rounded-full m-2 font-light border text-sm transition ${
              selectedCat === cat
                ? "bg-teal-600 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && visible.length === 0 && (
        <p className="text-center mt-12 text-gray-600 text-xl">No courses found 😕</p>
      )}

      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-3">
        {!loading &&
          visible.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow bg-white border hover:shadow-xl transition"
            >
              <h2 className="text-xl  text-teal-700">
                {course.name}
              </h2>
              <p className="text-3xl  mt-3 text-gray-800">₹{course.price}</p>
              <p className="text-gray-500">({course.category})</p>

              <div className="mt-4 flex items-center gap-2 text-gray-700">
                <CheckCircle size={20} className="text-teal-600" />
                Certificate Included
              </div>

              <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 font-light text-white py-2 rounded-xl">
                Enroll Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingPage;
