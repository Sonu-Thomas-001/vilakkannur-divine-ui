import { motion } from "motion/react";
import { useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const isMobile = useIsMobile();
  const duration = isMobile ? 1500 : 2500;

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      onComplete();
      document.body.style.overflow = "";
    }, duration);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete, duration]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: "-100%", 
        transition: { duration: isMobile ? 0.5 : 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Ambient Glow - Hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: isMobile ? 0.8 : 1.5, ease: "easeOut" }}
        className="relative flex flex-col items-center z-10"
      >
        {/* Minimal Cross */}
        <div className="relative w-12 h-16 mb-10">
          {/* Vertical Line */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.1 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Horizontal Line */}
          <motion.div 
            className="absolute top-[35%] left-0 h-[2px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Center Glow */}
          <motion.div
            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold-400/30 blur-md rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: isMobile ? 1.5 : 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-white font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-light text-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.5 : 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Christ King Church
          </motion.h1>
        </motion.div>
        
        <motion.div className="overflow-hidden mt-3">
          <motion.p
            className="text-gold-400/60 text-xs md:text-sm tracking-[0.4em] uppercase text-center"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.6 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Vilakkannur
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
