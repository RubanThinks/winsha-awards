"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Star, 
  Briefcase, 
  Users, 
  ArrowRight, 
  Building2, 
  Globe, 
  Lightbulb, 
  Users2,
  ChevronRight,
  Sparkles,
  Trophy
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

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Pillars — Architectural Showcase */}
      <section className="py-32 px-6 md:px-10 bg-[#050505] relative overflow-hidden">
        {/* Structural Background Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gold" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gold" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gold" />
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gold" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div data-aos="fade-right">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-6 block">The Foundation</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-white italic leading-[0.85]">
                Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Pillars</span>
              </h2>
            </div>
            <p className="max-w-md text-white/40 text-sm font-medium leading-relaxed mb-4" data-aos="fade-left">
              These core values form the structural integrity of Winsha Groups, 
              ensuring that every vision we celebrate is built upon a legacy of absolute excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-white/5" data-aos="fade-up">
            {[
              { num: "01", title: "Excellence", icon: <Award className="w-5 h-5" />, desc: "Setting the gold standard in every endeavor." },
              { num: "02", title: "Innovation", icon: <Star className="w-5 h-5" />, desc: "Architecting the future through creative vision." },
              { num: "03", title: "Leadership", icon: <Briefcase className="w-5 h-5" />, desc: "Guiding industries with integrity and purpose." },
              { num: "04", title: "Community", icon: <Users className="w-5 h-5" />, desc: "Building empires that empower the people." },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative p-10 md:p-14 border-r border-b border-white/5 transition-all duration-700 hover:bg-gold/[0.03] overflow-hidden ${i % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                {/* Shooting Neon Gold Lines (Exact Button Style - Continuous) */}
                <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3s linear infinite' }} />
                <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 3s linear infinite' }} />
                
                <div className="relative">
                  <span className="block font-serif text-5xl sm:text-6xl md:text-8xl font-black italic text-white/5 group-hover:text-gold/10 transition-colors duration-700 mb-8">
                    {item.num}
                  </span>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif font-black text-white italic group-hover:text-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
                
                {/* Floating Corner Accent */}
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verticals — The Empire Story */}
      <section className="py-32 px-6 md:px-10 bg-[#020202] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white italic mb-6">
              The <span className="text-gold">Empire</span>
            </h2>
            <div className="w-24 h-1 bg-gold mb-8" />
            <p className="text-white/40 max-w-2xl font-medium leading-relaxed">
              From the foundations of global trade to the heights of technological innovation, 
              Winsha Groups architects a future defined by diverse excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Real Estate - The Foundation (Large Vertical) */}
            <div 
              className="md:col-span-7 group relative rounded-[40px] bg-[#080808] border border-white/5 p-10 md:p-14 overflow-hidden min-h-[450px] flex flex-col justify-end"
              data-aos="fade-right"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <Building2 className="w-40 h-40 text-gold" />
              </div>
              {/* Shooting Neon Gold Lines */}
              <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3s linear infinite' }} />
              <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 3s linear infinite' }} />
              
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Architectural Legacy</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-6">Real Estate & Construction</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
                  Precision-engineered residential and commercial marvels that redefine modern living landscapes.
                </p>
              </div>
            </div>

            {/* International Trade - The Network */}
            <div 
              className="md:col-span-5 group relative rounded-[40px] bg-[#0a0a0a] border border-white/5 p-10 overflow-hidden min-h-[450px] flex flex-col"
              data-aos="fade-left"
            >
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C5A028 1px, transparent 0)', backgroundSize: '30px 30px' }} />
              </div>
              {/* Shooting Neon Gold Lines */}
              <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 4s linear infinite' }} />
              <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 4s linear infinite' }} />
              
              <div className="mt-auto relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-black text-white mb-4">International Trade</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Connecting continents through strategic import-export operations across the Middle East, Asia, and Europe.
                </p>
              </div>
            </div>

            {/* Technology - The Future */}
            <div 
              className="md:col-span-5 group relative rounded-[40px] bg-[#0a0a0a] border border-white/5 p-10 overflow-hidden min-h-[450px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-[1px] h-40 bg-gold" />
                <div className="absolute top-10 left-10 w-40 h-[1px] bg-gold" />
              </div>
              {/* Shooting Neon Gold Lines */}
              <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3.5s linear infinite' }} />
              <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 3.5s linear infinite' }} />

              <div className="h-full flex flex-col relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-black text-white mb-4">Technology Solutions</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Architecting digital transformations through cutting-edge software and cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Community - The Heart */}
            <div 
              className="md:col-span-7 group relative rounded-[40px] bg-[#080808] border border-white/5 p-10 md:p-14 overflow-hidden min-h-[450px] flex flex-col justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
               <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
              {/* Shooting Neon Gold Lines */}
              <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 5s linear infinite' }} />
              <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 5s linear infinite' }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-8">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-6">Community Development</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
                  Empowering lives through sustainable impact initiatives in education, healthcare, and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Winners */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6" data-aos="fade-up">
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
            Nominate a visionary leader or groundbreaking company for the next Winsha Awards ceremony.
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
