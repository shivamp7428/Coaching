import { useEffect, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CoursesCarousel() {
  const courses = [
    {
      id: "/dca",
      name: "DCA – Diploma in Computer Application",
      duration: "6 Months",
      level: "Beginner",
      desc: "Fundamental digital skills for office work.",
    },
    {
      id: "/pgdca",
      name: "PGDCA – Post Graduate Diploma",
      duration: "1 Year",
      level: "Advanced",
      desc: "Advanced applications, database and automation.",
    },
    {
      id: "/tally",
      name: "Tally Prime + GST",
      duration: "3 Months",
      level: "Beginner",
      desc: "Accounting, GST billing and taxation.",
    },
    {
      id: "/adca",
      name: "ADCA – Advanced Diploma",
      duration: "1 Year",
      level: "Expert",
      desc: "Office automation & advanced graphics.",
    },
    {
      id: "/cca",
      name: "CCA – Certificate in Computer Applications",
      duration: "2 Months",
      level: "Basic",
      desc: "Daily-use digital & office skills.",
    },
    {
      id: "/basic",
      name: "Basic Computer Course",
      duration: "1 Month",
      level: "Starter",
      desc: "Typing, MS Office & internet basics.",
    },
  ];

  const scrollRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const slider = setInterval(() => {
      const container = scrollRef.current;

      if (!container) return;

      container.scrollBy({
        left: direction * 320,
        behavior: "smooth",
      });
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setDirection(-1);
      }

      if (container.scrollLeft <= 0) {
        setDirection(1);
      }
    }, 2500);

    return () => clearInterval(slider);
  }, [direction]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6">
        <span className="border-b-4 border-teal-500 pb-1">Our Courses</span>
      </h1>

      <p className="text-gray-600 font-light max-w-3xl mb-10 text-lg">
        Slide through all our premium computer courses and click to view full details.
      </p>

      <div className="relative">

        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     bg-teal-500 text-white p-3 rounded-full shadow-lg
                     hover:bg-teal-600 transition"
        >
          ❮
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {courses.map((c, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[340px] flex flex-col 
                         bg-white shadow-lg rounded-2xl p-6 
                         border border-gray-100 hover:-translate-y-2 
                         hover:shadow-teal-300/40 hover:shadow-2xl 
                         transition-all duration-500"
            >
              <h2 className="text-2xl text-gray-900 mb-2">
                {c.name}
              </h2>

              <p className="text-gray-500 font-light mb-5 flex-1">{c.desc}</p>

              <div className="flex justify-between items-center text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-5 h-5 text-teal-600" />
                  <span>{c.duration}</span>
                </div>

                <div className="flex font-light items-center gap-2">
                  <span>{c.level}</span>
                </div>
              </div>

              <Link to={c.id}>
                <button
                  className="w-full py-2.5 bg-teal-500 text-white rounded-xl  cursor-pointer
                             font-light hover:bg-teal-600 transition 
                             active:scale-95"
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     bg-teal-500 text-white p-3 rounded-full shadow-lg
                     hover:bg-teal-600 transition"
        >
          ❯
        </button>

      </div>
    </div>
  );
}
