import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Train, Plane, Bus, Car, Navigation, MapPin, 
  Clock, Compass, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { trackGetDirections } from "../lib/analytics";

export default function HowToReach() {
  const googleMapsUrl = "https://maps.app.goo.gl/3547D9gQyv1YkLg1A";
  const coordinates = "12.0441° N, 75.5270° E";

  const railwayStations = [
    {
      name: "Kannur Main Railway Station (CAN)",
      distance: "Approx. 48 – 50 km",
      time: "1 hour 25 mins by road",
      desc: "The premier railway hub in North Kerala. Connected to all major express, superfast, and Rajdhani/Vande Bharat trains from Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Kochi, and Trivandrum.",
      travelTip: "Buses to Taliparamba and Naduvil leave frequently from the KSRTC & private bus terminals right outside Kannur Railway Station. Prepaid taxis and Uber/cabs are available 24/7.",
      primary: true
    },
    {
      name: "Payyanur Railway Station (PAY)",
      distance: "Approx. 40 – 42 km",
      time: "1 hour 15 mins by road",
      desc: "Ideal alternate station for pilgrims arriving from Karnataka, Goa, and Maharashtra via the Konkan Railway network.",
      travelTip: "Direct bus routes connect Payyanur to Mathamangalam, Alakode, and Naduvil.",
      primary: false
    }
  ];

  const airports = [
    {
      name: "Kannur International Airport (CNN)",
      distance: "Approx. 45 – 48 km",
      time: "1 hour 15 mins by road",
      desc: "The closest airport. Direct international flights connect to Dubai, Abu Dhabi, Doha, Kuwait, Sharjah, Muscat, and domestic flights to Bangalore, Chennai, Mumbai, and Delhi.",
      transit: "Taxis and airport rental cabs operate via the Mattannur – Iritty – Payyavoor – Naduvil route directly to Vilakkannur."
    },
    {
      name: "Mangalore International Airport (IXE)",
      distance: "Approx. 135 km",
      time: "3 hours 15 mins by road",
      desc: "Major alternate international airport in Karnataka with extensive Gulf and pan-India connectivity."
    },
    {
      name: "Calicut International Airport (CCJ)",
      distance: "Approx. 150 km",
      time: "3.5 hours by road / train via Kannur",
      desc: "Large international airport serving southern and central Malabar."
    }
  ];

  const roadRoutes = [
    {
      origin: "From Kannur City / Central",
      distance: "50 km",
      route: "Kannur City → Valapattanam → Taliparamba → Sreekandapuram → Naduvil → Vilakkannur",
      desc: "Follow National Highway 66 north to Taliparamba, then branch eastward onto State Highway toward Sreekandapuram and Naduvil. Scenic asphalt road throughout."
    },
    {
      origin: "From Payyanur / Kasaragod",
      distance: "42 km",
      route: "Payyanur → Mathamangalam → Alakode → Karuvanchal → Naduvil → Vilakkannur",
      desc: "Smooth scenic highway across the eastern Malabar foothills, cutting directly through Alakode."
    },
    {
      origin: "From Iritty / Mattannur / Coorg (Karnataka)",
      distance: "38 km",
      route: "Iritty → Ulikkal → Payyavoor → Chemperi → Vilakkannur",
      desc: "Direct foothill route connecting the Bangalore/Mysore/Coorg interstate corridor."
    },
    {
      origin: "From Taliparamba Town",
      distance: "28 km",
      route: "Taliparamba → Sreekandapuram → Naduvil → Vilakkannur",
      desc: "Frequent bus services depart every 15 minutes toward Sreekandapuram and Naduvil."
    }
  ];

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Christ the King Church, Vilakkannur - How to Reach",
    "url": "https://vilakkannurchurch.vercel.app/how-to-reach",
    "description": "Travel and route guide to Christ the King Church, Vilakkannur, Kerala. Nearest railway stations, airport connectivity, bus routes, and driving directions.",
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
      "latitude": 12.044144,
      "longitude": 75.526978
    }
  };

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="How to Reach Vilakkannur Church | Railway Station & Travel Guide"
        description="Comprehensive travel guide to Vilakkannur Church, Kerala. Details on nearest railway stations (Kannur CAN, Payyanur PAY), airport (CNN), bus routes, and driving directions."
        canonicalPath="/how-to-reach"
        schema={placeSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-emerald w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "How to Reach", path: "/how-to-reach" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Travel & Transit Guide</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            How to Reach <br />
            <span className="text-gradient-gold italic pr-2">Vilakkannur Church</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Complete transit directions, nearest railway stations, airport connections, and bus routes to Christ the King Church, Vilakkannur, Kerala.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGetDirections('how_to_reach_hero')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/location"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              View Location & Map
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Reference Bar */}
      <section className="py-8 bg-ink/60 border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs text-warm-200/60 uppercase block font-mono">Nearest Railhead</span>
              <strong className="text-sm md:text-base text-gold-400 font-medium mt-1 block">Kannur (CAN) 48 km</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs text-warm-200/60 uppercase block font-mono">Nearest Airport</span>
              <strong className="text-sm md:text-base text-emerald-400 font-medium mt-1 block">Kannur (CNN) 45 km</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs text-warm-200/60 uppercase block font-mono">Local Hub</span>
              <strong className="text-sm md:text-base text-white font-medium mt-1 block">Naduvil Town (4 km)</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs text-warm-200/60 uppercase block font-mono">GPS Coordinates</span>
              <strong className="text-xs md:text-sm text-gold-300 font-mono mt-1 block">{coordinates}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Stations Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium">
              <Train className="w-4 h-4" />
              <span>Train Connectivity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Nearest Railway Stations to Vilakkannur Church
            </h2>
            <p className="text-warm-200/80 text-base md:text-lg font-light leading-relaxed max-w-3xl">
              For pilgrims traveling by Indian Railways, Kannur Main (CAN) and Payyanur (PAY) provide the most direct connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {railwayStations.map((station, idx) => (
              <div
                key={idx}
                className={`card-glass p-6 md:p-8 rounded-3xl space-y-6 ${
                  station.primary ? 'border-gold-500/30 bg-white/[0.03]' : 'border-white/5'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase block">
                      {station.distance}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-white">{station.name}</h3>
                  </div>
                  {station.primary && (
                    <span className="text-xs bg-gold-500/20 text-gold-300 px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-wider font-medium shrink-0">
                      Primary Station
                    </span>
                  )}
                </div>

                <p className="text-sm text-warm-200/80 leading-relaxed font-light">{station.desc}</p>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1 text-xs text-warm-200/70 font-light">
                  <strong className="text-white block font-medium">How to proceed from station:</strong>
                  <p>{station.travelTip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Connectivity */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium">
              <Plane className="w-4 h-4" />
              <span>Flight Options</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Nearest Airports to Vilakkannur
            </h2>
            <p className="text-warm-200/80 text-base md:text-lg font-light leading-relaxed max-w-3xl">
              International and domestic flight transit points in North Kerala and Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {airports.map((ap, i) => (
              <div key={i} className="card-glass p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs text-gold-400 font-mono block">{ap.distance} • {ap.time}</span>
                  <h3 className="text-xl font-serif text-white">{ap.name}</h3>
                  <p className="text-xs md:text-sm text-warm-200/80 font-light leading-relaxed">{ap.desc}</p>
                </div>
                {ap.transit && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-warm-200/70 font-light mt-4">
                    {ap.transit}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driving Routes & Road Navigation */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium">
              <Car className="w-4 h-4" />
              <span>Road & Driving Directions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Driving Routes from Major Towns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadRoutes.map((route, rIdx) => (
              <div key={rIdx} className="card-glass p-6 md:p-8 rounded-3xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-serif text-white">{route.origin}</h3>
                  <span className="text-xs font-mono text-emerald-400">{route.distance}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-gold-300">
                  {route.route}
                </div>
                <p className="text-xs md:text-sm text-warm-200/80 font-light leading-relaxed">
                  {route.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bus & Public Transport Details */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium">
              <Bus className="w-4 h-4" />
              <span>Public Transport Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Bus Services & Local Transport
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-warm-200/80 text-sm md:text-base font-light leading-relaxed">
            <div className="card-glass p-6 md:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-serif text-white">Main Bus Terminals</h3>
              <p>
                <strong>Taliparamba Bus Terminal:</strong> Regular buses depart for Sreekandapuram and Naduvil every 15 to 20 minutes throughout the day.
              </p>
              <p>
                <strong>Sreekandapuram Bus Stand:</strong> Direct connectivity to Naduvil, Chemperi, and Vilakkannur.
              </p>
              <p>
                <strong>Naduvil Town (4 km from Church):</strong> Local shuttle buses and auto-rickshaws are available constantly from Naduvil town center to the Christ the King Church gates.
              </p>
            </div>

            <div className="card-glass p-6 md:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-serif text-white">Auto-Rickshaws & Local Taxis</h3>
              <p>
                Auto-rickshaws operate from Naduvil bus stand and junction directly to Vilakkannur Church (fare approx. ₹100 – ₹130).
              </p>
              <p>
                Private taxi stands are active in Naduvil, Sreekandapuram, and Taliparamba for pilgrim families requiring door-to-door transportation.
              </p>
              <p>
                Adequate parking space is available on the church grounds for pilgrim buses, private vans, and cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Links */}
      <section className="py-16 text-center relative z-10">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Planning an Overnight Pilgrimage?</h2>
          <p className="text-warm-200/80 text-base font-light">
            Review accommodation options near the church and check the updated Holy Mass schedule before you start your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/nearby-stays" className="btn-primary">
              View Nearby Stays & Resorts
            </Link>
            <Link to="/mass-timings" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Check Mass Timings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
