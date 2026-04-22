import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Target, Eye, Heart, ArrowRight, Building2, Globe, Users, Users2, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Winsha Awards",
  description: "Learn about Winsha Groups and the mission behind the Winsha Awards — championing business excellence and innovation since 2018.",
};

export default function AboutPage() {
  const values = [
    { icon: <Award className="w-7 h-7" />, title: "Excellence", desc: "We set the global standard for what true business leadership means." },
    { icon: <Target className="w-7 h-7" />, title: "Integrity", desc: "Every nomination and selection is transparent, fair, and merit-based." },
    { icon: <Eye className="w-7 h-7" />, title: "Vision", desc: "We champion leaders whose vision extends beyond quarterly results." },
    { icon: <Heart className="w-7 h-7" />, title: "Impact", desc: "Real change in real communities — that's what we celebrate." },
  ];

  const businessVerticals = [
    { icon: <Building2 className="w-6 h-6" />, title: "Real Estate & Construction", desc: "Premium residential and commercial projects built with precision engineering and modern design." },
    { icon: <Globe className="w-6 h-6" />, title: "International Trade", desc: "Global importexport operations connecting markets across Asia, Europe, and the Middle East." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Technology Solutions", desc: "Cutting-edge software development, digital transformation consulting, and IT infrastructure." },
    { icon: <Users className="w-6 h-6" />, title: "Community Development", desc: "Social impact initiatives in education, healthcare, and sustainable community upliftment." },
  ];

  const timeline = [
    { year: "2018", event: "Winsha Groups establishes the Awards division to recognize business excellence across Tamil Nadu." },
    { year: "2020", event: "Expanded to pan-India nominations, receiving entries from 12 states and 3 union territories." },
    { year: "2022", event: "Introduced 'Innovation Leader' and 'Emerging Brand' categories; 150+ nominations received." },
    { year: "2024", event: "International expansion — nominations from 15+ countries. Over 200 entries processed." },
    { year: "2026", event: "Launch of the digital-first nomination platform and first-ever global live-streamed ceremony." },
  ];

  return (
    <div className="flex flex-col pt-24">

      {/* Cinematic Hero */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 bg-black overflow-hidden flex items-center justify-center">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-light text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-2xl">
              About Winsha Groups
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
              Building Empires <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                of Excellence
              </span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-8 drop-shadow-md">
              <strong className="text-white">Winsha Groups</strong> is a diversified business conglomerate headquartered 
              in Coimbatore, Tamil Nadu, India. With operations spanning real estate, international trade, 
              technology, and community development, our group has been at the forefront of 
              transformational business for over a decade.
            </p>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-10 drop-shadow-md">
              The <strong className="text-gold">Winsha Awards</strong> is our flagship initiative — a global recognition 
              platform that celebrates visionary leaders, innovative entrepreneurs, and impactful organisations 
              who set new benchmarks in their respective fields.
            </p>
            <Link href="/awards" className="btn-gold-solid">
              Explore Awards
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative" data-aos="fade-left" data-aos-duration="1000">
            {/* Dark glassmorphic card for the quote */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 flex flex-col items-center text-center shadow-2xl rounded-3xl">
              <Image
                src="/winsha-logo.jpg"
                alt="Winsha Groups"
                width={320}
                height={200}
                className="rounded-2xl object-cover shadow-[0_0_40px_rgba(184,134,11,0.2)] mb-10"
              />
              <p className="text-white font-serif text-2xl md:text-3xl font-black italic leading-snug drop-shadow-lg">
                &ldquo;Excellence is not an act,<br />but a habit.&rdquo;
              </p>
              <p className="text-gold-light text-[10px] mt-6 tracking-[0.3em] uppercase font-bold">— Winsha Groups Manifesto</p>
            </div>
            
            {/* Decorative background element behind the card */}
            <div className="absolute -inset-4 border border-gold/20 rounded-[2.5rem] -z-10 hidden md:block" />
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

      {/* Mission & Vision */}
      <section className="py-32 px-6 md:px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group relative rounded-[40px] bg-[#0a0a0a] border border-white/5 p-12 md:p-16 overflow-hidden" data-aos="fade-up">
            {/* Shooting Neon Gold Lines */}
            <div className="absolute top-0 left-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3s linear infinite' }} />
            
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Mission</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-white italic mb-6">Why We Exist</h3>
            <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              To identify, celebrate, and elevate the individuals and organisations whose 
              commitment to excellence creates lasting value for industries and communities worldwide. 
            </p>
          </div>
          <div className="group relative rounded-[40px] bg-[#0a0a0a] border border-white/5 p-12 md:p-16 overflow-hidden" data-aos="fade-up" data-aos-delay="150">
            {/* Shooting Neon Gold Lines */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 3s linear infinite' }} />
            
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Vision</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-white italic mb-6">Where We&apos;re Heading</h3>
            <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              To become the world&apos;s most respected platform for business recognition — 
              where merit speaks louder than marketing and impact outweighs influence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values — Architectural Showcase */}
      <section className="py-32 px-6 md:px-10 bg-[#030303] relative overflow-hidden">
        {/* Structural Background Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gold" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gold" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gold" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-6 block">Foundation</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-white italic leading-[0.85]">
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-white/5" data-aos="fade-up">
            {[
              { num: "01", title: "Excellence", icon: <Award className="w-5 h-5" />, desc: "Setting the global standard for what true business leadership means." },
              { num: "02", title: "Integrity", icon: <Target className="w-5 h-5" />, desc: "Every nomination and selection is transparent, fair, and merit-based." },
              { num: "03", title: "Vision", icon: <Eye className="w-5 h-5" />, desc: "We champion leaders whose vision extends beyond quarterly results." },
              { num: "04", title: "Impact", icon: <Heart className="w-5 h-5" />, desc: "Real change in real communities — that's what we celebrate." },
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — The Legacy Sequence */}
      <section className="py-32 px-6 md:px-10 bg-[#020202] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-6 block">Journey</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-white italic leading-[0.85]">
              The Legacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Sequence</span>
            </h2>
          </div>

          <div className="relative space-y-0">
            {/* Vertical Power Beam */}
            <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 overflow-hidden">
               <div className="w-full h-full bg-gradient-to-b from-gold via-white to-gold animate-pulse" />
            </div>

            {timeline.map((item, i) => (
              <div
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 200}
                className={`relative flex items-center mb-20 md:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Central Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#020202] bg-gold shadow-[0_0_20px_rgba(255,215,0,0.5)] z-20" />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-gold/[0.02]">
                    {/* Shooting Neon Gold Line */}
                    <div className="absolute top-0 left-0 w-[70%] h-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3s linear infinite' }} />
                    
                    <span className="text-3xl md:text-4xl font-serif font-black text-gold mb-3 block italic tracking-tighter">
                      {item.year}
                    </span>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-500">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
