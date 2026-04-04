import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";

const categories = ["All", "Church", "Events", "Miracle", "Pilgrimage"];

const images = [
  {
    id: 1,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg",
    titleKey: "gallery.images.church_exterior",
    category: "Church",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg",
    titleKey: "gallery.images.church_view",
    category: "Church",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp",
    titleKey: "gallery.images.eucharistic_miracle",
    category: "Miracle",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 4,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor-2.webp",
    titleKey: "gallery.images.divine_face",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannur.avif",
    titleKey: "gallery.images.holy_sacrament",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 6,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%201.jpg",
    titleKey: "gallery.images.miracle_close_up",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%202.jfif",
    titleKey: "gallery.images.divine_sign",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%204.jfif",
    titleKey: "gallery.images.sacred_host",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 9,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%205.jfif",
    titleKey: "gallery.images.miraculous_event",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 10,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%206.jfif",
    titleKey: "gallery.images.holy_mass",
    category: "Events",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 11,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%207.jfif",
    titleKey: "gallery.images.congregation",
    category: "Events",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 12,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%208.jfif",
    titleKey: "gallery.images.faithful_gathering",
    category: "Pilgrimage",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 13,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%209.jfif",
    titleKey: "gallery.images.prayer",
    category: "Pilgrimage",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 14,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2010.jpg",
    titleKey: "gallery.images.church_altar",
    category: "Church",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 15,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2011.jfif",
    titleKey: "gallery.images.devotion",
    category: "Events",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 16,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2012.jfif",
    titleKey: "gallery.images.sacred_moment",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 17,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2013.jpg",
    titleKey: "gallery.images.pilgrims",
    category: "Pilgrimage",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 18,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle-1.jfif",
    titleKey: "gallery.images.divine_presence",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 19,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle.webp",
    titleKey: "gallery.images.eucharistic_sign",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 20,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-2.webp",
    titleKey: "gallery.images.holy_face",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 21,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-3.webp",
    titleKey: "gallery.images.miracle_display",
    category: "Miracle",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 22,
    url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-5.webp",
    titleKey: "gallery.images.sacred_relic",
    category: "Miracle",
    span: "md:col-span-2 md:row-span-1"
  }
];

export default function Gallery() {
  const { t } = useTranslation();
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
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg"
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
          className="container mx-auto max-w-5xl relative z-10 text-center px-4 md:px-6 mt-20"
        >
          <span className="text-emerald-400 font-serif italic text-xl md:text-2xl mb-4 md:mb-6 block tracking-widest uppercase">{t("gallery.hero.badge", "Visual Journey")}</span>
          <h1 className="text-white mb-6 md:mb-10 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: t("gallery.hero.title", "Vilakkannur Church <br /><span class='text-gradient-emerald italic pr-4'>Gallery</span>") }} />
          </h1>
          <p className="text-warm-200/80 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            {t("gallery.hero.subtitle", "Explore the visual history of Christ the King Church, the Eucharistic Miracle, and the vibrant pilgrimage community in Kerala.")}
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding relative z-10">
        <div className="glow-gold w-[600px] h-[600px] -right-64 top-0 opacity-10"></div>
        <div className="container mx-auto max-w-7xl">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-500 border ${
                  activeCategory === category
                    ? "bg-emerald-900/40 text-emerald-400 border-emerald-500/50 shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                    : "bg-transparent text-warm-200/60 hover:text-white border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {t(`gallery.categories.${category.toLowerCase()}`, category)}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]"
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
                  className={`relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-all ${img.span.replace('md:', 'sm:')} col-span-1`}
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    loading="lazy"
                    alt={t(img.titleKey, img.titleKey.split('.').pop()?.replace('_', ' ') || '')}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/40 transition-colors duration-700 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 border border-white/10">
                      <ZoomIn className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-black via-deep-black/80 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-2 block">{t(`gallery.categories.${img.category.toLowerCase()}`, img.category)}</span>
                    <h3 className="text-white font-serif text-2xl tracking-wide">{t(img.titleKey, img.titleKey.split('.').pop()?.replace('_', ' ') || '')}</h3>
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
