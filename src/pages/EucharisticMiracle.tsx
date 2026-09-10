import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { 
  Sparkles, Calendar, CheckCircle2, ShieldCheck, Microscope, 
  BookOpen, Eye, Clock, MapPin, ArrowRight, HelpCircle, ChevronDown, 
  FileText, HeartHandshake, Award
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { trackPlanVisit, trackMiracleEngagement } from "../lib/analytics";

export default function EucharisticMiracle() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const timelineEvents = [
    {
      date: "November 15, 2013",
      title: "The Morning Mass & The Elevation",
      type: "Documented Parish Event",
      summary: "During the 7:00 AM Holy Mass at Christ the King Church, Vilakkannur, celebrated by parish priest Father Thomas Pathickal, an unusual phenomenon occurred at the moment of the elevation and distribution of the Holy Eucharist.",
      details: "Father Thomas Pathickal noticed a distinct discolored mark forming on one of the consecrated hosts intended for distribution. Out of liturgical reverence, the priest set the consecrated host aside in the tabernacle within a sacred vessel for subsequent observation.",
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%201.jpg",
      tag: "Day of Occurrence"
    },
    {
      date: "November 15–18, 2013",
      title: "Appearance of the Human Face",
      type: "Reported Observation",
      summary: "Upon re-examining the consecrated host in the presence of parish trustees and faithful, a detailed portrait resembling the face of Jesus Christ crowned with thorns became clearly discernible on the wafer.",
      details: "Unlike typical mold or biochemical discoloration which produces irregular patches, the image revealed clear facial contours: two distinct eyes, a nose, lips, a beard line, and crown markings. Over subsequent days, parish witnesses observed the image become sharper rather than deteriorating.",
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor-2.webp",
      tag: "Parish Observation"
    },
    {
      date: "2014 – 2018",
      title: "Diocesan Investigation & Theological Commission",
      type: "Church Investigation",
      summary: "The Syro-Malabar Archeparchy of Tellicherry (Thalassery) constituted an official episcopal theological and canonical commission to safeguard the host and initiate formal procedural inquiry.",
      details: "Under canonical norms, the miraculous host was sealed in a protective microclimate reliquary. Detailed sworn testimonies were recorded from Father Thomas Pathickal, altar servers, and eyewitness parishioners present on November 15, 2013, ensuring rigorous chain of custody and evidentiary integrity.",
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle.webp",
      tag: "Canonical Inquiry"
    },
    {
      date: "2018 – 2023",
      title: "Rigorous Scientific & Analytical Laboratory Testing",
      type: "Scientific Testing",
      summary: "Samples were submitted to accredited specialized scientific laboratories for non-destructive and analytical chemical testing including FTIR, HPLC, and Mass Spectrometry.",
      details: "The scientific examinations sought to determine whether the image was formed by artificial pigments, dyes, biological fungi, microbial cultures, or foreign substances. Spectroscopic analysis confirmed the absence of commercial inks, paints, synthetic chemical binders, or exogenous pigments on the wheat host matrix.",
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-2.webp",
      tag: "Laboratory Testing"
    },
    {
      date: "May 31, 2025",
      title: "Vatican Recognition & Approval for Public Veneration",
      type: "Holy See Recognition",
      summary: "Following exhaustive review of the canonical, medical, and scientific dossiers, the Holy See in Rome formally recognized the supernatural character of the Vilakkannur Eucharistic event.",
      details: "The Vatican approved Christ the King Church, Vilakkannur, as a legitimate site for public Eucharistic devotion and veneration. The miraculous host was officially sanctioned for display in a designated chapel of perpetual adoration, confirming its stature as India's foremost recognized Eucharistic miracle.",
      image: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/vilakkannur-miracle-3.webp",
      tag: "Vatican Decree"
    }
  ];

  const scientificTests = [
    {
      method: "FTIR (Fourier Transform Infrared Spectroscopy)",
      focus: "Molecular & Organic Chemical Composition",
      finding: "Analysis revealed typical organic spectral peaks of unleavened wheat flour without foreign chemical additives, synthetic lacquers, or petroleum-based painting mediums.",
      significance: "Rules out manual artistic painting, modern dye application, or chemical staining."
    },
    {
      method: "HPLC (High-Performance Liquid Chromatography)",
      focus: "Organic Pigments & Colorant Separation",
      finding: "Chromatographic separation showed no detectable concentrations of common synthetic food colorings, vegetable dyes, or inorganic ink compounds.",
      significance: "Demonstrates that the dark shading forming the facial features is not a pigmentary deposit."
    },
    {
      method: "Mass Spectrometry (GC-MS / LC-MS)",
      focus: "Molecular Mass Fingerprinting",
      finding: "Verified molecular signatures characteristic of organic biological matrices while confirming the absence of adhesive solvents or fixatives.",
      significance: "Provides documented scientific proof of structural integrity without human tampering."
    }
  ];

  const miracleFaqs = [
    {
      q: "What is the Vilakkannur Eucharistic Miracle?",
      a: "The Vilakkannur Eucharistic Miracle is a Catholic event that occurred on November 15, 2013, at Christ the King Church in Vilakkannur, Kerala, India. During Holy Mass, an image resembling the crowned face of Jesus Christ appeared on a consecrated host. Following comprehensive theological and scientific examinations, it received formal Vatican recognition on May 31, 2025."
    },
    {
      q: "Where is the miraculous host kept today?",
      a: "The miraculous host is preserved at Christ the King Church, Vilakkannur, inside a specially designed secure monstrance in the Eucharistic Adoration Chapel. It is accessible for daily public veneration and prayer by pilgrims from 5:30 AM to 8:00 PM."
    },
    {
      q: "What did scientific tests reveal about the host?",
      a: "Accredited laboratories performed spectroscopic and chromatographic examinations, including FTIR, HPLC, and Mass Spectrometry. The tests confirmed that the image was not created by artificial inks, synthetic pigments, dyes, or fungal growth, corroborating the non-manufactured nature of the phenomenon."
    },
    {
      q: "Who was the priest celebrating Mass when the miracle happened?",
      a: "Father Thomas Pathickal was the parish priest celebrating the morning Holy Mass on Friday, November 15, 2013, when the phenomenon was first noted."
    },
    {
      q: "What is the difference between scientific facts and Catholic belief in this miracle?",
      a: "Scientific testing strictly establishes physical parameters: the composition of the host, the absence of synthetic pigments, and freedom from biological decay. Catholic theology interprets the event as an extraordinary sign of Christ's Real Presence in the Holy Eucharist, meant to strengthen the faith of believers."
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Eucharistic Miracle of Vilakkannur: History, Science & Vatican Recognition",
    "alternativeHeadline": "Comprehensive Documentation of the 2013 Miracle at Christ the King Church, Kerala",
    "image": "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp",
    "author": {
      "@type": "Organization",
      "name": "Christ the King Church, Vilakkannur",
      "url": "https://vilakkannurchurch.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Christ the King Church, Vilakkannur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vilakkannurchurch.vercel.app/logos/logo-icon.svg"
      }
    },
    "datePublished": "2024-01-15T08:00:00+05:30",
    "dateModified": "2026-03-10T12:00:00+05:30",
    "description": "Authoritative guide to the Vilakkannur Eucharistic Miracle at Christ the King Church, Kerala. Detailed account of the November 15, 2013 event, scientific examinations (FTIR, HPLC), and Vatican recognition.",
    "mainEntityOfPage": "https://vilakkannurchurch.vercel.app/eucharistic-miracle"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": miracleFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="relative w-full bg-deep-black text-warm-100 min-h-screen overflow-hidden">
      <SEO
        title="Vilakkannur Eucharistic Miracle | The Miracle at Christ the King Church"
        description="Comprehensive documentation of the Vilakkannur Eucharistic Miracle in Kerala, India. Explore the 2013 event, scientific analysis (FTIR, HPLC), and Vatican recognition."
        canonicalPath="/eucharistic-miracle"
        ogType="article"
        ogImage="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp"
        schema={[articleSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img
            src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/eucharistic-miracle-vilakkannoor.webp"
            alt="Vilakkannur Eucharistic Miracle Sacred Host"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/80 to-deep-black"></div>
          <div className="light-ray"></div>
          <div className="glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none"></div>
        </motion.div>

        <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Eucharistic Miracle", path: "/eucharistic-miracle" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-gold-500/30 text-gold-300 text-xs md:text-sm uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Documented Church History & Theological Miracle</span>
          </div>

          <h1 className="text-white mb-6 md:mb-8 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">
            The Vilakkannur <br />
            <span className="text-gradient-gold italic pr-2">Eucharistic Miracle</span>
          </h1>

          <p className="text-warm-200/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            An authoritative, documented account of the miraculous appearance of the face of Christ on the Sacred Host at Christ the King Church, Vilakkannur, Kerala, India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/visit"
              onClick={() => trackPlanVisit('miracle_hero')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105"
            >
              Plan Your Pilgrimage
            </Link>
            <Link
              to="/mass-timings"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-300"
            >
              View Mass Timings
            </Link>
          </div>
        </div>
      </section>

      {/* Key Facts / Executive Summary Card */}
      <section className="py-12 border-y border-white/10 bg-ink/60 relative z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="block text-xs uppercase tracking-widest text-warm-200/60 mb-1">Date of Occurrence</span>
              <strong className="text-xl md:text-2xl text-gold-400 font-serif">Nov 15, 2013</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="block text-xs uppercase tracking-widest text-warm-200/60 mb-1">Parish & Location</span>
              <strong className="text-lg md:text-xl text-white font-serif">Christ the King, Kerala</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="block text-xs uppercase tracking-widest text-warm-200/60 mb-1">Scientific Testing</span>
              <strong className="text-lg md:text-xl text-emerald-400 font-serif">FTIR, HPLC & Mass Spec</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="block text-xs uppercase tracking-widest text-warm-200/60 mb-1">Vatican Recognition</span>
              <strong className="text-xl md:text-2xl text-gold-300 font-serif">May 31, 2025</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 1. What Happened at Vilakkannur */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Documented Account</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              What Happened at Vilakkannur Church?
            </h2>
            <div className="text-warm-200/80 text-lg md:text-xl leading-relaxed font-light space-y-6">
              <p>
                On the morning of <strong>Friday, November 15, 2013</strong>, in the serene rural parish of <strong>Christ the King Church</strong> located in Vilakkannur (Naduvil, Kannur district, Kerala), parishioners gathered for standard morning Eucharistic celebration. The Holy Mass was celebrated by the parish priest, <strong>Father Thomas Pathickal</strong>.
              </p>
              <p>
                During the solemn communion rite, as the priest prepared the consecrated hosts, he observed an unusual, distinct darkening on one of the wafer hosts. In accordance with Roman Catholic liturgical norms regarding anomalies in sacred species, the host was respectfully set aside in a consecrated ciborium inside the church tabernacle.
              </p>
              <p>
                Within hours, when the sacred vessel was examined in the presence of parish representatives, the discoloration had developed into an unmistakable, detailed likeness of the <strong>crowned Holy Face of Jesus Christ</strong>. The features bore striking anatomical proportion: closed eyes, a nose bridge, facial contour, and distinct markings characteristic of the crown of thorns.
              </p>
            </div>
          </div>

          {/* Distinction Banner: Science vs Belief */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-white">Essential Factual Distinctions</h3>
                <p className="text-warm-200/80 text-sm md:text-base leading-relaxed font-light">
                  To maintain rigorous truthfulness, this resource explicitly differentiates between <strong>documented historical facts</strong> (dates, parish records, eyewitness sworn depositions), <strong>laboratory testing</strong> (chemical spectra, pigment tests), <strong>Church jurisdiction</strong> (diocesan decrees and Vatican approval), and <strong>theological faith</strong> (belief in the Real Presence of Christ).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Chronological Timeline */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">Historical Progression</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              Chronology of Events & Investigation
            </h2>
            <p className="text-warm-200/70 text-base md:text-lg font-light">
              From the initial morning liturgy to international scientific review and formal recognition by the Holy See.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-white/10">
            {timelineEvents.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-deep-black border-2 border-gold-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-gold-400"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="card-glass p-6 md:p-8 space-y-4 hover:border-gold-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20 font-medium">
                        {item.tag}
                      </span>
                      <span className="text-xs text-warm-200/50 flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-emerald-400">{item.type}</p>
                    <p className="text-warm-200/80 text-sm md:text-base leading-relaxed font-light">{item.summary}</p>
                    <p className="text-warm-200/60 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3 font-light">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Scientific Examination & Analytical Testing */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium">
              <Microscope className="w-4 h-4" />
              <span>Empirical Laboratory Scrutiny</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              Scientific Examination of the Sacred Host
            </h2>
            <p className="text-warm-200/70 text-base md:text-lg font-light leading-relaxed">
              Before any theological declaration could be considered, the Catholic Church mandated exhaustive independent laboratory analyses to verify the material nature of the phenomenon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scientificTests.map((test, index) => (
              <div key={index} className="card-glass p-6 md:p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-white">{test.method}</h3>
                  <span className="text-xs uppercase tracking-wider text-warm-200/60 block font-mono">
                    Focus: {test.focus}
                  </span>
                  <p className="text-sm text-warm-200/80 leading-relaxed font-light">{test.finding}</p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <span className="text-xs text-gold-400 font-medium block mb-1">Analytical Conclusion:</span>
                  <p className="text-xs text-warm-200/60 font-light">{test.significance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center text-sm text-warm-200/70 font-light max-w-3xl mx-auto">
            <p>
              <strong>Summary of Scientific Findings:</strong> The laboratory investigations confirmed that the facial portrait was not composed of synthetic inks, printer toner, biological molds, or applied pigment. The organic structure remained unleavened wheat bread, with the coloration exhibiting no cellular breakdown typical of spoilage.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vatican Recognition & Public Veneration */}
      <section className="section-padding bg-ink/70 border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium">
                <Award className="w-4 h-4" />
                <span>Holy See Decree</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Vatican Recognition on May 31, 2025
              </h2>
              <div className="text-warm-200/80 text-base md:text-lg leading-relaxed font-light space-y-4">
                <p>
                  On <strong>May 31, 2025</strong>, the Vatican formally published approval regarding the Vilakkannur Eucharistic Miracle, authorizing solemn public veneration.
                </p>
                <p>
                  This landmark decree recognized that the event provided credible, supernatural evidence of Christ's Eucharistic mystery, free from pious fraud or natural misinterpretation. The church at Vilakkannur was elevated in status to a globally significant Catholic pilgrimage destination.
                </p>
                <p>
                  Today, the sacred host is displayed in the main church sanctuary in a secure adoration monstrance where thousands of pilgrims gather for the <strong>Second Saturday Eucharistic Convention</strong> and continuous daily adoration.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/pilgrimage"
                  className="px-6 py-3 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 hover:bg-gold-500/30 transition-colors text-sm uppercase tracking-wider font-medium inline-flex items-center gap-2"
                >
                  <span>Pilgrimage Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/mass-timings"
                  className="px-6 py-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  Adoration Hours
                </Link>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,179,8,0.2)] group">
              <img
                src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/miracle%2010.jpg"
                alt="Christ King Church Vilakkannur Veneration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-xs text-warm-200/80 font-light">
                  Public Veneration: Daily from 5:30 AM to 8:00 PM at Christ the King Church, Vilakkannur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs on Eucharistic Miracle */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-4xl px-6 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Frequently Asked Questions About the Miracle
            </h2>
            <p className="text-warm-200/70 text-sm md:text-base font-light">
              Clear, verified responses to the most common search queries regarding Vilakkannur Church and the miracle.
            </p>
          </div>

          <div className="space-y-4">
            {miracleFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="card-glass overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left gap-4"
                  aria-expanded={openFaq === idx}
                >
                  <h3 className="font-serif text-lg md:text-xl text-white pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-6 md:p-8 pt-0 text-warm-200/80 text-sm md:text-base leading-relaxed font-light border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sources & References Section */}
      <section className="py-12 border-t border-white/10 bg-black/40 text-xs text-warm-200/60 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 space-y-4">
          <div className="flex items-center gap-2 text-warm-200/80 font-medium">
            <FileText className="w-4 h-4 text-gold-400" />
            <span>Documentary Sources & References</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 font-light leading-relaxed">
            <li>Parish Registers & Episcopal Dossier of Christ the King Church, Vilakkannur (Naduvil, Kerala, 670582).</li>
            <li>Archeparchy of Tellicherry (Thalassery) Diocesan Canonical Commission Inquiry Reports (2014–2020).</li>
            <li>Spectroscopic and Chemical Analytical Laboratory Reports (FTIR, HPLC, Mass Spectrometry) on the Host Matrix.</li>
            <li>Decree of the Holy See (Dicastery for the Doctrine of the Faith), Vatican City (May 31, 2025).</li>
          </ul>
        </div>
      </section>

      {/* Conversion / Next Step CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-ink text-center relative z-10">
        <div className="container mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Experience the Sanctuary in Person</h2>
          <p className="text-warm-200/80 text-base md:text-lg font-light">
            Plan your prayerful pilgrimage, join Holy Mass, and spend quiet moments before the miraculous host.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/visit" className="btn-primary">
              Plan Your Visit
            </Link>
            <Link to="/how-to-reach" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              How to Reach Vilakkannur
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
