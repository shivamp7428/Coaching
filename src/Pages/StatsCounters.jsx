import React, { useEffect, useState } from "react";
const usePulseCounter = (maxValue, speed = 3000) => {
  const [value, setValue] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let start = performance.now();

    const animate = (now) => {
      const progress = (now - start) / speed;
      let eased = Math.min(progress, 1);

      eased = 1 - Math.pow(1 - eased, 3);

      if (!reverse) {
        setValue(Math.round(eased * maxValue));
        if (progress >= 1) {
          setReverse(true);
          start = now;
        }
      } else {
        setValue(Math.round((1 - eased) * maxValue));
        if (progress >= 1) {
          setReverse(false);
          start = now;
        }
      }

      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [maxValue, speed, reverse]);

  return value;
};

export default function StatsCounters() {
  const stats = [
    { max: 300, label: "Happy Students" },
    { max: 30, label: "Online Course" },
    { max: 4, label: "Year Experience" },
    { max: 5, label: "Professional Teacher" },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {stats.map((item, i) => {
          const val = usePulseCounter(item.max, 2000);

          return (
            <div key={i} className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold text-[#000066]">
                {val}
                <span className="ml-1 text-2xl">+</span>
              </h1>

              <p className="text-slate-600 mt-1 text-sm md:text-base font-medium">
                {item.label}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
}
