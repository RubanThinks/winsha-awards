"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isVideoDone, setIsVideoDone] = useState(false);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Safety fallback in case the video fails to load or buffer
  useEffect(() => {
    fallbackTimerRef.current = setTimeout(() => {
      setIsVideoDone(true);
    }, 5000); // 5 second max fallback

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  const handleVideoEnd = () => {
    setIsVideoDone(true);
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
  };

  return (
    <>
      {/* Theatrical Curtain Rise Transition (Award Stage Theme) */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: isVideoDone ? "0vh" : "100vh" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] bg-black flex items-center justify-center pointer-events-none shadow-[0_10px_50px_rgba(184,134,11,0.5)] overflow-hidden"
        style={{ borderBottom: "2px solid #B8860B" }} // Golden trim on the rising curtain
      >
        {/* Video Animation playing on the curtain before it lifts */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isVideoDone ? 0 : 1, scale: isVideoDone ? 0.95 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-sm aspect-video flex items-center justify-center"
        >
          <video 
            src="/winsha-loading-animation (1).mp4" 
            autoPlay 
            muted 
            playsInline 
            onEnded={handleVideoEnd}
            onError={handleVideoEnd}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Page Content Elegant Fade In */}
      <motion.main
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ 
          opacity: isVideoDone ? 1 : 0, 
          y: isVideoDone ? 0 : 30, 
          filter: isVideoDone ? "blur(0px)" : "blur(10px)" 
        }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
}
