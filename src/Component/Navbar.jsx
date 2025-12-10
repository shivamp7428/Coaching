import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-teal-500 text-gray-100 text-xs flex justify-center font-bold p-2 transition-all duration-300 ${
          isScrolled ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        SK Computer Coaching Pvt. Ltd.
      </div>

      <div
        className={`w-full bg-white z-50   border-gray-100 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 border-b" : "relative"
        }`}
      >
        <nav className="flex items-center justify-between md:px-30 px-6 py-4 relative">
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <h1 className="text-4xl font-bold tracking-tight text-[#0A0A0A]">
              SK<span className="font-light text-slate-500">Tech</span>
            </h1>
          </a>

          <div className="hidden md:flex gap-10 font-light text-slate-500 items-center">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/about" className="hover:text-black">About Us</a>
            <a href="/services" className="hover:text-black">Services</a>
            <a href="/blog" className="hover:text-black">Blog</a>
            <a href="/login" className="hover:text-black">Login</a>
            <a
              href="/contact"
              className="hover:bg-teal-500 px-4 py-2 border border-teal-500 hover:text-white flex justify-center items-center"
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-3xl font-bold cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-white w-full px-6 py-4 flex flex-col gap-4 font-light text-slate-500 shadow-lg">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/about" className="hover:text-black">About Us</a>
            <a href="/services" className="hover:text-black">Services</a>
            <a href="/blog" className="hover:text-black">Blog</a>
            <a href="/login" className="hover:text-black">Login</a>
            <a
              href="contact"
              className="hover:bg-teal-500 px-4 py-2 border border-teal-500 hover:text-white flex justify-center items-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </>
  );
}
