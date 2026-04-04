import { motion } from "motion/react";
import { Clock, MapPin, Bus, Train, Plane, CalendarDays, Info, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Visit() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: t("visit.faq.01.q", "Is there an entry fee to visit the church?"),
      answer: t("visit.faq.01.a", "No, there is no entry fee. The church is open to all visitors and pilgrims free of charge.")
    },
    {
      question: t("visit.faq.02.q", "Are there accommodation options nearby?"),
      answer: t("visit.faq.02.a", "While the village itself has limited commercial lodging, there are several guesthouses and hotels in nearby towns like Taliparamba and Kannur.")
    },
    {
      question: t("visit.faq.03.q", "Can I see the miraculous host?"),
      answer: t("visit.faq.03.a", "Yes, the miraculous host is installed for public veneration at the church. However, viewing times may be subject to the parish schedule.")
    },
    {
      question: t("visit.faq.04.q", "Is the church wheelchair accessible?"),
      answer: t("visit.faq.04.a", "Yes, the main sanctuary and primary facilities are accessible to visitors with mobility needs.")
    }
  ];

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
            alt="Pilgrimage Journey"
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
          <span className="text-gold-400 font-serif italic text-xl md:text-2xl mb-4 md:mb-6 block tracking-widest uppercase">{t("visit.hero.badge", "Plan Your Journey")}</span>
          <h1 className="text-white mb-6 md:mb-10 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: t("visit.hero.title", "Visit <span class='text-gradient-gold italic pr-4'>Vilakkannur</span>") }} />
          </h1>
          <p className="text-warm-200/80 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            {t("visit.hero.subtitle", "Essential information for pilgrims and travelers seeking to experience the sanctuary.")}
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding relative z-10">
        <div className="glow-emerald w-[600px] h-[600px] -left-64 top-0 opacity-10"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
            
            {/* Left Column: Timings & Tips */}
            <div className="lg:col-span-5 space-y-12 md:space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="card-glass p-6 md:p-10"
              >
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <Clock className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{t("visit.timing.title", "Mass Timings")}</h2>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-white">{t("visit.timing.sun.day", "Sundays")}</h3>
                      <p className="text-xs md:text-sm text-warm-200/50 uppercase tracking-widest mt-1">{t("visit.timing.sun.type", "Holy Mass")}</p>
                    </div>
                    <p className="font-medium text-gold-400 text-base md:text-lg">7:00 AM & 9:30 AM</p>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-white">{t("visit.timing.week.day", "Weekdays")}</h3>
                      <p className="text-xs md:text-sm text-warm-200/50 uppercase tracking-widest mt-1">{t("visit.timing.week.type", "Holy Mass")}</p>
                    </div>
                    <p className="font-medium text-gold-400 text-base md:text-lg">6:30 AM</p>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-white">{t("visit.timing.fri.day", "First Fridays")}</h3>
                      <p className="text-xs md:text-sm text-warm-200/50 uppercase tracking-widest mt-1">{t("visit.timing.fri.type", "Mass & Adoration")}</p>
                    </div>
                    <p className="font-medium text-gold-400 text-base md:text-lg">6:30 AM & 4:30 PM</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-white">{t("visit.timing.tue.day", "Tuesdays")}</h3>
                      <p className="text-xs md:text-sm text-warm-200/50 uppercase tracking-widest mt-1">{t("visit.timing.tue.type", "Special Novena")}</p>
                    </div>
                    <p className="font-medium text-gold-400 text-base md:text-lg">4:30 PM</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="card-glass p-6 md:p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-emerald flex items-center justify-center text-emerald-400 border-emerald-500/30">
                    <CalendarDays className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{t("visit.bestTime.title", "Best Time to Visit")}</h2>
                </div>
                <p className="text-warm-200/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8 relative z-10 font-light">
                  <span dangerouslySetInnerHTML={{ __html: t("visit.bestTime.desc", "The ideal time to visit is between <strong class='text-white font-medium'>September and March</strong> when the weather in Kerala is pleasant and cool.") }} />
                </p>
                <div className="glass-dark p-5 md:p-6 rounded-2xl border border-white/10 relative z-10">
                  <h4 className="font-serif text-emerald-400 mb-3 md:mb-4 text-lg md:text-xl">{t("visit.bestTime.dates.title", "Key Dates:")}</h4>
                  <ul className="space-y-3 md:space-y-4 text-warm-200/80 text-sm md:text-base">
                    <li className="flex justify-between items-center border-b border-white/5 pb-2 md:pb-3">
                      <span>{t("visit.bestTime.dates.feast", "Feast of Christ the King")}</span> 
                      <span className="text-white font-medium">{t("visit.bestTime.dates.nov", "November")}</span>
                    </li>
                    <li className="flex justify-between items-center pt-1">
                      <span>{t("visit.bestTime.dates.anniv", "Miracle Anniversary")}</span> 
                      <span className="text-white font-medium">{t("visit.bestTime.dates.nov15", "November 15")}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="card-glass p-6 md:p-10"
              >
                <div className="flex items-center gap-4 md:gap-6 mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <Info className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{t("visit.tips.title", "Tips for Pilgrims")}</h2>
                </div>
                <ul className="space-y-4 md:space-y-6 text-warm-200/70 font-light text-base md:text-lg">
                  <li className="flex gap-3 md:gap-4 items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 mt-2 md:mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>{t("visit.tips.01", "Maintain silence and decorum within the church premises.")}</p>
                  </li>
                  <li className="flex gap-3 md:gap-4 items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 mt-2 md:mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>{t("visit.tips.02", "Modest attire is requested for all visitors entering the sanctuary.")}</p>
                  </li>
                  <li className="flex gap-3 md:gap-4 items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 mt-2 md:mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>{t("visit.tips.03", "Photography inside the church during Holy Mass is strictly prohibited.")}</p>
                  </li>
                  <li className="flex gap-3 md:gap-4 items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 mt-2 md:mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>{t("visit.tips.04", "For large group pilgrimages, please contact the parish office in advance.")}</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column: Travel & Map & FAQ */}
            <div className="lg:col-span-7 space-y-12 md:space-y-16">
              
              {/* How to Reach */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-dark flex items-center justify-center text-emerald-400 border-emerald-500/30">
                    <MapPin className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{t("visit.reach.title", "How to Reach")}</h2>
                </div>

                {/* Map */}
                <div className="w-full h-[300px] md:h-[400px] bg-ink rounded-2xl md:rounded-3xl mb-8 md:mb-10 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.990422204481!2d75.52697831528657!3d12.04414399146914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba448f766e6b815%3A0x8e87b6b158863f8!2sChrist%20The%20King%20Church%20Vilakkannur!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vilakkannur Church Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="card-glass p-6 md:p-8 hover:bg-white/5 transition-colors">
                    <Plane className="w-8 h-8 md:w-10 md:h-10 text-gold-400 mb-4 md:mb-6" />
                    <h4 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-3">{t("visit.reach.air.title", "By Air")}</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light text-sm md:text-base">
                      {t("visit.reach.air.desc", "Kannur International Airport (CNN) is the nearest airport, located approximately 45 km away. Taxis are readily available.")}
                    </p>
                  </div>
                  
                  <div className="card-glass p-6 md:p-8 hover:bg-white/5 transition-colors">
                    <Train className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 mb-4 md:mb-6" />
                    <h4 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-3">{t("visit.reach.train.title", "By Train")}</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light text-sm md:text-base">
                      {t("visit.reach.train.desc", "Kannur Railway Station (CAN) is the major railhead, about 50 km from the church.")}
                    </p>
                  </div>
                  
                  <div className="card-glass p-6 md:p-8 hover:bg-white/5 transition-colors">
                    <Bus className="w-8 h-8 md:w-10 md:h-10 text-gold-400 mb-4 md:mb-6" />
                    <h4 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-3">{t("visit.reach.road.title", "By Road")}</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light text-sm md:text-base">
                      {t("visit.reach.road.desc", "Regular bus services operate from Kannur and Taliparamba. The route is via Taliparamba - Sreekandapuram - Naduvil.")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="pt-6 md:pt-10"
              >
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <HelpCircle className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{t("visit.faq.title", "Frequently Asked Questions")}</h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="card-glass p-0 overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className="p-6 md:p-8 flex justify-between items-center bg-transparent">
                        <h4 className="font-serif text-lg md:text-xl text-white pr-6 md:pr-8">{faq.question}</h4>
                        <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-gold-400 transition-transform duration-500 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="p-6 md:p-8 pt-0 text-warm-200/70 font-light text-base md:text-lg leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
