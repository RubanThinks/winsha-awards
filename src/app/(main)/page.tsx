"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Award, 
  ArrowRight, 
  Star
} from "lucide-react";
import ImageCard from "@/components/shared/ImageCard";
import Hero from "@/components/home/Hero";
import { getFeaturedWinners } from "@/app/actions/firestore";

export default function HomePage() {
  const [winners, setWinners] = useState<any[]>([]);

  useEffect(() => {
    const fetchWinners = async () => {
      const data = await getFeaturedWinners(3);
      setWinners(data);
    };
    fetchWinners();
  }, []);

  const partners = [
    { name: "Krishna", role: "Partner" },
    { name: "Universale", role: "Partner" },
    { name: "Branding & Digital Marketing Partners", role: "Partners" },
    { name: "Latlon Technologies", role: "Partner" },
    { name: "Hospitality Partner", role: "Partner" },
    { name: "Fortune Pandiyan Hotel Madurai", role: "Partner" }
  ];

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Media / Promotion Partners */}
      <section className="py-32 px-6 md:px-10 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Collaborators</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-white italic">Media & Promotion Partners</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* KRISHNA */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-gold/[0.05] transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase text-center w-full bg-[#E57A3D] py-1.5 text-white shadow-sm">Media Partner</span>
              <div className="bg-[#790000] border-[4px] border-[#FFFF00] rounded-md px-6 py-2 shadow-lg w-full max-w-[200px] flex items-center justify-center mt-auto mb-auto">
                <span className="text-white text-3xl font-bold tracking-wider font-sans">KRISHNA</span>
              </div>
            </div>

            {/* UTV UNIVERSAL */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-gold/[0.05] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase text-center w-full bg-[#E57A3D] py-1.5 text-white shadow-sm">Media Partner</span>
              <div className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm w-full max-w-[160px] flex flex-col items-center justify-center bg-white mt-auto mb-auto">
                <div className="flex items-center gap-0.5 leading-none mb-1">
                  <span className="text-[#5a953e] text-[40px] font-black font-sans tracking-tighter">U</span>
                  <span className="text-[#a88e5b] text-[32px] font-black font-sans mt-2 tracking-tighter">TV</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#3b3a53] text-[9px] font-bold tracking-[0.1em] uppercase">Universal</span>
                  <div className="w-1.5 h-1.5 bg-[#e37d22]" />
                </div>
              </div>
            </div>

            {/* LATLON TECHNOLOGIES */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-gold/[0.05] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase text-center w-full bg-[#E57A3D] py-1.5 px-2 text-white shadow-sm leading-tight">Branding & Digital Marketing Partner</span>
              <div className="w-full max-w-[240px] flex items-center justify-center gap-3 mt-auto mb-auto bg-white py-4 px-2 rounded-xl">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <div className="absolute top-[8px] left-0 w-full h-[3px] bg-[#4A5568]" />
                  <div className="absolute top-[20px] left-0 w-full h-[3px] bg-[#3182CE]" />
                  <div className="absolute top-0 left-[8px] w-[3px] h-full bg-[#3182CE] -skew-x-12" />
                  <div className="absolute top-0 left-[20px] w-[3px] h-full bg-[#4A5568] -skew-x-12" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#3182CE] text-2xl font-light tracking-widest font-sans uppercase leading-none mb-1">Latlon</span>
                  <span className="text-[#4A5568] text-[9px] font-medium tracking-[0.2em] uppercase leading-none">Technologies</span>
                </div>
              </div>
            </div>

            {/* FORTUNE PANDIYAN HOTEL */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-gold/[0.05] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase text-center w-full bg-[#E57A3D] py-1.5 text-white shadow-sm">Hospitality Partner</span>
              <div className="w-full max-w-[200px] flex flex-col items-center justify-center mt-auto mb-auto bg-white py-4 px-4 rounded-xl">
                <div className="flex items-baseline relative">
                  <span className="text-[#1A365D] text-xl font-serif font-bold tracking-wider">F</span>
                  <span className="text-[#1A365D] text-xl font-serif font-bold tracking-wider relative z-10">O</span>
                  <div className="absolute top-0 left-[12px] w-6 h-6 rounded-full border-t-4 border-[#C69C6D] -rotate-45 z-0" />
                  <span className="text-[#1A365D] text-xl font-serif font-bold tracking-wider">RTUNE</span>
                </div>
                <div className="flex items-center gap-2 mt-1 mb-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M4 22H20V20H18V12H20V10H16V6H14V2H10V6H8V10H4V12H6V20H4V22ZM10 4H14V6H10V4ZM8 8H16V10H8V8ZM8 12H10V20H8V12ZM14 12H16V20H14V12Z"/></svg>
                  <div className="flex flex-col items-start leading-none gap-0.5">
                    <span className="text-black text-[12px] font-black font-sans uppercase tracking-[0.2em]">Pandiyan</span>
                    <span className="text-black text-[10px] font-black font-sans uppercase tracking-[0.2em]">Hotel</span>
                  </div>
                </div>
                <div className="w-full border-t border-black/20 mt-1 pt-1 text-center">
                  <span className="text-[#1A365D] text-[8px] font-medium tracking-[0.3em] uppercase">Madurai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Winners */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">Hall of Fame</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-accent italic">Recent Winners</h2>
            </div>
            <Link href="/gallery" className="btn-gold-light !text-[10px] !px-6 !py-3">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.length > 0 ? (
              winners.slice(0, 3).map((winner: any, i: number) => (
                <ImageCard 
                  key={winner.id} 
                  item={winner} 
                  aspectRatio="portrait" 
                  delay={i * 150} 
                  isGallery={false}
                />
              ))
            ) : (
              [1, 2, 3].map((item) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={item * 150}
                  className="aspect-[4/5] rounded-3xl bg-secondary border border-black/5 flex flex-col items-center justify-center gap-4"
                >
                  <Award className="w-14 h-14 text-accent/15" />
                  <p className="text-accent/40 text-sm font-bold uppercase tracking-widest">Coming Soon</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 bg-accent">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-white italic mb-6">
            Know Someone <span className="text-gold">Exceptional?</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-medium mb-10 max-w-2xl mx-auto">
            Nominate a visionary leader or groundbreaking company for the next WINSHA Awards ceremony.
          </p>
          <Link href="/contact" className="btn-cta">
            Submit a Nomination
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
