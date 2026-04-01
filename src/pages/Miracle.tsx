import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const timeline = [
  {
    id: "01",
    title: "The Moment",
    subtitle: "November 15, 2013",
    description: "A quiet morning Mass. As the priest elevated the host, an extraordinary light emerged, altering the course of a small parish forever.",
    image: "https://picsum.photos/seed/moment/800/1000",
    align: "left"
  },
  {
    id: "02",
    title: "The Appearance",
    subtitle: "The Face of Christ",
    description: "The distinct face of Jesus Christ, crowned with thorns, formed on the consecrated bread. A congregation was left in absolute awe and silence.",
    image: "https://picsum.photos/seed/appearance/800/1000",
    align: "right"
  },
  {
    id: "03",
    title: "The Investigation",
    subtitle: "Science & Theology",
    description: "Years of rigorous scrutiny. Independent laboratories and the Vatican's careful examination of the inexplicable, confirming the absence of artificial pigments.",
    image: "https://picsum.photos/seed/investigation/800/1000",
    align: "left"
  },
  {
    id: "04",
    title: "The Recognition",
    subtitle: "Vatican Approval, 2025",
    description: "Officially recognized as a true Eucharistic Miracle. A profound gift to the universal Church and a testament to divine presence in the modern age.",
    image: "https://picsum.photos/seed/recognition/800/1000",
    align: "right"
  },
  {
    id: "05",
    title: "The Impact",
    subtitle: "A Global Sanctuary",
    description: "Thousands journey to Vilakkannur seeking solace, healing, and a deeper connection with the Divine. A quiet village transformed into a beacon of faith.",
    image: "https://picsum.photos/seed/impact/800/1000",
    align: "left"
  }
];

export default function Miracle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://picsum.photos/seed/divinelight/1920/1080"
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
          className="container mx-auto max-w-5xl relative z-10 text-center mt-20"
        >
          <span className="text-gold-400 font-serif italic text-2xl mb-6 block tracking-widest uppercase">The Divine Sign</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            The Eucharistic <br/><span className="text-gradient-gold italic pr-4">Miracle</span>
          </h1>
          <p className="text-warm-200/80 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            A profound manifestation of Christ's real presence that drew the world's eyes to Vilakkannur.
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
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
            <motion.div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Storytelling Timeline Section */}
      <section className="py-32 md:py-48 relative bg-deep-black" ref={containerRef}>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
          
          {/* Central Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-500 via-emerald-400 to-transparent -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-32 md:space-y-64 relative z-10">
            {timeline.map((item) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
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
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${item.align === 'left' ? 'md:text-right md:pr-24' : 'md:text-left md:pl-24'}`}
                >
                  <span className="text-gold-400 font-serif italic text-2xl mb-4 block tracking-widest">{item.subtitle}</span>
                  <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-warm-200/70 text-xl md:text-2xl font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Glowing Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${item.align === 'left' ? 'md:pl-24' : 'md:pr-24'}`}
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
