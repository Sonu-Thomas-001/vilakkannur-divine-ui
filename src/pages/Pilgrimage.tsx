import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Heart, Sparkles, Calendar, CheckCircle2, Shield, Users, 
  Clock, ArrowRight, Sun, Coffee, Car, Phone
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { trackPlanVisit } from "../lib/analytics";

export default function Pilgrimage() {
  const pilgrimagePillars = [
    {
      title: "Spiritual Renewal & Real Presence",
      desc: "Pilgrims from across India and abroad journey to Vilakkannur to renew their faith before the miraculous host bearing the likeness of Christ's crowned Holy Face.",
      icon: Sparkles
    },
    {
      title: "Sacrament of Reconciliation",
      desc: "Priests are stationed in designated confessionals throughout the day, providing pilgrims with the opportunity for deep spiritual cleansing and pastoral counsel.",
      icon: Heart
    },
    {
      title: "Monthly Second Saturday Convention",
      desc: "A full-day convention attracting thousands for praise and worship, scriptural proclamation, Eucharistic healing adoration, and solemn blessing.",
      icon: Calendar
    },
    {
      title: "Intercessory Prayer for Families & the Sick",
      desc: "Countless testimonies of physical healing, peace in troubled families, and inner conversion are recorded annually in the parish intention books.",
      icon: Users
    }
  ];

  const etiquetteRules = [
    {
      rule: "Modest & Reverent Attire",
      detail: "Pilgrims are respectfully requested to dress modestly, covering shoulders and knees, reflecting the solemnity of the Eucharistic shrine."
    },
    {
      rule: "Silence in Adoration Chapel",
      detail: "Maintain contemplative silence inside the Adoration Chapel and sanctuary to allow fellow worshippers uninterrupted meditation."
    },
    {
      rule: "Mobile Devices on Silent Mode",
      detail: "Switch all cell phones to silent or vibrate mode before entering the church compound."
    },
    {
      rule: "Photography Guidelines",
      detail: "Flash photography and selfie sticks are strictly prohibited in the Adoration Chapel during exposition of the Blessed Sacrament."
    }
  ];

  const facilities = [
    { title: "Pilgrim Canteen", desc: "Clean vegetarian meals, tea, and refreshments available during major convention days." },
    { title: "Restrooms & Washrooms", desc: "Well-maintained sanitary facilities for men, women, and elderly pilgrims." },
    { title: "Ample Vehicle Parking", desc: "Spacious dedicated parking ground accommodating large pilgrimage tourist buses and private cars." },
    { title: "Wheelchair Access", desc: "Ramps and step-free access available to the main church sanctuary and adoration chapel." }
  ];

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Vilakkannur Church Pilgrimage | Eucharistic Miracle Sanctuary Guide"
        description="Pilgrim guide to Christ the King Church, Vilakkannur, Kerala. Second Saturday convention details, veneration etiquette, prayer intentions, and group arrangements."
        canonicalPath="/pilgrimage"
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-gold w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Pilgrimage", path: "/pilgrimage" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Spiritual Sanctuary & Pilgrim Guide</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Pilgrimage to <br />
            <span className="text-gradient-gold italic pr-2">Vilakkannur Church</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Experience spiritual peace, Eucharistic healing, and reverent adoration before the Miraculous Host at Christ the King Sanctuary in Kerala.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/mass-timings"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wider uppercase hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
            >
              View Mass & Adoration Hours
            </Link>
            <Link
              to="/nearby-stays"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              Nearby Stays for Pilgrims
            </Link>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">Spiritual Experience</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Why Pilgrims Visit Vilakkannur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilgrimagePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="card-glass p-8 rounded-3xl space-y-4 border border-white/5 hover:border-gold-500/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border border-gold-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white">{p.title}</h3>
                  <p className="text-warm-200/80 text-sm md:text-base leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Second Saturday Convention Spotlight */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gold-500/10 via-white/[0.02] to-emerald-500/10 border border-gold-500/30 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 font-medium">
                Monthly Landmark Gathering
              </span>
              <span className="text-sm font-mono text-warm-200/70">Every 2nd Saturday of the Month</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Second Saturday Eucharistic Convention & Healing Service
            </h2>

            <p className="text-warm-200/90 text-base md:text-lg leading-relaxed font-light">
              The Second Saturday Convention at Vilakkannur is renowned across South India. From <strong>9:00 AM to 4:00 PM</strong>, thousands of families, retreatants, and pilgrims unite in prayerful fasting, the Holy Rosary, spiritual discourse by renowned preachers, Solemn Sung Holy Mass, and the Eucharistic Healing Procession through the church campus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-black/40">
                <span className="text-xs text-warm-200/50 block">Morning Session</span>
                <strong className="text-white text-sm">9:00 AM – Rosary & Praise</strong>
              </div>
              <div className="p-4 rounded-xl bg-black/40">
                <span className="text-xs text-warm-200/50 block">Midday Liturgy</span>
                <strong className="text-gold-400 text-sm">11:30 AM – Solemn Qurbana</strong>
              </div>
              <div className="p-4 rounded-xl bg-black/40">
                <span className="text-xs text-warm-200/50 block">Healing Service</span>
                <strong className="text-emerald-400 text-sm">2:00 PM – Adoration & Blessings</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etiquette & Pilgrim Reverence */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-emerald-400 text-xs uppercase tracking-widest font-medium">Visitor Etiquette</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Sanctuary Etiquette & Reverence
            </h2>
            <p className="text-warm-200/70 text-sm md:text-base font-light">
              Help preserve the atmosphere of prayer, stillness, and spiritual dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {etiquetteRules.map((e, idx) => (
              <div key={idx} className="card-glass p-6 md:p-8 rounded-2xl space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <h3 className="text-lg font-serif text-white">{e.rule}</h3>
                </div>
                <p className="text-sm text-warm-200/70 font-light leading-relaxed pl-8">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilgrim Facilities */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Campus Facilities for Visitors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, fIdx) => (
              <div key={fIdx} className="card-glass p-6 rounded-2xl space-y-2">
                <h3 className="text-base font-serif text-gold-400">{fac.title}</h3>
                <p className="text-xs text-warm-200/70 font-light leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Pilgrimage Coordination */}
      <section className="py-16 text-center relative z-10">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Organizing a Parish or Group Pilgrimage?</h2>
          <p className="text-warm-200/80 text-base font-light">
            If you are traveling with a bus tour or parish group and need special celebration of Holy Mass or pre-arranged dining arrangements, contact the parish desk in advance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="tel:+919400062892" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Contact Parish Desk (+91 94000 62892)</span>
            </a>
            <Link to="/how-to-reach" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Bus & Driving Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
