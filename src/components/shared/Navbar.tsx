"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  // On inner pages, we want the navbar to act as if it's already scrolled (fully visible, white background)
  const isScrolledState = !isHome || scrolled;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(16px)"]
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 30px rgba(0,0,0,0.06)"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Awards", href: "/awards" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navStyle = isHome && !isOpen 
    ? { backgroundColor, backdropFilter: backdropBlur, boxShadow: shadow } 
    : { backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(16px)", boxShadow: "0 4px 30px rgba(0,0,0,0.06)" };

  return (
    <motion.nav
      style={navStyle}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 h-[72px] md:h-[88px] flex items-center justify-between transition-all duration-300">
        
        {/* ——— Logo ——— */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <Image
            src="/winsha-logo.jpg"
            alt="Winsha Groups"
            width={44}
            height={44}
            style={{ width: 'auto', height: 'auto' }}
            className="rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300 w-10 h-10 md:w-11 md:h-11"
          />
          <div className="flex items-baseline gap-1.5">
            <span className={`text-lg md:text-[22px] font-serif font-black tracking-tight italic leading-none transition-colors duration-300 ${isScrolledState || isOpen ? "text-accent" : "text-white drop-shadow-md"}`}>
              Winsha
            </span>
            <span className="text-lg md:text-[22px] font-serif font-black tracking-tight text-gold italic leading-none drop-shadow-md">
              Awards
            </span>
          </div>
        </Link>

        {/* ——— Desktop Navigation ——— */}
        <div className={`hidden lg:flex items-center gap-8 xl:gap-10 transition-opacity duration-500 ${isScrolledState ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-nav text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 relative py-1
                ${isActive(link.href)
                  ? "text-gold"
                  : "text-accent/60 hover:text-accent"
                }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* ——— Mobile Hamburger / Close Button ——— */}
        <button
          className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${isScrolledState || isOpen ? "bg-secondary/80 border-black/5 text-accent hover:bg-gold/10 hover:text-gold" : "bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ——— Mobile Fullscreen Menu ——— */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[72px] bg-white/98 backdrop-blur-2xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-8 py-12 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-4 font-nav text-2xl font-bold uppercase tracking-[0.08em] text-center transition-colors duration-300
                      ${isActive(link.href) ? "text-gold" : "text-accent/50 hover:text-accent"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}


              {/* Mobile brand footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-8 text-accent/20 text-[10px] font-nav font-semibold tracking-[0.2em] uppercase"
              >
                Winsha Groups &mdash; Excellence Redefined
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
