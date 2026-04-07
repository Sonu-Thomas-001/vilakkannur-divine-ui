import { motion } from "motion/react";
import { MapPin, Phone, Globe, BedDouble, Droplets, Tent, Building, Gamepad2, Utensils, CheckCircle2, Clock, AlertCircle, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Stays() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-deep-black text-warm-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-black">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg"
            alt="Nearby Stays and Resorts"
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
          <span className="text-emerald-400 font-serif italic text-xl md:text-2xl mb-4 md:mb-6 block tracking-widest uppercase">Accommodation</span>
          <h1 className="text-white mb-6 md:mb-10 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: "Nearby <span class='text-gradient-gold italic pr-4'>Stays & Resorts</span>" }} />
          </h1>
          <p className="text-warm-200/80 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Find the perfect accommodation for your pilgrimage, family trip, or special occasion near Vilakkannur.
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding relative z-10">
        <div className="glow-gold w-[600px] h-[600px] -right-64 top-0 opacity-10"></div>
        <div className="container mx-auto max-w-7xl">
          
          {/* Featured Stay: Ave Vista */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-24"
          >
            <div className="card-glass p-6 md:p-10 hover:bg-white/5 transition-colors group relative overflow-hidden border-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10 gap-6 border-b border-white/10 pb-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="font-serif text-3xl md:text-4xl text-white group-hover:text-gold-400 transition-colors">Ave Vista Resorts & Hotels</h2>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">Featured Stay</span>
                  </div>
                  <p className="text-warm-200/80 text-base md:text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0" /> Balapuram, Vayattuparamba (Near Alakode), Kannur
                  </p>
                  <p className="text-warm-200/60 mt-4 max-w-2xl font-light leading-relaxed">
                    A peaceful and premium getaway surrounded by greenery and natural beauty. Offers a perfect blend of relaxation, celebration, and comfortable stay experiences designed to cater to families, couples, groups, and event-based guests.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm bg-deep-black/40 p-5 rounded-2xl border border-white/5 w-full md:w-auto">
                  <a href="tel:+919061554545" className="flex items-center gap-3 text-warm-200/90 hover:text-white transition-colors text-base"><Phone className="w-5 h-5 text-gold-400" /> +91 90615 54545</a>
                  <a href="tel:+919446595722" className="flex items-center gap-3 text-warm-200/90 hover:text-white transition-colors text-base"><Phone className="w-5 h-5 text-gold-400" /> +91 94465 95722</a>
                  <a href="https://www.avevistaresorts.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-warm-200/90 hover:text-white transition-colors text-base"><Globe className="w-5 h-5 text-gold-400" /> www.avevistaresorts.com</a>
                  <a href="mailto:avevistaresort@gmail.com" className="flex items-center gap-3 text-warm-200/90 hover:text-white transition-colors text-base"><Globe className="w-5 h-5 text-gold-400" /> avevistaresort@gmail.com</a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
                {/* Accommodation */}
                <div className="space-y-6">
                  <h4 className="text-white font-medium text-xl flex items-center gap-3"><BedDouble className="w-6 h-6 text-emerald-400" /> Accommodation</h4>
                  <ul className="space-y-4 text-base text-warm-200/70">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0"></div> 
                      <div><strong className="text-white block text-lg mb-1">Single Cottage (₹3000)</strong> Ideal for couples / small families (Up to 3 members)</div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0"></div> 
                      <div><strong className="text-white block text-lg mb-1">Family Cottage (₹6000)</strong> Spacious for families & groups (Up to 6 members)</div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0"></div> 
                      <div><strong className="text-white block text-lg mb-1">Hut Stay / Tree House (₹2000)</strong> Unique nature experience, budget-friendly</div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0"></div> 
                      <div><strong className="text-white block text-lg mb-1">Dormitory Facility</strong> Cost-effective accommodation for large groups</div>
                    </li>
                  </ul>
                  <p className="text-sm text-warm-200/50 italic mt-2">* Extra Person Charges: ₹500–₹600. Custom pricing available for events and group bookings.</p>
                </div>

                {/* Facilities & Perfect For */}
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h4 className="text-white font-medium text-xl flex items-center gap-3"><Info className="w-6 h-6 text-emerald-400" /> Key Facilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-warm-200/70">
                      <div className="flex items-center gap-3"><Droplets className="w-5 h-5 text-emerald-400" /> Swimming Pool & Party Area</div>
                      <div className="flex items-center gap-3"><Tent className="w-5 h-5 text-emerald-400" /> Tree House Experience</div>
                      <div className="flex items-center gap-3"><Building className="w-5 h-5 text-emerald-400" /> Mini Auditorium (A/C Hall)</div>
                      <div className="flex items-center gap-3"><Gamepad2 className="w-5 h-5 text-emerald-400" /> Indoor & Outdoor Games</div>
                      <div className="flex items-center gap-3"><Utensils className="w-5 h-5 text-emerald-400" /> Traditional Kerala Dining</div>
                      <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-emerald-400" /> Garden & Open Spaces</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-white font-medium text-xl flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400" /> Perfect For</h4>
                    <ul className="space-y-3 text-base text-warm-200/70">
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Wedding Guest Accommodation</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> First Holy Communion Celebrations</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Birthday & Anniversary Parties</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Pool Parties & Get-Togethers</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Corporate / Team Outings</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Family Trips & Weekend Stays</li>
                    </ul>
                  </div>
                </div>

                {/* Policies & Timings */}
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h4 className="text-white font-medium text-xl flex items-center gap-3"><Clock className="w-6 h-6 text-emerald-400" /> Timings</h4>
                    <div className="bg-deep-black/30 p-5 rounded-2xl border border-white/5 space-y-4 text-warm-200/80">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span>Check-in</span>
                        <span className="text-white font-medium">2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span>Check-out</span>
                        <span className="text-white font-medium">12:00 PM</span>
                      </div>
                      <div className="pt-2">
                        <span className="block mb-2 text-emerald-400 font-medium">Pool Timings:</span>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Morning</span>
                          <span className="text-white font-medium text-sm">6:00 AM – 11:00 AM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Evening</span>
                          <span className="text-white font-medium text-sm">4:00 PM – 10:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-white font-medium text-xl flex items-center gap-3"><AlertCircle className="w-6 h-6 text-emerald-400" /> Important Policies</h4>
                    <ul className="space-y-3 text-sm text-warm-200/70 bg-deep-black/30 p-5 rounded-2xl border border-white/5">
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Advance payment required for booking</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> No complimentary food policy (as per booking)</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Outside food not allowed</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Party / BBQ allowed till 10 PM</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Loud noise restrictions apply</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Damage charges applicable (120% of cost)</li>
                      <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></div> Lost key charge: ₹500</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
