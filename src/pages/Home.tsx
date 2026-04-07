import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Sparkles, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const heroImages = [
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg",
  "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2010.jpg"
];

export default function Home() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Parallax Refs
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const divineRef = useRef(null);
  const { scrollYProgress: divineScroll } = useScroll({ target: divineRef, offset: ["start end", "end start"] });
  const divineY = useTransform(divineScroll, [0, 1], ["-20%", "20%"]);

  const storyRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const storyY = useTransform(storyScroll, [0, 1], ["-10%", "10%"]);

  const gridRef = useRef(null);
  const { scrollYProgress: gridScroll } = useScroll({ target: gridRef, offset: ["start end", "end start"] });
  const gridY1 = useTransform(gridScroll, [0, 1], ["0%", "15%"]);
  const gridY2 = useTransform(gridScroll, [0, 1], ["0%", "-15%"]);

  const fullWidthRef = useRef(null);
  const { scrollYProgress: fullWidthScroll } = useScroll({ target: fullWidthRef, offset: ["start end", "end start"] });
  const fullWidthY = useTransform(fullWidthScroll, [0, 1], ["-30%", "30%"]);

  const ctaRef = useRef(null);
  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaY = useTransform(ctaScroll, [0, 1], ["-20%", "0%"]);

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: isMobile ? "0%" : heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Church at Sunrise"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/30 via-deep-black/60 to-deep-black"></div>
          <div className="light-ray"></div>
          <div className="glow-emerald w-[1000px] h-[1000px] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none"></div>
        </motion.div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gold-300/30 rounded-full blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100 - Math.random() * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, Math.random() * 0.5 + 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-gold-500/30"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold-300">The Eucharistic Miracle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-white mb-6 md:mb-8 max-w-6xl tracking-tight"
          >
            Christ King Church Vilakkannur <br /><span className='text-gradient-gold italic pr-4'>Eucharistic Miracle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-warm-200/80 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed"
          >
            Witness the Catholic miracle in Kerala, India, that transformed Christ the King Church into a global spiritual tourism destination.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-warm-200/50 text-xs uppercase tracking-widest font-medium">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1"
          >
            <div className="w-1.5 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. DIVINE EXPERIENCE SECTION */}
      <section ref={divineRef} className="section-padding relative bg-deep-black overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                A Sanctuary of <br />
                <span className="text-gradient-emerald italic">Divine Grace</span>
              </h2>
              <p className="text-warm-200/70 text-lg md:text-xl font-light leading-relaxed">
                Nestled in the serene hills of Kerala, Christ the King Church stands as a beacon of faith. It is here that the veil between heaven and earth thinned, revealing a profound sign of God's enduring presence among us.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest text-sm font-medium">
                Discover Our History <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="relative h-[600px] rounded-[2rem] overflow-hidden group">
              <motion.div style={{ y: isMobile ? "0%" : divineY }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
                <img
                  src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
                  loading="lazy"
                  alt="Christ King Church Vilakkannur"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
              
              {/* Glass Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 p-6 glass-dark border border-white/10 rounded-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 text-warm-200">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <div>
                    <h4 className="text-white font-medium">Vilakkannur, Kerala</h4>
                    <p className="text-sm opacity-70">A global pilgrimage destination</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EUCHARISTIC MIRACLE STORY (IMMERSIVE) */}
      <section ref={storyRef} className="section-padding relative bg-ink border-y border-white/5 overflow-hidden">
        <motion.div style={{ y: isMobile ? "0%" : storyY }} className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%201.jpg" className="w-full h-full object-cover mix-blend-screen" alt="" />
        </motion.div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold-400 font-serif italic text-xl mb-4 block tracking-widest uppercase">The Event</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">The Miracle Unfolds</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent md:-translate-x-1/2"></div>

            {[
              { year: "2013", title: "The Appearance", desc: "During morning Mass, the face of Christ miraculously appeared on the consecrated host." },
              { year: "2014-2024", title: "Rigorous Investigation", desc: "Extensive scientific and theological studies confirmed the phenomenon could not be explained naturally." },
              { year: "2025", title: "Vatican Recognition", desc: "Officially recognized as a true Eucharistic Miracle, drawing pilgrims worldwide." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-[24px] md:left-1/2 w-2.5 h-2.5 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] md:-translate-x-1/2 mt-2 md:mt-0 z-10"></div>
                
                <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className="text-emerald-400 font-serif italic text-xl md:text-2xl mb-2 block">{item.year}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-warm-200/70 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/miracle" className="btn-gold text-lg px-8 py-4 inline-flex items-center gap-2">
              Read the Full Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VISUAL GRID SECTION */}
      <section ref={gridRef} className="section-padding relative bg-deep-black overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Glimpses of the Divine</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-[800px] md:h-[600px]">
            {/* Large Image */}
            <motion.div style={{ y: isMobile ? "0%" : gridY1 }} className="md:col-span-8 relative rounded-3xl overflow-hidden group h-full">
              <Link to="/gallery" className="block w-full h-full">
                <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp" loading="lazy" alt="Eucharistic Miracle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl font-serif text-white mb-2">The Sacred Host</h3>
                  <p className="text-warm-200/80">View Gallery</p>
                </div>
              </Link>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-4 md:gap-6 h-full">
              {/* Top Small Image */}
              <motion.div style={{ y: isMobile ? "0%" : gridY2 }} className="relative rounded-3xl overflow-hidden group flex-1">
                <Link to="/gallery" className="block w-full h-full">
                  <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2010.jpg" loading="lazy" alt="Pilgrims" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-xl font-serif text-white">Pilgrimage</h3>
                  </div>
                </Link>
              </motion.div>

              {/* Bottom Small Image */}
              <motion.div style={{ y: isMobile ? "0%" : gridY1 }} className="relative rounded-3xl overflow-hidden group flex-1">
                <Link to="/gallery" className="block w-full h-full">
                  <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2013.jpg" loading="lazy" alt="Candles" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-xl font-serif text-white">Devotion</h3>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARALLAX FULL-WIDTH SECTION */}
      <section ref={fullWidthRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: isMobile ? "0%" : fullWidthY }} className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
            loading="lazy"
            alt="Church Parallax"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-emerald-900/40 to-deep-black z-0"></div>
        <div className="glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"></div>

        <div className="relative z-10 text-center px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight drop-shadow-2xl"
          >
            Experience the <br className="md:hidden" /><span className='text-gradient-gold italic pr-4'>Presence</span>
          </motion.h2>
        </div>
      </section>

      {/* 6. MEMORIES SECTION */}
      <section className="section-padding relative bg-deep-black border-y border-white/5 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-serif italic text-xl mb-4 block tracking-widest uppercase">Memories</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our YouTube Channel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "u9c_4f8KUFI",
                title: "തലശ്ശേരി അതിരൂപത ചെറുപുഷ്‌പ മിഷൻലീഗിൻ്റെ നേതൃത്വത്തിൽ രാജത്വതിരുനാൾ",
                duration: "04:13:42"
              },
              {
                id: "30WTQY8Mpnc",
                title: "ഈശോയുടെ സ്വന്തം കാർലോ || (കലാസന്ധ്യ) || വിളക്കന്നൂർ ക്രിസ്തുരാജ തീർത്ഥാടന ദൈവാലയo",
                duration: "02:01:48"
              },
              {
                id: "b1Md_5hher0",
                title: "വെരി. റവ. മോൺ. ആൻ്റണി മുതുകുന്നേൽ | ആഘോഷമായ വിശുദ്ധ കുർബാന",
                duration: "01:39:45"
              },
              {
                id: "ClbjcpX6ktA",
                title: "ഫാ. ഷോൺ ജോസ് പേരൂക്കുന്നേൽ || ആഘോഷമായ വിശുദ്ധ കുർബാന",
                duration: "01:22:48"
              },
              {
                id: "fmFlfnHwNN4",
                title: "ആഘോഷമായ വിശുദ്ധ കുർബാന ഫാ. ടോളസ് ആലുക്കൽ SDV",
                duration: "01:32:41"
              },
              {
                id: "i_7atM-G7AA",
                title: "ഫാ. ഓസ്റ്റിൻ ചക്കാംകുന്നേൽ || ആഘോഷമായ വിശുദ്ധ കുർബാന, നൊവേന",
                duration: "02:37:29"
              },
              {
                id: "L3xZS_XblQo",
                title: "വെരി. റവ. മോൺ. സെബാസ്റ്റ്യൻ പാലാക്കുഴി || ആഘോഷമായ വിശുദ്ധ കുർബാന",
                duration: "01:36:20"
              },
              {
                id: "elJNyc0O1Ws",
                title: "വെരി. റവ.FR. അമൽ തൈപ്പറമ്പിൽ | വിശുദ്ധ കുർബാന",
                duration: "01:30:43"
              }
            ].map((video, index) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group block relative rounded-2xl overflow-hidden bg-ink border border-white/10 hover:border-gold-500/50 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-warm-200/90 font-medium text-sm line-clamp-2 group-hover:text-gold-400 transition-colors" title={video.title}>
                    {video.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://youtube.com/@holyfacevilakkannur1968" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest text-sm font-medium"
            >
              View All Videos on YouTube <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. PILGRIMAGE / VISIT SECTION */}
      <section className="section-padding relative bg-ink border-y border-white/5">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-serif italic text-xl mb-4 block tracking-widest uppercase">Plan Your Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Visitor Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Mass Timings", desc: "Daily services and special adoration hours." },
              { icon: <MapPin className="w-8 h-8" />, title: "How to Reach", desc: "Directions from Kannur Airport and major stations." },
              { icon: <Calendar className="w-8 h-8" />, title: "Special Events", desc: "Annual feasts and pilgrimage schedules." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group card-glass text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-deep-black/50 border border-white/10 flex items-center justify-center mb-6 text-gold-400 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-warm-200/60 text-lg font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="section-padding relative bg-deep-black">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-serif italic text-xl mb-4 block tracking-widest uppercase">Answers</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Where is the Eucharistic Miracle of Vilakkannur located?", a: "The miracle took place at Christ the King Church in Vilakkannur, a village in the Kannur district of Kerala, India." },
              { q: "When did the Vilakkannur Eucharistic Miracle happen?", a: "The miraculous event occurred on November 15, 2013, during a morning Holy Mass when the face of Jesus Christ appeared on the sacred host." },
              { q: "Is the Vilakkannur miracle recognized by the Vatican?", a: "Yes, after years of rigorous scientific and theological investigation, the Vatican officially recognized the Eucharistic Miracle in 2025." },
              { q: "How can I visit Christ King Church Vilakkannur?", a: "Vilakkannur is accessible by road from Kannur city and the Kannur International Airport. The church is open daily for pilgrims and visitors." }
            ].map((faq, index) => (
              <div key={index} className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl md:text-2xl font-serif text-gold-400 mb-3">{faq.q}</h3>
                <p className="text-warm-200/70 text-lg font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          
          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Where is the Eucharistic Miracle of Vilakkannur located?", "acceptedAnswer": { "@type": "Answer", "text": "The miracle took place at Christ the King Church in Vilakkannur, a village in the Kannur district of Kerala, India." } },
                { "@type": "Question", "name": "When did the Vilakkannur Eucharistic Miracle happen?", "acceptedAnswer": { "@type": "Answer", "text": "The miraculous event occurred on November 15, 2013, during a morning Holy Mass when the face of Jesus Christ appeared on the sacred host." } },
                { "@type": "Question", "name": "Is the Vilakkannur miracle recognized by the Vatican?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, after years of rigorous scientific and theological investigation, the Vatican officially recognized the Eucharistic Miracle in 2025." } },
                { "@type": "Question", "name": "How can I visit Christ King Church Vilakkannur?", "acceptedAnswer": { "@type": "Answer", "text": "Vilakkannur is accessible by road from Kannur city and the Kannur International Airport. The church is open daily for pilgrims and visitors." } }
              ]
            })}
          </script>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section ref={ctaRef} className="relative py-32 flex items-center justify-center overflow-hidden bg-ink">
        <motion.div style={{ y: isMobile ? "0%" : ctaY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%201.jpg"
            loading="lazy"
            alt="CTA Parallax"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-transparent z-0"></div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="max-w-5xl mx-auto p-1 relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/30 to-gold-400/0 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-deep-black/80 backdrop-blur-2xl p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 text-center overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 md:mb-12 relative z-10 leading-tight">
                Plan Your Spiritual Journey <br className='hidden md:block'/> to Vilakkannur
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Link to="/visit" className="btn-gold text-xl px-12 py-6">
                  Plan Visit
                </Link>
                <Link to="/contact" className="btn-primary text-xl px-12 py-6">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
