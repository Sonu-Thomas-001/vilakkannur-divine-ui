import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Church", "Events", "Miracle", "Pilgrimage"];

const images = [
  {
    id: 1,
    url: "https://picsum.photos/seed/church1/800/800",
    title: "Church Interior",
    category: "Church",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/church2/800/800",
    title: "Architecture",
    category: "Church",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/events1/800/800",
    title: "Holy Mass",
    category: "Events",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    url: "https://picsum.photos/seed/miracle1/800/800",
    title: "Divine Light",
    category: "Miracle",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 5,
    url: "https://picsum.photos/seed/church3/800/800",
    title: "Historical View",
    category: "Church",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 6,
    url: "https://picsum.photos/seed/church4/800/800",
    title: "Sanctuary",
    category: "Church",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    url: "https://picsum.photos/seed/pilgrimage1/800/800",
    title: "Pilgrimage Journey",
    category: "Pilgrimage",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    url: "https://picsum.photos/seed/church5/800/800",
    title: "Altar Details",
    category: "Church",
    span: "md:col-span-2 md:row-span-1"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://picsum.photos/seed/churchinterior/1920/1080"
            alt="Church Interior"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/40 via-deep-black/80 to-deep-black"></div>
          <div className="light-ray"></div>
          <div className="glow-emerald w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="container mx-auto max-w-5xl relative z-10 text-center mt-20"
        >
          <span className="text-emerald-400 font-serif italic text-2xl mb-6 block tracking-widest uppercase">Visual Journey</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            <span className="text-gradient-emerald italic pr-4">Gallery</span>
          </h1>
          <p className="text-warm-200/80 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            Glimpses of our sacred space, spiritual events, and the serene surroundings.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative z-10">
        <div className="glow-gold w-[600px] h-[600px] -right-64 top-0 opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-500 border ${
                  activeCategory === category
                    ? "bg-emerald-900/40 text-emerald-400 border-emerald-500/50 shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                    : "bg-transparent text-warm-200/60 hover:text-white border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.8 }}
                  key={img.id}
                  className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-all ${img.span}`}
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    loading="lazy"
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/40 transition-colors duration-700 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 border border-white/10">
                      <ZoomIn className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-black via-deep-black/80 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-2 block">{img.category}</span>
                    <h3 className="text-white font-serif text-2xl tracking-wide">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
