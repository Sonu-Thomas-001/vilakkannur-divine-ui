import { motion } from "motion/react";
import { Clock, MapPin, Bus, Train, Plane, CalendarDays, Info, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Visit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is there an entry fee to visit the church?",
      answer: "No, there is no entry fee. The church is open to all visitors and pilgrims free of charge."
    },
    {
      question: "Are there accommodation options nearby?",
      answer: "While the village itself has limited commercial lodging, there are several guesthouses and hotels in nearby towns like Taliparamba and Kannur."
    },
    {
      question: "Can I see the miraculous host?",
      answer: "Yes, the miraculous host is installed for public veneration at the church. However, viewing times may be subject to the parish schedule."
    },
    {
      question: "Is the church wheelchair accessible?",
      answer: "Yes, the main sanctuary and primary facilities are accessible to visitors with mobility needs."
    }
  ];

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://picsum.photos/seed/pilgrimage/1920/1080"
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
          className="container mx-auto max-w-5xl relative z-10 text-center mt-20"
        >
          <span className="text-gold-400 font-serif italic text-2xl mb-6 block tracking-widest uppercase">Plan Your Journey</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Visit <span className="text-gradient-gold italic pr-4">Vilakkannur</span>
          </h1>
          <p className="text-warm-200/80 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            Essential information for pilgrims and travelers seeking to experience the sanctuary.
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="py-32 relative z-10">
        <div className="glow-emerald w-[600px] h-[600px] -left-64 top-0 opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Timings & Tips */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="card-glass p-10"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-serif text-white">Mass Timings</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-xl font-serif text-white">Sundays</h3>
                      <p className="text-sm text-warm-200/50 uppercase tracking-widest mt-1">Holy Mass</p>
                    </div>
                    <p className="font-medium text-gold-400 text-lg">7:00 AM & 9:30 AM</p>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-xl font-serif text-white">Weekdays</h3>
                      <p className="text-sm text-warm-200/50 uppercase tracking-widest mt-1">Holy Mass</p>
                    </div>
                    <p className="font-medium text-gold-400 text-lg">6:30 AM</p>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-xl font-serif text-white">First Fridays</h3>
                      <p className="text-sm text-warm-200/50 uppercase tracking-widest mt-1">Mass & Adoration</p>
                    </div>
                    <p className="font-medium text-gold-400 text-lg">6:30 AM & 4:30 PM</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-serif text-white">Tuesdays</h3>
                      <p className="text-sm text-warm-200/50 uppercase tracking-widest mt-1">Special Novena</p>
                    </div>
                    <p className="font-medium text-gold-400 text-lg">4:30 PM</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="card-glass p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl glass-emerald flex items-center justify-center text-emerald-400 border-emerald-500/30">
                    <CalendarDays className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-serif text-white">Best Time to Visit</h2>
                </div>
                <p className="text-warm-200/70 text-lg leading-relaxed mb-8 relative z-10 font-light">
                  The ideal time to visit is between <strong className="text-white font-medium">September and March</strong> when the weather in Kerala is pleasant and cool. 
                </p>
                <div className="glass-dark p-6 rounded-2xl border border-white/10 relative z-10">
                  <h4 className="font-serif text-emerald-400 mb-4 text-xl">Key Dates:</h4>
                  <ul className="space-y-4 text-warm-200/80">
                    <li className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span>Feast of Christ the King</span> 
                      <span className="text-white font-medium">November</span>
                    </li>
                    <li className="flex justify-between items-center pt-1">
                      <span>Miracle Anniversary</span> 
                      <span className="text-white font-medium">November 15</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="card-glass p-10"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <Info className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-serif text-white">Tips for Pilgrims</h2>
                </div>
                <ul className="space-y-6 text-warm-200/70 font-light text-lg">
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>Maintain silence and decorum within the church premises.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>Modest attire is requested for all visitors entering the sanctuary.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>Photography inside the church during Holy Mass is strictly prohibited.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                    <p>For large group pilgrimages, please contact the parish office in advance.</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column: Travel & Map & FAQ */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* How to Reach */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center text-emerald-400 border-emerald-500/30">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-serif text-white">How to Reach</h2>
                </div>

                {/* Map */}
                <div className="w-full h-[400px] bg-ink rounded-3xl mb-10 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-glass p-8 hover:bg-white/5 transition-colors">
                    <Plane className="w-10 h-10 text-gold-400 mb-6" />
                    <h4 className="font-serif text-2xl text-white mb-3">By Air</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light">
                      Kannur International Airport (CNN) is the nearest airport, located approximately 45 km away. Taxis are readily available.
                    </p>
                  </div>
                  
                  <div className="card-glass p-8 hover:bg-white/5 transition-colors">
                    <Train className="w-10 h-10 text-emerald-400 mb-6" />
                    <h4 className="font-serif text-2xl text-white mb-3">By Train</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light">
                      Kannur Railway Station (CAN) is the major railhead, about 50 km from the church.
                    </p>
                  </div>
                  
                  <div className="card-glass p-8 hover:bg-white/5 transition-colors">
                    <Bus className="w-10 h-10 text-gold-400 mb-6" />
                    <h4 className="font-serif text-2xl text-white mb-3">By Road</h4>
                    <p className="text-warm-200/60 leading-relaxed font-light">
                      Regular bus services operate from Kannur and Taliparamba. The route is via Taliparamba - Sreekandapuram - Naduvil.
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
                className="pt-10"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border-gold-500/30">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-serif text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="card-glass p-0 overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className="p-8 flex justify-between items-center bg-transparent">
                        <h4 className="font-serif text-xl text-white pr-8">{faq.question}</h4>
                        <ChevronDown className={`w-6 h-6 text-gold-400 transition-transform duration-500 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="p-8 pt-0 text-warm-200/70 font-light text-lg leading-relaxed border-t border-white/5">
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
