import { Metadata } from "next";
import { Award, Star, Users, Briefcase, Gem, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awards | Winsha Awards",
  description: "Explore the award categories at Winsha Awards — from Young Entrepreneur to Lifetime Achievement, each distinction celebrates a unique facet of excellence.",
};

export default function AwardsPage() {
  const categories = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Young Entrepreneur",
      desc: "Recognizing visionaries under 35 who are disrupting industries and setting new benchmarks for innovation and ambition.",
      color: "bg-amber-50",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Lifetime Achievement",
      desc: "Honoring decades of sustained excellence, leadership, and contribution to building world-class organizations.",
      color: "bg-blue-50",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Leader",
      desc: "For those who push the limits of technology, business models, and creative solutions to solve real-world problems.",
      color: "bg-violet-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      desc: "Celebrating businesses that give back — investing in education, healthcare, environment, and social upliftment.",
      color: "bg-green-50",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Excellence",
      desc: "Awarded to organizations that demonstrate exceptional governance, culture, and operational brilliance.",
      color: "bg-rose-50",
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Emerging Brand",
      desc: "For startups and newcomers that have rapidly gained market trust and consumer confidence in their first five years.",
      color: "bg-teal-50",
    },
  ];

  const process = [
    { step: "01", title: "Nomination", desc: "Anyone can nominate a deserving individual or organization through our digital platform." },
    { step: "02", title: "Review", desc: "An independent panel of industry experts evaluates each nomination on merit and impact." },
    { step: "03", title: "Shortlist", desc: "Finalists are announced across all categories, creating anticipation for the ceremony." },
    { step: "04", title: "Ceremony", desc: "Winners are celebrated at a grand ceremony — a night of prestige, recognition, and legacy." },
  ];

  return (
    <div className="flex flex-col pt-24">

      {/* Cinematic Hero */}
      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-black overflow-hidden flex items-center justify-center">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-light text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-2xl">
            Award Categories
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
            Distinctions That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Define Excellence
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Each category represents a unique facet of achievement. Our awards go beyond 
            revenue — they recognize vision, integrity, and lasting impact.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 md:px-10 section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              id={cat.title.toLowerCase().replace(/\s+/g, '-')}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="frozen-card bg-white p-10 group flex flex-col scroll-mt-32"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-400`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-serif font-black text-accent italic mb-3">{cat.title}</h3>
              <p className="text-soft-grey text-sm leading-relaxed flex-grow">{cat.desc}</p>
              <Link
                href="/contact"
                className="btn-navy !px-6 !py-2.5 mt-auto self-start"
              >
                Nominate
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-accent italic">Selection Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="text-center group"
              >
                <span className="text-6xl font-serif font-black text-gold/20 group-hover:text-gold transition-colors italic block mb-4">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-accent mb-3">{p.title}</h4>
                <p className="text-soft-grey text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 bg-accent">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic mb-6">
            Ready to <span className="text-gold">Nominate?</span>
          </h2>
          <p className="text-white/60 text-base font-medium mb-10 max-w-xl mx-auto">
            Know a leader who deserves recognition? Submit your nomination today.
          </p>
          <Link
            href="/contact"
            className="btn-navy"
          >
            Start Nomination
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
