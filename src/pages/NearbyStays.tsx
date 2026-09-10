import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BedDouble, Phone, MapPin, CheckCircle2, Clock, 
  ExternalLink, Droplets, Tent, Building, Utensils, 
  Gamepad2, Globe, AlertCircle, ArrowRight, ShieldCheck, HeartHandshake
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import BookingPopup from "../components/BookingPopup";
import { trackNearbyStaysClick, trackAveVistaClick } from "../lib/analytics";

export default function NearbyStays() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const aveVistaPhone = "+91 95444 87788";
  const aveVistaRawPhone = "+919544487788";
  const aveVistaAltPhone = "+91 98471 23456";

  const aveVistaGallery = [
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Swimming%20Pool.jpg", title: "Swimming Pool & Relaxation Area" },
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Family%20Cottage.jpg", title: "Spacious Family Cottage" },
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Tree%20House.jpg", title: "Nature Tree House Experience" },
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Dormitory.jpg", title: "Group Dormitory Accommodation" },
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/Mini%20Auditorium.jpg", title: "Air-Conditioned Mini Auditorium" },
    { url: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/AVR%20PMS/A2.JPG", title: "Lush Hillside Greenery" }
  ];

  const aveVistaRooms = [
    {
      type: "Single Cottage",
      price: "₹3,000 / night",
      capacity: "Up to 3 members",
      desc: "Cozy, private cottage with modern attached bath, king bed, and private porch. Perfect for couples or small families."
    },
    {
      type: "Family Cottage",
      price: "₹6,000 / night",
      capacity: "Up to 6 members",
      desc: "Expansive multi-bedroom cottage offering abundant living space, veranda, and dining access for larger family groups."
    },
    {
      type: "Hut Stay / Tree House",
      price: "₹2,000 / night",
      capacity: "2 – 3 members",
      desc: "Eco-friendly elevated wooden tree house surrounded by natural foliage. A peaceful, budget-friendly nature experience."
    },
    {
      type: "Dormitory Facility",
      price: "Group Tariff on Request",
      capacity: "10 – 30+ pilgrims",
      desc: "Economical shared accommodation designed specifically for parish tour groups, retreatants, and large pilgrimage bus parties."
    }
  ];

  const regionalOptions = [
    {
      category: "Naduvil Town (4 km)",
      description: "Local town center with budget lodges, basic guest houses, auto-rickshaws, and local restaurants for day pilgrims.",
      distance: "5 – 8 mins drive"
    },
    {
      category: "Alakode & Vayattuparamba (10–15 km)",
      description: "Hillside resort retreats including Ave Vista, offering quiet estate surroundings, clean mountain air, and tranquil environments.",
      distance: "15 – 25 mins drive"
    },
    {
      category: "Taliparamba Town (28 km)",
      description: "Semi-urban sub-district hub with 3-star hotels, multi-cuisine dining, major hospitals, and standard transit amenities.",
      distance: "40 – 45 mins drive"
    },
    {
      category: "Kannur City (50 km)",
      description: "Full range of premium 4-star and 5-star beachside hotels, business hotels, luxury suites, and coastal seafood dining.",
      distance: "1 hr 25 mins drive"
    }
  ];

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Stays Near Vilakkannur Church | Hotels & Resorts Near Alakode"
        description="Explore comfortable stays and resorts near Vilakkannur Church in Kerala. Recommended accommodations for families, cottages, group dorms, and Ave Vista Resorts."
        canonicalPath="/nearby-stays"
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-emerald w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Nearby Stays", path: "/nearby-stays" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <BedDouble className="w-4 h-4 text-emerald-400" />
            <span>Pilgrim Accommodation Guide</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Stays & Resorts Near <br />
            <span className="text-gradient-gold italic pr-2">Vilakkannur Church</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            A thoughtful guide to peaceful accommodation, family cottages, and group dormitories for pilgrims planning an overnight spiritual retreat in Kerala.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ave-vista"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wider uppercase hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
            >
              Explore Ave Vista Resorts
            </a>
            <Link
              to="/mass-timings"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              Check Mass Timings
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Spotlight: Ave Vista Resorts */}
      <section id="ave-vista" className="section-padding relative z-10">
        <div className="container mx-auto max-w-6xl px-6 space-y-12">
          
          <div className="card-glass p-8 md:p-12 rounded-3xl border border-emerald-500/30 bg-white/[0.02] space-y-10 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono block">
                  Recommended Pilgrim Resort Stay
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
                  Ave Vista Resorts
                </h2>
                <div className="flex items-center gap-2 text-sm text-warm-200/70">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Balapuram, Vayattuparamba, near Alakode (Scenic Malabar Countryside)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    trackAveVistaClick('booking_modal_open');
                    setIsBookingOpen(true);
                  }}
                  className="px-7 py-3 rounded-full bg-gold-500 text-deep-black font-medium text-xs md:text-sm uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-lg"
                >
                  Book Your Stay
                </button>
                <a
                  href={`tel:${aveVistaRawPhone}`}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white text-xs md:text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{aveVistaPhone}</span>
                </a>
              </div>
            </div>

            {/* Photo Showcase */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aveVistaGallery.map((item, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden group relative border border-white/10">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-[10px] text-white">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Rooms Grid */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-serif text-white flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-gold-400" />
                <span>Accommodation Types & Rates</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aveVistaRooms.map((room, rIdx) => (
                  <div key={rIdx} className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs uppercase text-emerald-400 font-mono">{room.capacity}</span>
                      <h4 className="text-lg font-serif text-white">{room.type}</h4>
                      <strong className="text-base text-gold-400 block font-mono">{room.price}</strong>
                      <p className="text-xs text-warm-200/70 font-light leading-relaxed">{room.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities & Timings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10 text-sm">
              <div className="space-y-3">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span>Resort Amenities</span>
                </h4>
                <ul className="space-y-2 text-xs text-warm-200/70 font-light">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Clean Swimming Pool with Kids Zone</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Traditional Kerala Food Catering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Mini Air-Conditioned Auditorium Hall</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Indoor / Outdoor Recreation Grounds</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Check-in & Pool Hours</span>
                </h4>
                <div className="space-y-1.5 text-xs text-warm-200/70 font-light">
                  <p><strong>Check-in:</strong> 2:00 PM</p>
                  <p><strong>Check-out:</strong> 12:00 PM</p>
                  <p><strong>Pool Morning:</strong> 6:00 AM – 11:00 AM</p>
                  <p><strong>Pool Evening:</strong> 4:00 PM – 10:00 PM</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-gold-400" />
                  <span>Stay Policies</span>
                </h4>
                <p className="text-xs text-warm-200/70 font-light leading-relaxed">
                  Family-friendly environment. Advance reservation recommended for weekends and feast seasons. Extra person charges ₹500–₹600.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Accommodation Overview */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">Regional Landscape</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Accommodation Options by Region
            </h2>
            <p className="text-warm-200/70 text-sm md:text-base font-light">
              Depending on whether you desire peaceful rural retreat surroundings or city hotel convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalOptions.map((opt, i) => (
              <div key={i} className="card-glass p-6 md:p-8 rounded-3xl space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400">{opt.distance}</span>
                  <h3 className="text-xl font-serif text-white">{opt.category}</h3>
                  <p className="text-xs md:text-sm text-warm-200/80 font-light leading-relaxed">{opt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Popup Modal */}
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Bottom Conversion Links */}
      <section className="py-16 text-center relative z-10">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Plan Your Journey to Vilakkannur</h2>
          <p className="text-warm-200/80 text-base font-light">
            Check driving routes from Kannur or Taliparamba, view railway connectivity, and verify Mass times.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/how-to-reach" className="btn-primary">
              How to Reach Directions
            </Link>
            <Link to="/mass-timings" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              View Mass Timings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
