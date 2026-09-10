import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  HelpCircle, ChevronDown, Search, Sparkles, Clock, 
  MapPin, BedDouble, ArrowRight, ShieldCheck
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItem, setOpenItem] = useState<number | null>(0);

  const categories = ["All", "The Miracle", "Mass Timings", "Travel & Location", "Pilgrimage & Stays"];

  const faqs = [
    {
      category: "The Miracle",
      q: "What is special about Vilakkannur Church?",
      a: "Christ the King Church in Vilakkannur, Kerala, is globally recognized as the site of a miraculous Eucharistic phenomenon that took place on November 15, 2013. A consecrated host exhibited the distinct, detailed image of the face of Jesus Christ crowned with thorns. Following exhaustive canonical investigations and rigorous scientific chemical testing (FTIR, HPLC, Mass Spectrometry), the Vatican formally recognized the miracle on May 31, 2025, elevating the parish into an internationally celebrated sanctuary for public Eucharistic veneration."
    },
    {
      category: "The Miracle",
      q: "When did the Vilakkannur Eucharistic Miracle occur?",
      a: "The miracle occurred during the 7:00 AM morning Holy Mass on Friday, November 15, 2013, celebrated by parish priest Father Thomas Pathickal at Christ the King Catholic Church in Vilakkannur."
    },
    {
      category: "The Miracle",
      q: "What scientific laboratory tests were conducted on the Sacred Host?",
      a: "Independent scientific laboratories subjected the host to spectroscopic and chromatographic tests including Fourier Transform Infrared Spectroscopy (FTIR), High-Performance Liquid Chromatography (HPLC), and Mass Spectrometry (GC-MS/LC-MS). The testing proved that no artificial paints, commercial dyes, synthetic inks, or biological fungal molds produced the portrait. The underlying substrate remains pure unleavened wheat bread without decomposition."
    },
    {
      category: "The Miracle",
      q: "When did the Vatican grant official recognition?",
      a: "The Holy See (Dicastery for the Doctrine of the Faith) in the Vatican published official recognition on May 31, 2025, validating the supernatural authenticity of the Eucharistic event and approving public veneration at the church."
    },
    {
      category: "The Miracle",
      q: "Is public veneration of the Miraculous Host permitted for visitors?",
      a: "Yes. The Miraculous Host is enthroned inside an ornate monstrance within the Adoration Chapel at Christ the King Church. Daily public adoration and prayer are open to all visitors and pilgrims from 5:30 AM to 8:00 PM."
    },
    {
      category: "Mass Timings",
      q: "What are the daily Holy Mass timings at Vilakkannur Church?",
      a: "From Monday to Thursday, Holy Masses are celebrated at 6:30 AM (Parish Chapel), 11:00 AM (Pilgrim Mass), and 6:00 PM (Sanctuary). On Friday and Saturday, five Masses are celebrated: 6:30 AM, 10:30 AM (with Novena to the Holy Face), 12:30 PM, 3:30 PM, and 6:00 PM."
    },
    {
      category: "Mass Timings",
      q: "How many Holy Masses are celebrated on Sundays?",
      a: "On Sundays, seven Holy Masses are celebrated to accommodate pilgrims: 5:30 AM, 7:30 AM, 9:30 AM (Grand Sung Solemn Qurbana), 12:30 PM, 3:30 PM, 5:30 PM, and 7:30 PM."
    },
    {
      category: "Mass Timings",
      q: "What time is the Sacrament of Confession available?",
      a: "Confessions are heard daily in the designated confessionals from 5:30 AM to 7:00 AM, 10:00 AM to 11:30 AM, and 3:30 PM to 6:00 PM."
    },
    {
      category: "Travel & Location",
      q: "Where is Vilakkannur Church located?",
      a: "Christ the King Church is located in Vilakkannur village, Naduvil Post Office (PIN: 670582), Taliparamba Taluk, Kannur District, Northern Kerala, India. The GPS coordinates are 12.0441° N, 75.5270° E."
    },
    {
      category: "Travel & Location",
      q: "Where is the nearest railway station to Vilakkannur Church?",
      a: "Kannur Main Railway Station (CAN) is approximately 48 to 50 km away (approx. 1 hour 25 mins by road) and serves as the primary railhead with express trains across India. Payyanur Railway Station (PAY) is approximately 40 to 42 km away, ideal for passengers on the Konkan Railway route."
    },
    {
      category: "Travel & Location",
      q: "What is the nearest airport to Vilakkannur Church?",
      a: "Kannur International Airport (CNN) is the closest airport, situated approximately 45 km away (approx. 1 hour 15 mins by road via Payyavoor and Naduvil), offering direct flights to the Gulf countries and domestic Indian metros."
    },
    {
      category: "Travel & Location",
      q: "How can I travel by public bus to Vilakkannur Church?",
      a: "Buses depart frequently from Taliparamba Bus Stand and Sreekandapuram to Naduvil. From Naduvil town center (4 km away), frequent local shuttle buses and auto-rickshaws connect directly to the church gates."
    },
    {
      category: "Pilgrimage & Stays",
      q: "What is the Second Saturday Convention at Vilakkannur?",
      a: "The Second Saturday Convention is a monthly major spiritual retreat held on every second Saturday from 9:00 AM to 4:00 PM. It features the Holy Rosary, praise & worship, scriptural preaching, Solemn Sung Mass, and a Eucharistic Healing Procession."
    },
    {
      category: "Pilgrimage & Stays",
      q: "Where can visitors and families stay near Vilakkannur Church?",
      a: "For families and overnight pilgrims seeking peaceful accommodation, Ave Vista Resorts (located in Balapuram, Vayattuparamba, near Alakode) is an outstanding nearby choice, offering single cottages (₹3000), family cottages (₹6000), tree houses (₹2000), and large group dormitory facilities, complete with Kerala dining and swimming pool. Additional lodge and hotel accommodations are available in Naduvil, Taliparamba, and Kannur."
    },
    {
      category: "Pilgrimage & Stays",
      q: "Is there a dress code for visiting the church and adoration chapel?",
      a: "Visitors and pilgrims are requested to wear modest, respectful attire covering shoulders and knees out of reverence for the sacred Eucharistic presence."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Vilakkannur Church FAQ | Eucharistic Miracle, Mass & Travel Questions"
        description="Comprehensive frequently asked questions about Vilakkannur Church: the 2013 Eucharistic Miracle, Holy Mass timings, nearest railway station, airport, and nearby stays."
        canonicalPath="/faq"
        schema={faqSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-deep-black to-deep-black pointer-events-none"></div>
        <div className="glow-gold w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Frequently Asked Questions", path: "/faq" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs md:text-sm uppercase tracking-wider mb-6 font-medium">
            <HelpCircle className="w-4 h-4 text-gold-400" />
            <span>Search Intent & Pilgrim Knowledge Base</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Vilakkannur Church <br />
            <span className="text-gradient-gold italic pr-2">Frequently Asked Questions</span>
          </h1>

          <p className="text-warm-200/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Clear, authoritative answers regarding the Eucharistic Miracle, Mass schedules, railway travel, directions, and nearby accommodations.
          </p>

          {/* Live Filter / Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-warm-200/40 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. railway, miracle, mass timings, resort)..."
              className="w-full pl-13 pr-6 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-warm-200/40 text-sm focus:outline-none focus:border-gold-400/50 transition-colors shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 bg-ink/50 border-b border-white/5 sticky top-20 z-20 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-deep-black font-medium shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-warm-200/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-4xl px-6 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <p className="text-warm-200/60 text-lg">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="px-6 py-2 rounded-full bg-white/10 text-white text-xs uppercase tracking-wider hover:bg-white/20"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="card-glass border border-white/5 hover:border-white/10 transition-colors overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left gap-4"
                  aria-expanded={openItem === index}
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400">
                      {faq.category}
                    </span>
                    <h2 className="text-base sm:text-lg md:text-xl font-serif text-white">
                      {faq.q}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 transition-transform duration-300 shrink-0 ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItem === index && (
                  <div className="p-6 md:p-8 pt-0 text-warm-200/80 text-sm md:text-base leading-relaxed font-light border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Bottom Conversion Links */}
      <section className="py-16 text-center relative z-10 bg-ink/70 border-t border-white/5">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif text-white">Have Further Questions?</h3>
          <p className="text-warm-200/80 text-sm md:text-base font-light">
            Our parish office staff is ready to help you plan your pilgrimage, answer group travel inquiries, or schedule Mass intentions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-primary">
              Contact Parish Office
            </Link>
            <Link to="/visit" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
