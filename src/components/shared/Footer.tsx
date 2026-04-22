import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-10 pb-6 px-6 md:px-10 overflow-hidden footer-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/winsha-logo.jpg"
                alt="Winsha Groups"
                width={48}
                height={48}
                className="rounded-xl object-cover shadow-lg"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-serif font-black tracking-tight text-white italic leading-none">Winsha</span>
                <span className="text-2xl font-serif font-black tracking-tight text-gold italic leading-none">Awards</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              A flagship initiative by Winsha Groups — elevating business excellence on a global scale. We identify and celebrate the visionaries who redefine the corporate landscape.
            </p>
            <div className="flex items-center space-x-5">
              <a href="#" className="text-gold hover:text-white transition-colors duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors duration-300" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-gold pl-4">Navigate</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-gold text-sm font-medium transition-colors">Digital Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold text-sm font-medium transition-colors">Our Legacy</Link></li>
              <li><Link href="/awards" className="text-gray-400 hover:text-gold text-sm font-medium transition-colors">Distinctions</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-gold text-sm font-medium transition-colors">Signature Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold text-sm font-medium transition-colors">Connect With Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-gold pl-4">Distinctions</h4>
            <ul className="space-y-4">
              <li><Link href="/awards#young-entrepreneur" className="text-gray-400 text-sm font-medium hover:text-gold transition-colors">Young Entrepreneur</Link></li>
              <li><Link href="/awards#lifetime-achievement" className="text-gray-400 text-sm font-medium hover:text-gold transition-colors">Lifetime Achievement</Link></li>
              <li><Link href="/awards#innovation-leader" className="text-gray-400 text-sm font-medium hover:text-gold transition-colors">Innovation Leader</Link></li>
              <li><Link href="/awards#community-impact" className="text-gray-400 text-sm font-medium hover:text-gold transition-colors">Community Impact</Link></li>
              <li><Link href="/awards#emerging-brand" className="text-gray-400 text-sm font-medium hover:text-gold transition-colors">Emerging Brand</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-gold pl-4">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-gold w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm font-medium">Winsha Groups,<br />Coimbatore, Tamil Nadu,<br />India.</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">awards@winshagroups.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">+91 90475 90675</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Winsha Groups. Legacy of Excellence.
          </p>
          <div className="flex items-center space-x-8 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-gold transition-colors">Governance</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </footer>
  );
};

export default Footer;
