import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  MapPin, Compass, Navigation, ExternalLink, Phone, Mail, 
  Clock, ArrowRight, Building, CheckCircle2, Trees
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { trackGetDirections } from "../lib/analytics";

export default function Location() {
  const verifiedAddress = {
    church: "Christ the King Church",
    village: "Vilakkannur",
    postOffice: "Naduvil P.O",
    taluk: "Taliparamba Taluk",
    district: "Kannur District",
    state: "Kerala",
    pincode: "670582",
    country: "India",
    coordinates: "12.0441° N, 75.5270° E",
    lat: 12.044144,
    lng: 75.526978,
  };

  const googleMapsLink = "https://maps.app.goo.gl/3547D9gQyv1YkLg1A";

  const landmarks = [
    { name: "Naduvil Town Junction", distance: "4 km", time: "8 mins", note: "Primary commercial center, bus stop & ATM hub" },
    { name: "Sreekandapuram Town", distance: "14 km", time: "22 mins", note: "Major mid-town transit center" },
    { name: "Chemperi", distance: "12 km", time: "20 mins", note: "Neighboring pilgrim town with educational institutions" },
    { name: "Taliparamba Sub-District Hub", distance: "28 km", time: "45 mins", note: "Connects to National Highway 66" },
    { name: "Kannur City & Railway Station", distance: "50 km", time: "1 hr 25 mins", note: "District headquarters & major rail center" },
    { name: "Kannur International Airport (CNN)", distance: "45 km", time: "1 hr 15 mins", note: "Closest international flight gateway" }
  ];

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Christ the King Church, Vilakkannur",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vilakkannur, Naduvil P.O",
      "addressLocality": "Kannur",
      "addressRegion": "Kerala",
      "postalCode": "670582",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": verifiedAddress.lat,
      "longitude": verifiedAddress.lng
    },
    "hasMap": googleMapsLink,
    "telephone": "+919400062892"
  };

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Vilakkannur Church Location | Map, Address & Coordinates, Kerala"
        description="Official address, GPS coordinates (12.0441° N, 75.5270° E), Google Maps directions, and geographic context of Christ the King Church, Vilakkannur, Kerala 670582."
        canonicalPath="/location"
        schema={placeSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-emerald w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Location", path: "/location" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Official Geography & Address</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Vilakkannur Church <br />
            <span className="text-gradient-gold italic pr-2">Location & Map</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Detailed address, GPS navigation coordinates, geographic setting in Malabar, and surrounding regional landmark distances.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGetDirections('location_hero')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/how-to-reach"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              How to Reach by Train / Bus
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Postal Address & Coordinates Card */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Address Box */}
            <div className="card-glass p-8 md:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-medium flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>Verified Postal Address</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-white">
                  Christ the King Catholic Church
                </h2>
                <div className="text-warm-200/80 text-base leading-relaxed font-light space-y-1 pt-2">
                  <p className="text-white font-medium text-lg">Vilakkannur, Naduvil P.O</p>
                  <p>Taliparamba Taluk, Kannur District</p>
                  <p>Kerala, PIN: <strong>670582</strong>, India</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-warm-200/70 bg-black/40 p-3 rounded-xl border border-white/5">
                  <span className="text-warm-200/50">GPS Coordinates:</span>
                  <span className="text-gold-400 font-bold">{verifiedAddress.coordinates}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-warm-200/70 bg-black/40 p-3 rounded-xl border border-white/5">
                  <span className="text-warm-200/50">Parish Contact:</span>
                  <a href="tel:+919400062892" className="text-emerald-400 hover:underline">
                    +91 94000 62892
                  </a>
                </div>
              </div>
            </div>

            {/* Geographic Context */}
            <div className="card-glass p-8 md:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium flex items-center gap-2">
                  <Trees className="w-4 h-4" />
                  <span>Geographical Setting</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  Malabar Foothills of Western Ghats
                </h3>
                <p className="text-warm-200/80 text-sm md:text-base leading-relaxed font-light">
                  Vilakkannur is a peaceful, agrarian highland village situated in the eastern upland belt of Kannur district, Kerala. Surrounded by rubber plantations, pepper groves, and rolling hills, the church sanctuary offers an exceptionally serene environment for prayer, retreat, and quiet contemplation.
                </p>
                <p className="text-warm-200/70 text-xs md:text-sm leading-relaxed font-light">
                  The climate is tropical, with cool refreshing breezes in the mornings and evenings. Pilgrim visitors appreciate the complete absence of heavy urban industrial noise.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <span>Open Interactive Google Map</span>
                  <ExternalLink className="w-4 h-4 text-gold-400" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Landmark Distances Grid */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">Regional Orientation</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Distances from Nearby Towns & Transit Points
            </h2>
            <p className="text-warm-200/70 text-sm md:text-base font-light">
              Clear orientation distances for private vehicles, pilgrimage buses, and taxis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((l, idx) => (
              <div key={idx} className="card-glass p-6 rounded-2xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-emerald-400">{l.time}</span>
                    <strong className="text-base text-gold-400 font-mono">{l.distance}</strong>
                  </div>
                  <h3 className="text-lg font-serif text-white">{l.name}</h3>
                </div>
                <p className="text-xs text-warm-200/60 font-light border-t border-white/5 pt-3">
                  {l.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Links */}
      <section className="py-16 text-center relative z-10">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Need Detailed Travel Directions?</h2>
          <p className="text-warm-200/80 text-base font-light">
            Check train schedules from Kannur / Payyanur, airport flight connections, or view local accommodation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/how-to-reach" className="btn-primary">
              Travel & Route Details
            </Link>
            <Link to="/nearby-stays" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Find Nearby Stays
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
