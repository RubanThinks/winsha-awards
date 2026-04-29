"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/hero_1.png",
  "/hero_3.png",
  "/hero_4.png",
  "/hero_5.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Winsha Awards Cinematic View ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-[75%_20%] md:object-[center_20%] scale-105"
        />
      </AnimatePresence>

      {/* Protective Gradient Overlay to ensure text is ALWAYS visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-[5]" />

      {/* Foreground Hero Text (Left Aligned) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase bg-black/30 backdrop-blur-md border border-white/10 text-gold-light rounded-full shadow-lg">
            Make Meaningful Differences
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-serif font-black mb-6 tracking-tight text-white leading-[0.85] italic drop-shadow-2xl">
            WINSHA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold drop-shadow-lg">
              Awards
            </span>
          </h1>
          <p className="max-w-lg text-white/90 text-base md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md">
            A recognition platform that honors excellence in business, entrepreneurship, service, innovation, and industry leadership.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
