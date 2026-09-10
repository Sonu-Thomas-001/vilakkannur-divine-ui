import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Clock, Calendar, Sparkles, CheckCircle2, Phone, MapPin, 
  AlertCircle, Sun, Moon, Info, ArrowRight, ShieldCheck, HeartHandshake
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { trackPlanVisit, trackContactAction } from "../lib/analytics";

export default function MassTimings() {
  const currentUpdatedDate = "March 2026 (Active Liturgical Calendar)";

  const dailySchedule = [
    {
      days: "Monday to Thursday",
      note: "Standard Daily Holy Qurbana & Eucharistic Liturgy",
      timings: [
        { time: "6:30 AM", label: "Morning Holy Mass (Malayalam)", desc: "Parish Chapel" },
        { time: "11:00 AM", label: "Pilgrim Holy Mass", desc: "Main Church Sanctuary" },
        { time: "6:00 PM", label: "Evening Holy Mass & Rosary", desc: "Main Church Sanctuary" },
      ],
      highlight: false
    },
    {
      days: "Friday & Saturday",
      note: "Special Veneration Days & Novena to the Holy Face",
      timings: [
        { time: "6:30 AM", label: "Morning Holy Mass", desc: "Parish Chapel" },
        { time: "10:30 AM", label: "Solemn Holy Mass & Novena", desc: "Main Church Sanctuary" },
        { time: "12:30 PM", label: "Afternoon Pilgrim Mass", desc: "Main Church Sanctuary" },
        { time: "3:30 PM", label: "Pilgrim Holy Mass & Blessing", desc: "Main Church Sanctuary" },
        { time: "6:00 PM", label: "Evening Solemn Mass & Novena", desc: "Main Church Sanctuary" },
      ],
      highlight: true,
      tag: "Veneration Days"
    },
    {
      days: "Sunday (Lord's Day)",
      note: "Full Sunday Obligation & Pilgrim Eucharistic Liturgies",
      timings: [
        { time: "5:30 AM", label: "Dawn Holy Mass", desc: "Main Church Sanctuary" },
        { time: "7:30 AM", label: "Morning Parish Holy Mass", desc: "Solemn Syro-Malabar Liturgy" },
        { time: "9:30 AM", label: "Grand Solemn Mass (Sung Qurbana)", desc: "Main Church Sanctuary" },
        { time: "12:30 PM", label: "Midday Pilgrim Mass", desc: "Main Church Sanctuary" },
        { time: "3:30 PM", label: "Afternoon Holy Mass", desc: "Main Church Sanctuary" },
        { time: "5:30 PM", label: "Evening Holy Mass", desc: "Main Church Sanctuary" },
        { time: "7:30 PM", label: "Night Holy Mass & Benediction", desc: "Final Sunday Liturgy" },
      ],
      highlight: true,
      tag: "7 Masses Every Sunday"
    }
  ];

  const devotions = [
    {
      title: "Sacrament of Reconciliation (Confession)",
      schedule: "Available Daily during Holy Mass hours",
      slots: ["5:30 AM – 7:00 AM", "10:00 AM – 11:30 AM", "3:30 PM – 6:00 PM"],
      icon: HeartHandshake,
      desc: "Resident priests and confessors are stationed in the designated confessionals in the main church."
    },
    {
      title: "Perpetual Eucharistic Adoration & Miracle Veneration",
      schedule: "Open Daily: 5:30 AM to 8:00 PM",
      slots: ["Uninterrupted Silent Prayer", "Personal Intentions & Blessings"],
      icon: Sparkles,
      desc: "The Miraculous Host is exposed in the Adoration Chapel for prayerful meditation and veneration."
    },
    {
      title: "Second Saturday Mega Eucharistic Convention",
      schedule: "Every Second Saturday: 9:00 AM to 4:00 PM",
      slots: ["Holy Rosary", "Praise & Worship", "Preaching", "Healing Mass & Procession"],
      icon: Calendar,
      desc: "Thousands of pilgrims gather from across India for fasting, confession, spiritual preaching, and the Eucharistic Healing Procession."
    }
  ];

  const contactNumbers = [
    { name: "Parish Office (Primary)", phone: "+91 94000 62892", raw: "+919400062892" },
    { name: "Pilgrim Assistance Desk", phone: "+91 97475 34689", raw: "+919747534689" },
    { name: "Novena & Mass Intentions", phone: "+91 98953 22341", raw: "+919895322341" }
  ];

  const massScheduleSchema = {
    "@context": "https://schema.org",
    "@type": "CatholicChurch",
    "name": "Christ the King Church, Vilakkannur - Mass Timings",
    "url": "https://vilakkannurchurch.vercel.app/mass-timings",
    "description": "Complete daily and Sunday Holy Mass schedule, confession hours, and Eucharistic Adoration timings at Christ the King Church, Vilakkannur.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "06:30",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "06:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "05:00",
        "closes": "21:00"
      }
    ],
    "telephone": "+919400062892"
  };

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Vilakkannur Church Mass Timings | Christ the King Church Schedule"
        description="Official Vilakkannur Church Mass timings: daily Holy Mass, Sunday schedule (7 Masses), Novena to the Holy Face, Confession, and Eucharistic Adoration hours."
        canonicalPath="/mass-timings"
        schema={massScheduleSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-gold w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Mass Timings", path: "/mass-timings" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Official Liturgical Schedule</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Vilakkannur Church <br />
            <span className="text-gradient-gold italic pr-2">Holy Mass Timings</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-6">
            Complete daily and weekly Holy Mass timings, novena prayers, confession schedule, and public Eucharistic Adoration at Christ the King Church, Vilakkannur, Kerala.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-warm-200/70 font-mono">
            <Info className="w-4 h-4 text-gold-400" />
            <span>Schedule status: <strong>{currentUpdatedDate}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Timings Tables & Cards */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-16">
          
          {/* Daily & Weekend Mass Table */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">Liturgical Services</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mt-1">
                  Holy Qurbana / Holy Mass Schedule
                </h2>
              </div>
              <span className="text-xs text-warm-200/60 font-light">
                *Language: Malayalam (English/Tamil Mass organized for registered pilgrim groups)
              </span>
            </div>

            <div className="space-y-8">
              {dailySchedule.map((block, idx) => (
                <div
                  key={idx}
                  className={`card-glass p-6 md:p-8 rounded-3xl transition-all duration-300 ${
                    block.highlight ? 'border-gold-500/30 bg-white/[0.04]' : 'border-white/5'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gold-400" />
                        {block.days}
                      </h3>
                      <p className="text-xs md:text-sm text-warm-200/60 mt-1">{block.note}</p>
                    </div>
                    {block.tag && (
                      <span className="text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 font-medium">
                        {block.tag}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {block.timings.map((item, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-gold-500/20 transition-colors flex flex-col justify-between"
                      >
                        <div className="space-y-1">
                          <span className="text-xl md:text-2xl font-serif text-gold-400 font-medium block">
                            {item.time}
                          </span>
                          <h4 className="text-sm font-medium text-white">{item.label}</h4>
                        </div>
                        <span className="text-xs text-warm-200/50 mt-3 pt-2 border-t border-white/5 block">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Devotions, Adoration & Confession Section */}
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-4">
              <span className="text-emerald-400 text-xs uppercase tracking-widest font-medium">Sacraments & Adoration</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mt-1">
                Adoration, Confessions & Special Conventions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devotions.map((dev, i) => {
                const IconComponent = dev.icon;
                return (
                  <div key={i} className="card-glass p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-gold-400 border border-gold-500/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif text-white">{dev.title}</h3>
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{dev.schedule}</p>
                      <p className="text-sm text-warm-200/80 font-light leading-relaxed">{dev.desc}</p>
                    </div>

                    <div className="space-y-2 border-t border-white/5 pt-4">
                      {dev.slots.map((slot, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-warm-200/70 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{slot}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification & Telephone Inquiries */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Telephone Verification & Mass Bookings</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  Confirm Mass Times or Book Intentions
                </h3>
                <p className="text-sm md:text-base text-warm-200/80 font-light leading-relaxed">
                  During major feast days or national holidays, timings may include additional solemn services. Please feel free to phone the parish desk to confirm timings or schedule special pilgrim intentions.
                </p>
              </div>

              <div className="space-y-3">
                {contactNumbers.map((c, idx) => (
                  <a
                    key={idx}
                    href={`tel:${c.raw}`}
                    onClick={() => trackContactAction('phone')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-gold-500/30 hover:bg-black/60 transition-all text-left group"
                  >
                    <div>
                      <span className="text-xs text-warm-200/60 block">{c.name}</span>
                      <strong className="text-base text-white group-hover:text-gold-400 transition-colors font-mono">
                        {c.phone}
                      </strong>
                    </div>
                    <Phone className="w-4 h-4 text-gold-400/60 group-hover:text-gold-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Fast Navigation to Related Pilgrim Needs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <Link
              to="/how-to-reach"
              className="p-6 rounded-2xl card-glass hover:border-gold-500/30 transition-all group"
            >
              <span className="text-xs uppercase tracking-wider text-warm-200/60 block mb-2">Getting Here</span>
              <h4 className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors flex items-center justify-between">
                <span>How to Reach</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </h4>
              <p className="text-xs text-warm-200/60 mt-2 font-light">
                Directions from Kannur railway station, airport, and bus routes.
              </p>
            </Link>

            <Link
              to="/eucharistic-miracle"
              className="p-6 rounded-2xl card-glass hover:border-gold-500/30 transition-all group"
            >
              <span className="text-xs uppercase tracking-wider text-warm-200/60 block mb-2">Historical Event</span>
              <h4 className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors flex items-center justify-between">
                <span>The Miracle</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </h4>
              <p className="text-xs text-warm-200/60 mt-2 font-light">
                Read the verified history, scientific reports, and Vatican decree.
              </p>
            </Link>

            <Link
              to="/nearby-stays"
              className="p-6 rounded-2xl card-glass hover:border-gold-500/30 transition-all group"
            >
              <span className="text-xs uppercase tracking-wider text-warm-200/60 block mb-2">Accommodation</span>
              <h4 className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors flex items-center justify-between">
                <span>Nearby Stays</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </h4>
              <p className="text-xs text-warm-200/60 mt-2 font-light">
                Resorts, family cottages, and lodging for overnight pilgrims.
              </p>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
