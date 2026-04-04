import { motion } from "motion/react";
import { MapPin, History, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg"
            alt="Church Exterior"
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
          <span className="text-emerald-400 font-serif italic text-xl md:text-2xl mb-4 md:mb-6 block tracking-widest uppercase">{t("about.hero.badge", "Our Heritage")}</span>
          <h1 className="text-white mb-6 md:mb-10 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: t("about.hero.title", "Christ the King <br/><span class='text-gradient-emerald italic pr-4'>Church, Vilakkannur</span>") }} />
          </h1>
          <p className="text-warm-200/80 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            {t("about.hero.subtitle", "A sanctuary of faith nestled in the hills of Kerala, where history and divine grace intertwine to form a global pilgrimage destination.")}
          </p>
        </motion.div>
      </section>

      {/* History & Origins */}
      <section className="section-padding relative z-10">
        <div className="glow-gold w-[600px] h-[600px] -right-64 top-0 opacity-10"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6 md:space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 glass-dark border-gold-500/30 text-gold-400 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase">
                <History className="w-4 h-4 md:w-5 md:h-5" />
                {t("about.history.badge", "Our Origins")}
              </div>
              <h2 className="text-white leading-[1.1]">
                <span dangerouslySetInnerHTML={{ __html: t("about.history.title", "A Legacy of Faith <br /><span class='text-gradient-gold'>in Malabar</span>") }} />
              </h2>
              <div className="space-y-4 md:space-y-6 text-warm-200/70 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  {t("about.history.p1", "The history of Christ the King Church is deeply rooted in the migration of farming communities to the hilly terrains of Malabar in the mid-20th century. Seeking fertile land and a new life, these pioneers brought with them a profound Catholic faith.")}
                </p>
                <p>
                  {t("about.history.p2", "Initially, spiritual needs were met through makeshift chapels and visiting priests. As the community grew, the need for a permanent place of worship became evident. Through immense sacrifice, collective effort, and unwavering devotion, the first church structure was erected, becoming the spiritual heartbeat of Vilakkannur.")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.15)] border border-white/10 group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
                loading="lazy"
                alt="Historical Church Architecture"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Surroundings */}
      <section className="section-padding bg-ink border-y border-white/5 relative">
        <div className="glow-emerald w-[800px] h-[800px] -left-64 top-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6 md:space-y-10 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 glass-emerald border-emerald-500/30 text-emerald-400 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                {t("about.location.badge", "The Sanctuary")}
              </div>
              <h2 className="text-white leading-[1.1]">
                <span dangerouslySetInnerHTML={{ __html: t("about.location.title", "Nestled in the <br /><span class='text-gradient-emerald'>Hills of Kerala</span>") }} />
              </h2>
              <div className="space-y-4 md:space-y-6 text-warm-200/70 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  {t("about.location.p1", "Vilakkannur is a serene, rural village characterized by its lush green landscapes, rolling hills, and tranquil atmosphere. Far from the noise of the city, the church's location naturally fosters a sense of peace and contemplation.")}
                </p>
                <p>
                  {t("about.location.p2", "The architecture of the church blends traditional Kerala elements with classic Catholic design, creating a space that feels both majestic and deeply welcoming. The surrounding nature acts as a silent witness to the prayers of thousands who visit seeking solace.")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,95,70,0.2)] border border-white/10 group lg:order-1"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2013.jpg"
                loading="lazy"
                alt="Kerala Landscape"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Growth & Spiritual Importance */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-white mb-6 md:mb-8">{t("about.growth.title", "A Global Pilgrimage Center")}</h2>
            <p className="text-warm-200/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              {t("about.growth.subtitle", "What was once a quiet parish serving local farmers has blossomed into an international beacon of faith, drawing believers from every corner of the globe.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="card-glass p-8 md:p-12"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-emerald flex items-center justify-center text-emerald-400 mb-6 md:mb-8 border-emerald-500/30">
                <Users className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 md:mb-6">{t("about.growth.community.title", "Community Growth")}</h3>
              <p className="text-warm-200/60 text-base md:text-lg leading-relaxed font-light">
                Following the <a href="/miracle" className="text-gold-400 hover:text-gold-300 underline decoration-gold-400/30 underline-offset-4 transition-colors">Eucharistic Miracle of 2013</a> and its subsequent Vatican recognition in 2025, the church experienced unprecedented growth. The local community expanded its mission to welcome, house, and guide the massive influx of pilgrims, transforming the village economy and social fabric while maintaining its spiritual core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="card-glass p-8 md:p-12"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 mb-6 md:mb-8 border-gold-500/30">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 md:mb-6">{t("about.growth.spiritual.title", "Spiritual Importance")}</h3>
              <p className="text-warm-200/60 text-base md:text-lg leading-relaxed font-light">
                {t("about.growth.spiritual.desc", "Today, Christ the King Church stands as a profound testament to the Real Presence. It is a place of deep healing, where thousands report experiencing spiritual renewal, physical healings, and a profound sense of peace. The sanctuary serves as a living reminder that the divine actively touches the human experience.")}
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 md:mt-32 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
              Join Our <span className="text-gradient-emerald italic">Community</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-primary text-lg px-10 py-4">
                Contact the Parish
              </a>
              <a href="/visit" className="btn-gold text-lg px-10 py-4">
                Plan Your Visit
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
