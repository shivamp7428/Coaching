import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center transition-all duration-700 z-[9999] ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-15 h-15 border-4 border-gray-300 border-t-teal-500 border-b-teal-500 rounded-full animate-spin"></div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0A0A0A] animate-pulse">
          SK<span className="font-light text-slate-500">Tech</span>
        </h1>
      </div>
    </div>
  );
}
