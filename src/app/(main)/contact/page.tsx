"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="flex flex-col pt-24">

      {/* Cinematic Hero */}
      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-black overflow-hidden flex items-center justify-center">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-light text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-2xl">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
            Let&apos;s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Connect
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Whether you want to nominate a leader, partner with us, or simply say hello — 
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-6 md:px-10 bg-[#030303] relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", info: "Winsha Groups Headquarters\nSalem, Tamil Nadu, India" },
            { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "awards@winshagroups.com\ninfo@winsha.com" },
            { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+91 98765 43210\nMon - Fri, 9 AM - 6 PM IST" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,215,0,0.2)]"
            >
              {/* Shooting Neon Gold Lines (Exact Button Style - Continuous) */}
              <div className="absolute top-0 left-0 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-top 3s linear infinite' }} />
              <div className="absolute bottom-0 right-0 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFFFFF, #FFD700, transparent)', animation: 'shooting-bottom 3s linear infinite' }} />

              <div className="flex flex-col items-center text-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line group-hover:text-white/90 transition-colors duration-500">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-28 px-6 md:px-10 bg-white">
        {/* Dark architectural block behind the top half of the form */}
        <div className="absolute top-0 left-0 right-0 h-[60%] bg-accent rounded-b-[3rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">Send a Message</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">Reach Out</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 md:p-16 space-y-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-black/5 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Elegant gold trim at the top of the card */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-accent block">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b-2 border-black/10 py-3 text-accent text-base focus:border-gold outline-none transition-all placeholder:text-soft-grey/40"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-accent block">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b-2 border-black/10 py-3 text-accent text-base focus:border-gold outline-none transition-all placeholder:text-soft-grey/40"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-accent block">Company</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-black/10 py-3 text-accent text-base focus:border-gold outline-none transition-all placeholder:text-soft-grey/40"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-accent block">Inquiry Type</label>
                <select
                  className="w-full bg-transparent border-b-2 border-black/10 py-3 text-accent text-base focus:border-gold outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="nomination">Award Nomination</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-accent block">Your Message *</label>
              <textarea
                required
                className="w-full bg-transparent border-b-2 border-black/10 py-3 text-accent text-base focus:border-gold outline-none transition-all min-h-[140px] resize-none placeholder:text-soft-grey/40"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 py-5 bg-green-50 text-green-700 rounded-2xl font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                Thank you! We&apos;ll be in touch soon.
              </div>
            ) : (
              <button
                type="submit"
                className="btn-gold-solid flex items-center justify-center gap-3 w-full"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
