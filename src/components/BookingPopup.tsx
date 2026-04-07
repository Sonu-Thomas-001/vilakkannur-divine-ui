import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MapPin, Phone, Globe, BedDouble, X, ExternalLink } from "lucide-react";

const resortImages = [
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/A1.JPG",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Swimming%20Pool.jpg",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Tree%20House.jpg",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Family%20Cottage.jpg"
];

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if user has opted out permanently
  const hasOptedOut = localStorage.getItem('bookingPopupOptOut') === 'true';

  const triggerAutoPopup = () => {
    // Only trigger if they haven't opted out AND haven't seen it this session
    if (!hasOptedOut && sessionStorage.getItem('bookingPopupSeen') !== 'true') {
      setIsOpen(true);
      sessionStorage.setItem('bookingPopupSeen', 'true');
    }
  };

  // 1. Time Delay (15 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAutoPopup();
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll Depth (60%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrollDepth > 0.6) {
        triggerAutoPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Exit Intent (Mouse leaves top of viewport)
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerAutoPopup();
        document.removeEventListener('mouseout', handleMouseOut);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  // Manual trigger via custom event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking-popup', handleOpen);
    return () => window.removeEventListener('open-booking-popup', handleOpen);
  }, []);

  // Handle image carousel inside popup
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % resortImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const handleOptOut = () => {
    localStorage.setItem('bookingPopupOptOut', 'true');
    setIsOpen(false);
  };

  return (
    <>
      {/* 4. Floating Action Button (FAB) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[45] flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-5 py-3.5 rounded-full shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] hover:-translate-y-1 transition-all duration-300 border border-emerald-400/30 group"
      >
        <BedDouble className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm tracking-wide">Book Resort</span>
      </motion.button>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-deep-black/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-ink border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-white/20 rounded-full transition-colors backdrop-blur-md border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image Carousel */}
            <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden bg-deep-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={resortImages[currentImageIndex]}
                  alt="Ave Vista Resort"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Logo/logo-white.png" alt="Logo" className="h-8 object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">Ave Vista <br/>Resorts & Hotels</h3>
                <p className="text-emerald-400 text-sm mt-2 flex items-center gap-1"><MapPin className="w-4 h-4"/> Vayattuparamba, Kannur</p>
              </div>
            </div>

            {/* Right Side: Booking Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-ink to-deep-black">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium uppercase tracking-widest mb-4">
                  <BedDouble className="w-3 h-3" /> Featured Stay
                </div>
                <h4 className="text-2xl font-serif text-white mb-3">Plan Your Getaway</h4>
                <p className="text-warm-200/70 font-light text-sm leading-relaxed">
                  Experience a peaceful and premium retreat surrounded by nature. Perfect for families, couples, and special events.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <a 
                  href="https://www.avevistaresorts.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5"
                >
                  <Globe className="w-5 h-5" />
                  Book via Website
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>
                
                <div className="flex gap-3">
                  <a 
                    href="tel:+919061554545" 
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3.5 rounded-xl transition-colors font-medium text-sm"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    +91 90615 54545
                  </a>
                  
                  <a 
                    href="tel:+919446595722" 
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3.5 rounded-xl transition-colors font-medium text-sm"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    +91 94465 95722
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <button 
                  onClick={handleOptOut}
                  className="text-warm-200/40 hover:text-white text-xs transition-colors underline decoration-white/20 hover:decoration-white/50 underline-offset-4"
                >
                  Don't show this automatically again
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
