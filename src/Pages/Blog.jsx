import { Link } from "react-router-dom";
import { Search, Tag, Calendar, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Computer Basics",
    "Career Tips",
    "Tech Knowledge",
    "Software Skills",
  ];

  const posts = [
    { id: 1, title: "Top 10 Benefits of Learning Computer in 2025", category: "Computer Basics", date: "Dec 2025", desc: "Computer skill is the biggest career booster in the digital world..." , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxAfIb7D1UADns9-qi-B-BPTUmwp22Xfd6g&s", },
    { id: 2, title: "How to Start a Career in Digital Accounting", category: "Career Tips", date: "Nov 2025", desc: "Tally + GST is the most demanded skill for accounting jobs today..." ,img: "https://static.resumegiants.com/wp-content/uploads/sites/25/2023/01/18154623/shutterstock_1211905921-1-736x414.webp",},
    { id: 3, title: "Why MS Excel Is the Most Powerful Office Tool", category: "Software Skills", date: "Oct 2025", desc: "Excel automates reports, finances, analysis, and more...",img: "https://internationalschooling.org/0-Highly-Valued-Basic-Computer-Skills-for-the-Future.jpg", },
    { id: 4, title: "Essential Computer Skills Every Student Must Learn", category: "Computer Basics", date: "Oct 2025", desc: "Basic computer literacy is now more important than English speaking..." ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUpgndqIjnGb0WkUxgDpcCpgWlhk1L7z0cA&s",},
    { id: 5, title: "How to Prepare for IT Job Interviews", category: "Career Tips", date: "Aug 2025", desc: "Resume, projects, communication & confidence matter the most..." , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsBI2C7x9yXKSgv6Bhprf5F7Ck2djaEzn_g&s",},
    { id: 6, title: "Top Software Tools Used in Offices", category: "Software Skills", date: "July 2025", desc: "From MS Office to Google Workspace — tools that run companies..." , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6WoFA3cW-HViyi5uswnvAYUvTbdRjBVh3w&s",},
    { id: 7, title: "Latest Tech Trends Students Should Know", category: "Tech Knowledge", date: "June 2025", desc: "AI, Cloud, Blockchain—tech shaping tomorrow’s jobs...",img: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/10/Technical-Skills_How-to-Them-Master-in-2022.jpg.webp", },
    { id: 8, title: "How Typing Speed Helps You Get Jobs Faster", category: "Computer Basics", date: "May 2025", desc: "Typing is a silent superpower nobody talks about..." , img: "https://www.shutterstock.com/image-photo/back-basics-simplifying-business-procedures-600nw-2363218041.jpg",},
    { id: 9, title: "Your First Step Into the World of Programming", category: "Tech Knowledge", date: "Apr 2025", desc: "Start with logic, simple syntax, and small challenges..." ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0aO4NYVFmO7h8rsHQmrDdRugyWq37sucbw&s",},
    { id: 10, title: "Digital Skills Required for Office Jobs", category: "Career Tips", date: "Apr 2025", desc: "From emailing to spreadsheets to online meetings, everything matters..." ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0aO4NYVFmO7h8rsHQmrDdRugyWq37sucbw&s",},
  ];

  useEffect(() => {
    if (search.trim() === "") return;
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [search]);

  const filteredPosts = posts
    .filter((p) =>
      activeCategory === "All" ? true : p.category === activeCategory
    )
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  const toShow =
    search.trim() === ""
      ? filteredPosts.slice(0, 6)
      : filteredPosts;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">

      <div className="text-center">
        <h1 className="text-4xl  text-teal-600">Our Blog</h1>
        <p className="text-gray-600 max-w-xl font-light mx-auto mt-3">
          Stay updated with useful computer & career knowledge.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10">

        <div className="flex items-center bg-white shadow-md rounded-xl p-4 mb-3">
          <Search className="text-teal-600" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-3 font-light outline-none"
          />
        </div>

        {loading && (
          <div className="flex justify-center py-4">
            <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
          </div>
        )}

        <div className="flex gap-3 flex-wrap mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 font-light rounded-full text-sm transition ${
                activeCategory === c
                  ? "bg-teal-600 text-white"
                  : "bg-teal-100 text-teal-700 hover:bg-teal-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {toShow.length > 0 ? (
            toShow.map((p) => (
              <Link
                to={`/blog/${p.id}`}
                key={p.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h2 className="text-2xl  text-teal-600">
                  {p.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                  <Tag className="w-4" /> {p.category}
                </p>
                <p className="text-gray-600 font-light mt-3">{p.desc}</p>
                <img src={p.img} className="rounded-xl mb-3 w-full h-40" />
                <p className="text-gray-500 mt-4 flex items-center gap-2 text-sm">
                  <Calendar className="w-4" /> {p.date}
                </p>
              </Link>
            ))
          ) : (
            <div className="text-center w-full py-20 text-gray-500 text-lg">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-svg-download-png-9404367.png"
                className="w-60 mx-auto opacity-70"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
