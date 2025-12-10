// BlogDetail.jsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, ThumbsUp, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const blogId = Number(id);
  const [likes, setLikes] = useState(0);

  const posts = [
    {
      id: 1,
      title: "Top 10 Benefits of Learning Computer in 2025",
      category: "Computer Basics",
      date: "Dec 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxAfIb7D1UADns9-qi-B-BPTUmwp22Xfd6g&s",
      content: `
        Learning computers in 2025 is no longer optional—it's necessary.
        From school to office work, everything requires digital literacy.

        ⭐ Why computers matter:
        • Faster job opportunities  
        • Better salary growth  
        • Strong communication & presentation skills  
        • Online earning opportunities  

        🎯 Conclusion:
        Starting early gives you a massive advantage.
      `,
    },
    {
      id: 2,
      title: "How to Start a Career in Digital Accounting",
      category: "Career Tips",
      date: "Nov 2025",
      img: "https://static.resumegiants.com/wp-content/uploads/sites/25/2023/01/18154623/shutterstock_1211905921-1-736x414.webp",
      content: `
        Digital Accounting is one of the fastest-growing fields.

        ✔ Skills you need:
        • Tally Prime  
        • GST  
        • Excel Reporting  
        • Billing & Inventory  

        Job Roles:
        • Accountant  
        • GST Assistant  
        • Billing Operator  
      `,
    },

    {
      id: 3,
      title: "Why MS Excel Is the Most Powerful Office Tool",
      category: "Software Skills",
      date: "Oct 2025",
      img: "https://internationalschooling.org/0-Highly-Valued-Basic-Computer-Skills-for-the-Future.jpg",
      content: `
        Excel is the king of productivity.

         What Excel can do:
        • Reports Automation  
        • Data Sorting  
        • Business Dashboards  
        • Financial Management  

        Learning Excel gives you career superpowers.
      `,
    },

    {
      id: 4,
      title: "Essential Computer Skills Every Student Must Learn",
      category: "Computer Basics",
      date: "Oct 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUpgndqIjnGb0WkUxgDpcCpgWlhk1L7z0cA&s",
      content: `
        Students must learn basic computer skills to survive in the digital era.

        Essentials:
        • MS Office  
        • Typing Skills  
        • Email Writing  
        • Online Safety  

        These skills help in jobs, education, and personal growth.
      `,
    },

    {
      id: 5,
      title: "How to Prepare for IT Job Interviews",
      category: "Career Tips",
      date: "Aug 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsBI2C7x9yXKSgv6Bhprf5F7Ck2djaEzn_g&s",
      content: `
        IT interviews require planning + practice.

        Must prepare:
        • Resume  
        • Projects  
        • Communication  
        • Basic Coding Concepts  
      `,
    },

    {
      id: 6,
      title: "Top Software Tools Used in Offices",
      category: "Software Skills",
      date: "July 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6WoFA3cW-HViyi5uswnvAYUvTbdRjBVh3w&s",
      content: `
        Modern companies use powerful software tools.

        Popular Tools:
        • MS Office  
        • Google Workspace  
        • Slack  
        • Trello  
        • Zoom  

        Knowing these improves workflow and job performance.
      `,
    },

    {
      id: 7,
      title: "Latest Tech Trends Students Should Know",
      category: "Tech Knowledge",
      date: "June 2025",
      img: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/10/Technical-Skills_How-to-Them-Master-in-2022.jpg.webp",
      content: `
        2025 Technology Trends:

        • AI & Automation  
        • Blockchain  
        • Cloud Computing  
        • AR/VR  

        Learning these keeps you ahead in the tech race.
      `,
    },

    {
      id: 8,
      title: "How Typing Speed Helps You Get Jobs Faster",
      category: "Computer Basics",
      date: "May 2025",
      img: "https://www.shutterstock.com/image-photo/back-basics-simplifying-business-procedures-600nw-2363218041.jpg",
      content: `
        Typing speed boosts confidence and job performance.

        Benefits:
        • Faster Documentation  
        • Quick Data Entry  
        • Improved Accuracy  
        • Better Office Productivity  
      `,
    },

    {
      id: 9,
      title: "Your First Step Into the World of Programming",
      category: "Tech Knowledge",
      date: "Apr 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0aO4NYVFmO7h8rsHQmrDdRugyWq37sucbw&s",
      content: `
        Start programming with basics:

        • Logic Building  
        • Simple Syntax  
        • Mini Projects  
        • Debugging  

        Programming opens unlimited career options.
      `,
    },

    {
      id: 10,
      title: "Digital Skills Required for Office Jobs",
      category: "Career Tips",
      date: "Apr 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0aO4NYVFmO7h8rsHQmrDdRugyWq37sucbw&s",
      content: `
        Office jobs need basic digital skills:

        • Email Writing  
        • Excel  
        • Google Docs  
        • Online Meetings  
        • Communication Skills  
      `,
    },
  ];

  const blog = posts.find((p) => p.id === blogId);

  if (!blog) return <div className="pt-24 text-center text-gray-500 text-xl">Blog Not Found</div>;

  const related = posts.filter((p) => p.category === blog.category && p.id !== blog.id);

  const nextBlog = posts.find((p) => p.id === blogId + 1);
  const prevBlog = posts.find((p) => p.id === blogId - 1);

  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">

      <Link to="/blog" className="text-teal-600 flex items-center gap-2 hover:underline">
        <ArrowLeft /> Back to Blog
      </Link>

    
      <h1 className="text-4xl  text-teal-700 mt-6">{blog.title}</h1>

      <div className="flex gap-6 mt-3 text-gray-600">
        <p className="flex items-center gap-2"><Tag className="w-4" /> {blog.category}</p>
        <p className="flex items-center gap-2"><Calendar className="w-4" /> {blog.date}</p>
      </div>

      <div className="flex gap-5 mt-4">
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg"
        >
          <ThumbsUp className="w-5" /> {likes} Likes
        </button>

        <button
          onClick={() => navigator.share({ title: blog.title, text: blog.content })}
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
        >
          <Share2 className="w-5" /> Share
        </button>
      </div>

      <p className="text-gray-700 font-light leading-relaxed text-lg whitespace-pre-line mt-8">
        {blog.content}
      </p>

      <div className="flex justify-between mt-12">
        {prevBlog ? (
          <Link to={`/blog/${prevBlog.id}`} className="flex items-center gap-2 text-teal-600">
            <ChevronLeft /> Previous
          </Link>
        ) : <span />}

        {nextBlog ? (
          <Link to={`/blog/${nextBlog.id}`} className="flex items-center gap-2 text-teal-600">
            Next <ChevronRight />
          </Link>
        ) : <span />}
      </div>

      <h2 className="text-2xl  text-teal-700 mt-16 mb-6">Related Posts</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {related.map((r) => (
          <Link
            key={r.id}
            to={`/blog/${r.id}`}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
             <img src={r.img} className="rounded-xl mb-3 w-full h-40 md:h-60" />
            <h3 className="text-lg  text-teal-700">{r.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{r.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
