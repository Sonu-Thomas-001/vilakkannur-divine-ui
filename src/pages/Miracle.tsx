import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Miracle() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timeline = [
    {
      id: "01",
      title: t("miracle.timeline.01.title", "The Moment"),
      subtitle: t("miracle.timeline.01.subtitle", "November 15, 2013"),
      description: t("miracle.timeline.01.desc", "A quiet morning Mass. As the priest elevated the host, an extraordinary light emerged, altering the course of a small parish forever."),
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%201.jpg",
      align: "left"
    },
    {
      id: "02",
      title: t("miracle.timeline.02.title", "The Appearance"),
      subtitle: t("miracle.timeline.02.subtitle", "The Face of Christ"),
      description: t("miracle.timeline.02.desc", "The distinct face of Jesus Christ, crowned with thorns, formed on the consecrated bread. A congregation was left in absolute awe and silence."),
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor-2.webp",
      align: "right"
    },
    {
      id: "03",
      title: t("miracle.timeline.03.title", "The Investigation"),
      subtitle: t("miracle.timeline.03.subtitle", "Science & Theology"),
      description: t("miracle.timeline.03.desc", "Years of rigorous scrutiny. Independent laboratories and the Vatican's careful examination of the inexplicable, confirming the absence of artificial pigments."),
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle.webp",
      align: "left"
    },
    {
      id: "04",
      title: t("miracle.timeline.04.title", "The Recognition"),
      subtitle: t("miracle.timeline.04.subtitle", "Vatican Approval, 2025"),
      description: t("miracle.timeline.04.desc", "Officially recognized as a true Eucharistic Miracle. A profound gift to the universal Church and a testament to divine presence in the modern age."),
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-2.webp",
      align: "right"
    },
    {
      id: "05",
      title: t("miracle.timeline.05.title", "The Impact"),
      subtitle: t("miracle.timeline.05.subtitle", "A Global Sanctuary"),
      description: t("miracle.timeline.05.desc", "Thousands journey to Vilakkannur seeking solace, healing, and a deeper connection with the Divine. A quiet village transformed into a beacon of faith."),
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-3.webp",
      align: "left"
    }
  ];

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp"
            alt="Divine Light"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/40 via-deep-black/80 to-deep-black"></div>
          <div className="light-ray"></div>
          <div className="glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="container mx-auto max-w-5xl relative z-10 text-center px-4 md:px-6 mt-20"
        >
          <span className="text-gold-400 font-serif italic text-xl md:text-2xl mb-4 md:mb-6 block tracking-widest uppercase">{t("miracle.hero.badge", "The Divine Sign")}</span>
          <h1 className="text-white mb-6 md:mb-10 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: t("miracle.hero.title", "The Eucharistic <br/><span class='text-gradient-gold italic pr-4'>Miracle</span>") }} />
          </h1>
          <p className="text-warm-200/80 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            {t("miracle.hero.subtitle", "A profound manifestation of Christ's real presence that drew the world's eyes to Vilakkannur.")}
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-warm-200/50 text-xs uppercase tracking-widest font-medium">{t("home.hero.scroll", "Scroll to Discover")}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Storytelling Timeline Section */}
      <section className="section-padding relative bg-deep-black" ref={containerRef}>
        <div className="container mx-auto max-w-7xl relative">
          
          {/* Central Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-500 via-emerald-400 to-transparent -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-24 md:space-y-48 lg:space-y-64 relative z-10">
            {timeline.map((item) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Glowing Node */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-deep-black border-2 border-gold-400 -translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_20px_rgba(250,204,21,0.8)] z-20 mt-8 md:mt-0">
                  <div className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-50"></div>
                </div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${item.align === 'left' ? 'md:text-right md:pr-16 lg:pr-24' : 'md:text-left md:pl-16 lg:pl-24'}`}
                >
                  <span className="text-gold-400 font-serif italic text-xl md:text-2xl mb-3 md:mb-4 block tracking-widest">{item.subtitle}</span>
                  <h2 className="text-white mb-6 md:mb-8 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-warm-200/70 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Glowing Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${item.align === 'left' ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}
                >
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                    {/* Light Aura Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.align === 'left' ? 'from-emerald-500/30 to-transparent' : 'from-gold-500/30 to-transparent'} blur-3xl group-hover:opacity-100 transition-opacity duration-1000 opacity-60`}></div>
                    
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.title}
                      className="w-full h-full object-cover relative z-10 glass-dark border border-white/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-20 pointer-events-none"></div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
