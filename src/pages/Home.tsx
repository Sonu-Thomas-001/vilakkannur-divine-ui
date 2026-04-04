import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Heart, Sparkles, Users, Calendar, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Lighting & Background */}
        <div className="absolute inset-0 z-0 bg-deep-black overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg"
              alt="Church at Sunrise"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-emerald-950/80"></div>
          <div className="light-ray"></div>
          <div className="glow-emerald w-[1000px] h-[1000px] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-40"></div>
          
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-gold-500/30"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold-300">{t("home.hero.badge", "The Eucharistic Miracle")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-white mb-6 md:mb-8 max-w-6xl tracking-tight"
          >
            <span dangerouslySetInnerHTML={{ __html: t("home.hero.title", "Where Faith Meets <br /><span class='text-gradient-gold italic pr-4'>the Divine</span>") }} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-warm-200/80 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed"
          >
            {t("home.hero.subtitle", "Witness the miracle that transformed Vilakkannur into a global pilgrimage destination.")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/miracle" className="btn-gold text-lg px-10 py-5 group">
              {t("home.hero.cta_primary", "Explore the Miracle")}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/visit" className="btn-primary text-lg px-10 py-5">
              {t("home.hero.cta_secondary", "Plan Your Visit")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-warm-200/50 text-xs uppercase tracking-widest font-medium">{t("home.hero.scroll", "Scroll to Explore")}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Key Information - Glassmorphism Cards */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: t("home.cards.about.title", "About the Church"), 
                desc: t("home.cards.about.desc", "A serene sanctuary in the hills of Kerala, rooted in deep faith and community heritage."), 
                icon: <MapPin className="w-7 h-7" />,
                glow: "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
                gradient: "group-hover:from-emerald-500/10"
              },
              { 
                title: t("home.cards.pilgrimage.title", "Pilgrimage Importance"), 
                desc: t("home.cards.pilgrimage.desc", "A global destination for spiritual renewal, healing, and witnessing the Eucharistic Miracle."), 
                icon: <Sparkles className="w-7 h-7" />,
                glow: "group-hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
                gradient: "group-hover:from-gold-500/10"
              },
              { 
                title: t("home.cards.visitor.title", "Visitor Information"), 
                desc: t("home.cards.visitor.desc", "Open daily for pilgrims. Join us for Holy Mass, adoration, and peaceful reflection."), 
                icon: <Clock className="w-7 h-7" />,
                glow: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
                gradient: "group-hover:from-white/10"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative group p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-white/20 ${item.glow} overflow-hidden`}
              >
                {/* Glow effect inside card on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${item.gradient} group-hover:to-transparent transition-colors duration-700`}></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-deep-black/50 border border-white/10 flex items-center justify-center mb-8 text-warm-200/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4">{item.title}</h3>
                  <p className="text-warm-200/60 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Visual Grid (Modern Content Block) */}
      <section className="section-padding relative bg-deep-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            
            {/* Miracle - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Link to="/miracle" className="block w-full h-full">
                <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp" loading="lazy" alt="The Miracle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
                  <span className="text-gold-400 font-serif italic text-lg md:text-xl mb-2 md:mb-3 block">{t("home.grid.miracle.subtitle", "The Divine Sign")}</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-3 md:mb-4">{t("home.grid.miracle.title", "The Eucharistic Miracle")}</h3>
                  <p className="text-warm-200/70 text-base md:text-lg max-w-md line-clamp-2 md:line-clamp-none">{t("home.grid.miracle.desc", "Witness the profound manifestation of Christ's real presence that drew the world's eyes to Vilakkannur.")}</p>
                </div>
              </Link>
            </motion.div>

            {/* Spiritual Experience - Medium */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Link to="/about" className="block w-full h-full">
                <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2013.jpg" loading="lazy" alt="Spiritual Experience" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-10 z-10">
                  <h3 className="text-2xl md:text-4xl font-serif text-white mb-2 md:mb-4">{t("home.grid.spiritual.title", "Spiritual Experience")}</h3>
                  <p className="text-warm-200/70 text-base md:text-lg line-clamp-2 md:line-clamp-none">{t("home.grid.spiritual.desc", "Find peace and renewal in our vibrant faith community.")}</p>
                </div>
              </Link>
            </motion.div>

            {/* Visit Info - Small */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-6 md:row-span-1 relative rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Link to="/visit" className="block w-full h-full">
                <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg" loading="lazy" alt="Visit Info" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 z-10">
                  <h3 className="text-3xl font-serif text-white mb-2">{t("home.grid.visit.title", "Plan Your Visit")}</h3>
                  <p className="text-warm-200/70">{t("home.grid.visit.desc", "Mass timings and directions")}</p>
                </div>
              </Link>
            </motion.div>

            {/* Gallery - Small */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-6 md:row-span-1 relative rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Link to="/gallery" className="block w-full h-full">
                <img src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2010.jpg" loading="lazy" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 z-10">
                  <h3 className="text-3xl font-serif text-white mb-2">{t("home.grid.gallery.title", "Visual Gallery")}</h3>
                  <p className="text-warm-200/70">{t("home.grid.gallery.desc", "Glimpses of grace")}</p>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Parallax Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
            loading="lazy"
            alt="Church Parallax"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Dark gradient & subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-emerald-900/40 to-deep-black z-0"></div>
        <div className="glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"></div>

        <div className="relative z-10 text-center px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight drop-shadow-2xl"
          >
            <span dangerouslySetInnerHTML={{ __html: t("home.parallax.title", "Experience the <span class='text-gradient-gold italic pr-4'>Presence</span>") }} />
          </motion.h2>
        </div>
      </section>

      {/* 7. Premium CTA */}
      <section className="section-padding relative flex items-center justify-center bg-deep-black">
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
            
            <div className="relative bg-ink p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 text-center glass-dark overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 md:mb-12 relative z-10 leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t("home.cta.title", "Plan Your Spiritual Journey <br class='hidden md:block'/> to Vilakkannur") }} />
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Link to="/visit" className="btn-gold text-xl px-12 py-6">
                  {t("home.cta.primary", "Plan Visit")}
                </Link>
                <Link to="/contact" className="btn-primary text-xl px-12 py-6">
                  {t("home.cta.secondary", "Contact")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
