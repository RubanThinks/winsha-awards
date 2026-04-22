"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";

interface ImageCardProps {
  item: {
    id: string;
    imageUrl?: string;
    name?: string;
    category?: string;
    year?: string;
    description?: string;
    title?: string;
  };
  aspectRatio?: "portrait" | "square";
  delay?: number;
  isGallery?: boolean;
}

export default function ImageCard({ item, aspectRatio = "portrait", delay = 0, isGallery = false }: ImageCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Use name or title
  const displayName = item.name || item.title;

  return (
    <>
      <motion.div
        data-aos="fade-up"
        data-aos-delay={delay}
        onClick={() => setIsOpen(true)}
        layoutId={`card-${item.id}`}
        className={`group relative ${aspectRatio === "portrait" ? "aspect-[4/5] rounded-3xl" : "aspect-square rounded-2xl"} overflow-hidden bg-secondary border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer`}
      >
        {item.imageUrl ? (
          <motion.img
            layoutId={`img-${item.id}`}
            src={item.imageUrl}
            alt={displayName || "Image"}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <Trophy className={`${aspectRatio === "portrait" ? "w-20 h-20" : "w-12 h-12"} text-accent/10`} />
          </div>
        )}

        <div className={`absolute inset-0 bg-gradient-to-t ${isGallery ? "from-black/90 via-black/40" : "from-black/90 via-black/40"} to-transparent z-10`} />
        
        <div className={`absolute bottom-0 left-0 right-0 ${isGallery ? "p-6" : "p-8"} z-20 flex flex-col justify-end h-full pointer-events-none`}>
          <div className="mt-auto">
            <span className={`text-gold-light ${isGallery ? "text-[9px]" : "text-[10px]"} font-bold tracking-[0.3em] uppercase mb-2 block drop-shadow-md`}>
              {item.year && item.category ? `${item.year} — ${item.category}` : item.category || item.year || "Distinction"}
            </span>
            <h4 className={`font-serif font-black text-white italic leading-tight drop-shadow-lg ${isGallery ? "text-lg" : "text-2xl"}`}>
              {displayName}
            </h4>
            {item.description && (
              <p className={`text-white/80 mt-3 leading-relaxed drop-shadow-md ${isGallery ? "text-[11px] line-clamp-2" : "text-xs line-clamp-3"}`}>
                {item.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />
            
            <motion.div
              layoutId={`card-${item.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#030303] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the card itself
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-[80vh] relative bg-black flex items-center justify-center">
                {item.imageUrl ? (
                  <motion.img
                    layoutId={`img-${item.id}`}
                    src={item.imageUrl}
                    alt={displayName || "Image"}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Trophy className="w-32 h-32 text-white/10" />
                )}
              </div>

              {/* Metadata Section */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#030303] overflow-y-auto">
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  {item.year && item.category ? `${item.year} — ${item.category}` : item.category || item.year || "Distinction"}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-white italic mb-6 leading-tight">
                  {displayName}
                </h2>
                
                <div className="w-12 h-1 bg-gold/30 mb-6" />

                {item.description ? (
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                ) : (
                  <p className="text-white/40 text-sm italic">No description provided.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
