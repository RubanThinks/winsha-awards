import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, TrendingUp, ShieldCheck, Megaphone, Users, Award, Star, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Winsha Awards",
  description: "Learn about WINSHA Awards — a recognition platform that honors excellence in business, entrepreneurship, service, innovation, and industry leadership.",
};

export default function AboutPage() {
  const whyParticipate = [
    { text: "Increase brand recognition", icon: <TrendingUp className="w-5 h-5 text-gold" /> },
    { text: "Build trust and credibility", icon: <ShieldCheck className="w-5 h-5 text-gold" /> },
    { text: "Gain publicity and media exposure", icon: <Megaphone className="w-5 h-5 text-gold" /> },
    { text: "Create new business opportunities", icon: <Users className="w-5 h-5 text-gold" /> },
    { text: "Network with industry leaders", icon: <Share2 className="w-5 h-5 text-gold" /> },
    { text: "Motivate your team", icon: <Star className="w-5 h-5 text-gold" /> },
    { text: "Receive recognition for achievements", icon: <Award className="w-5 h-5 text-gold" /> },
    { text: "Strengthen customer confidence", icon: <ShieldCheck className="w-5 h-5 text-gold" /> },
    { text: "Benchmark against top businesses", icon: <TrendingUp className="w-5 h-5 text-gold" /> },
    { text: "Showcase excellence in your field", icon: <Star className="w-5 h-5 text-gold" /> },
  ];

  const benefits = [
    "Trophy / Shield / Recognition Certificate",
    "Media promotions",
    "Newspaper promotions",
    "Local channel promotions",
    "Brand awareness support",
    "Product and service promotion",
    "Reputation enhancement",
    "Stakeholder trust building",
    "Showcase business values",
    "Employee morale boost",
    "Recognition as industry leader",
    "Stronger market identity",
    "Business growth opportunities",
    "Social media visibility",
    "Featured promotions",
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
              About WINSHA Awards
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
              Make Meaningful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                Differences
              </span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-8 drop-shadow-md">
              <strong className="text-white">WINSHA Awards</strong> is a recognition platform that honors excellence in business, entrepreneurship, service, innovation, and industry leadership. 
              The awards celebrate individuals, companies, startups, and organizations that create meaningful impact in their sectors.
            </p>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-10 drop-shadow-md">
              WINSHA Awards helps businesses gain visibility, trust, recognition, and stronger market presence through prestigious award programs.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative" data-aos="fade-left" data-aos-duration="1000">
            {/* Dark glassmorphic card */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 flex flex-col items-center text-center shadow-2xl rounded-3xl">
              <Image
                src="/winsha-logo.jpg"
                alt="WINSHA Awards"
                width={320}
                height={200}
                className="rounded-2xl object-cover shadow-[0_0_40px_rgba(184,134,11,0.2)] mb-10"
              />
              <p className="text-white font-serif text-2xl md:text-3xl font-black italic leading-snug drop-shadow-lg">
                &ldquo;Creating meaningful impact in every sector.&rdquo;
              </p>
              <p className="text-gold-light text-[10px] mt-6 tracking-[0.3em] uppercase font-bold">— WINSHA Awards</p>
            </div>
            
            {/* Decorative background element behind the card */}
            <div className="absolute -inset-4 border border-gold/20 rounded-[2.5rem] -z-10 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-32 px-6 md:px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Advantages</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-white italic">Why Participate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyParticipate.map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex items-center gap-5 hover:bg-gold/[0.05] transition-colors duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h4 className="text-white font-medium text-lg">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participant Benefits */}
      <section className="py-32 px-6 md:px-10 bg-[#020202] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">Rewards</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-white italic">Participant Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 group" data-aos="fade-up" data-aos-delay={i * 50}>
                <CheckCircle2 className="w-6 h-6 text-gold/50 group-hover:text-gold shrink-0 transition-colors mt-0.5" />
                <p className="text-white/70 font-medium group-hover:text-white transition-colors text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
