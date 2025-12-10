import React, { useState, useEffect } from "react";
import { MessageCircle, Heart, Search } from "lucide-react";

const categories = [
  "All",
  "General Discussion",
  "Career Tips",
  "Computer Basics",
  "Tech Issues",
  "Success Stories",
];

const ALL_POSTS = [
  {
    id: 1,
    title: "How to start learning programming effectively?",
    category: "General Discussion",
    content:
      "I want to start my coding journey. Any suggestions for beginners?",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    title: "Career roadmap after completing DCA?",
    category: "Career Tips",
    content:
      "I completed DCA recently. What should be my next skill to learn?",
    likes: 33,
    comments: 15,
  },
  {
    id: 3,
    title: "My first job as a computer operator! 🎉",
    category: "Success Stories",
    content:
      "Thanks to SK Ji Computer Coaching! I cracked my first interview!",
    likes: 89,
    comments: 12,
  },
  {
    id: 4,
    title: "Computer slow ho raha hai — what to do?",
    category: "Tech Issues",
    content:
      "System boot hone me time laga raha hai. Kaise fix karu?",
    likes: 15,
    comments: 3,
  },
  {
    id: 5,
    title: "Best books to learn MS Office?",
    category: "Computer Basics",
    content:
      "MS Word, Excel, PowerPoint ke liye best books recommend karo.",
    likes: 21,
    comments: 4,
  },
  {
    id: 6,
    title: "How to improve typing speed?",
    category: "Career Tips",
    content:
      "Currently typing speed 20 WPM hai. Improve kaise karu?",
    likes: 30,
    comments: 7,
  },
  {
    id: 7,
    title: "Facing installation issue in Python",
    category: "Tech Issues",
    content:
      "Python install karte waqt error aa raha hai… Koi help?",
    likes: 17,
    comments: 2,
  },
  {
    id: 8,
    title: "I built my first small website 😍",
    category: "Success Stories",
    content:
      "HTML + CSS se apna pehla website banaya!",
    likes: 56,
    comments: 10,
  },
  {
    id: 9,
    title: "Basic shortcut keys for Windows?",
    category: "Computer Basics",
    content:
      "Ctrl + ? type ke common shortcuts batayo!",
    likes: 19,
    comments: 6,
  },
  {
    id: 10,
    title: "Which course is best after ADCA?",
    category: "Career Tips",
    content:
      "Mujhe development me aana hai… kya karu?",
    likes: 40,
    comments: 9,
  },
];

const CommunityPage = () => {
  const [selectedCat, setSelectedCat] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      let posts = ALL_POSTS;

      if (selectedCat !== "All") {
        posts = posts.filter((p) => p.category === selectedCat);
      }

      if (search.trim()) {
        posts = posts.filter(
          (p) =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.content.toLowerCase().includes(search.toLowerCase())
        );
      }

      setVisible(posts.slice(0, 6));
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [selectedCat, search]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <div className="text-center">
        <h1 className="text-4xl  text-teal-600">Community</h1>
        <p className="text-gray-600 font-light mt-2">
          Ask questions, share knowledge, and grow together 
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-8">
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow border">
          <Search className="text-teal-600" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full font-light outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-5 py-2 rounded-full font-light border text-sm transition ${
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
        <p className="text-center mt-14 text-gray-500 text-xl">
          No posts found 😕
        </p>
      )}

      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-3">
        {!loading &&
          visible.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white border shadow-sm rounded-2xl hover:shadow-xl transition cursor-pointer"
            >
              <h2 className="text-xl  text-teal-700">
                {post.title}
              </h2>
              <p className="text-gray-600 font-light mt-2 text-sm line-clamp-3">
                {post.content}
              </p>

              <div className="flex items-center justify-between mt-5 text-gray-600">
                <span className="flex items-center gap-2">
                  <Heart size={18} className="text-red-500" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-teal-600" />
                  {post.comments}
                </span>
              </div>

              <p className="mt-3 text-xs bg-teal-100 text-teal-600 inline-block px-3 py-1 rounded-full">
                {post.category}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommunityPage;
