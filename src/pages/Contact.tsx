import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://picsum.photos/seed/candles/1920/1080"
            alt="Church Candles"
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
          <span className="text-gold-400 font-serif italic text-2xl mb-6 block tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Contact <span className="text-gradient-gold italic pr-4">Us</span>
          </h1>
          <p className="text-warm-200/80 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            We welcome your inquiries, prayer requests, and messages.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-10">
        <div className="glow-emerald w-[600px] h-[600px] -right-64 top-0 opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 space-y-16"
            >
              <div>
                <h2 className="text-4xl font-serif text-white mb-10">Parish Office</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <MapPin className="text-gold-400 w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Address</h3>
                      <p className="text-warm-200/60 leading-relaxed font-light text-lg">
                        Christ the King Church<br />
                        Vilakkannur, Naduvil P.O<br />
                        Kannur District, Kerala 670582<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center shrink-0 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                      <Phone className="text-emerald-400 w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Phone</h3>
                      <p className="text-warm-200/60 font-light text-lg">
                        +91 460 222 0000<br />
                        +91 944 000 0000 (Vicar)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <Mail className="text-gold-400 w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Email</h3>
                      <p className="text-warm-200/60 font-light text-lg">
                        info@vilakkannurchurch.org<br />
                        vicar@vilakkannurchurch.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Directions */}
              <div className="card-glass p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <Navigation className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-serif text-white">Quick Directions</h3>
                </div>
                <p className="text-warm-200/70 text-lg leading-relaxed mb-8 relative z-10 font-light">
                  Located 45km from Kannur International Airport. Take the Taliparamba - Sreekandapuram route towards Naduvil. The church is prominently visible from the main road.
                </p>
                <button className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors flex items-center gap-2 uppercase tracking-widest relative z-10">
                  Get Directions via Google Maps <span aria-hidden="true">&rarr;</span>
                </button>
              </div>

              {/* Map */}
              <div className="w-full h-80 bg-ink rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              <div className="card-glass p-10 md:p-16">
                <h2 className="text-4xl font-serif text-white mb-4">Send a Message</h2>
                <p className="text-warm-200/60 mb-12 font-light text-lg">Fill out the form below and our parish office will get back to you shortly.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="text-sm font-medium text-warm-200/80 uppercase tracking-widest">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-white placeholder-white/20"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="text-sm font-medium text-warm-200/80 uppercase tracking-widest">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-white placeholder-white/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-medium text-warm-200/80 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-white placeholder-white/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-medium text-warm-200/80 uppercase tracking-widest">Subject</label>
                    <div className="relative">
                      <select 
                        id="subject" 
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-white appearance-none"
                      >
                        <option value="general" className="bg-ink text-white">General Inquiry</option>
                        <option value="prayer" className="bg-ink text-white">Prayer Request</option>
                        <option value="visit" className="bg-ink text-white">Pilgrimage / Visit</option>
                        <option value="mass" className="bg-ink text-white">Mass Intention</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-white/50">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium text-warm-200/80 uppercase tracking-widest">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all resize-none text-white placeholder-white/20"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn-gold w-full group py-4 text-lg"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
