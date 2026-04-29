import { Metadata } from "next";
import { Award, Star, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awards | WINSHA Awards",
  description: "Explore the award categories at WINSHA Awards, celebrating excellence across various industries.",
};

export default function AwardsPage() {
  const categories = [
    "Restaurants", "Hotels", "Salons", "Mobile Shops", "Home Appliances", "Furniture Shops",
    "Footwear Shops", "Travels", "Gardening", "Agriculture", "Stationery Shops", "Printing Press",
    "Security Services", "Garments Manufacturing", "Finance Companies", "Car Accessories",
    "Mechanical Industry", "Training Institutes", "Media / Local Channels", "Pets Shop",
    "Home Services", "Real Estate", "Flower Shop", "Computer Sales", "Wedding Planners",
    "Modular Kitchen", "Currency Exchange", "Photography", "Transporters", "Advertising Agencies",
    "Car Sales", "Outdoor Caterers", "Electrical & Hardware", "Car Service", "Event Management",
    "Opticals", "Two Wheeler Sales", "Paint Shops", "Two Wheeler Service", "Textile Shops",
    "Tiles Showroom", "Fire Safety Services", "Logistics"
  ];

  const specialTitles = [
    "Education Excellence Award", "Hospitality Excellence Award", "Service Excellence Award",
    "Technology Excellence Award", "Global Quality Award", "Best Employer of Choice",
    "Appreciation Award", "Achievement Award", "Young Entrepreneur Award", "Brand of the Year",
    "Outstanding Business Leader of the Year", "Outstanding Company of the Year", "Best Small Business",
    "Best Medium Sized Business", "Best Large Business", "Best Financial Advisor of the Year"
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
            Distinctions That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Define Excellence
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Each category represents a unique facet of achievement. Our awards celebrate individuals, companies, startups, and organizations that create meaningful impact in their sectors.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 md:px-10 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-accent italic">Industry Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 10) * 50}
                className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-black/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-accent font-medium">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Titles Grid */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">Special Titles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-accent italic">Special Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialTitles.map((title, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 100}
                className="group relative p-8 rounded-3xl bg-secondary border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                    <Star className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-black text-accent italic group-hover:text-gold transition-colors duration-300">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 bg-accent">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white italic mb-6">
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
