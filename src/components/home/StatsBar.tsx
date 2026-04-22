"use client";

import CountUp from "@/components/shared/CountUp";

const stats = [
  { end: 200, suffix: "+", label: "Nominations Received" },
  { end: 50, suffix: "+", label: "Awards Presented" },
  { end: 12, suffix: "", label: "Categories" },
  { end: 8, suffix: "", label: "Years of Legacy" },
];

export default function StatsBar() {
  return (
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-serif font-black text-gold italic">
              <CountUp end={item.end} suffix={item.suffix} duration={2200} />
            </p>
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase mt-2 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
