import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Clock, Car, Instagram, Youtube, Facebook } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollToTop } from "./ScrollToTop";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTheme } from "../context/ThemeContext";

export function Layout() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const footerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const navLinks = [
    { name: t("nav.home", "Home"), path: "/" },
    { name: t("nav.about", "About"), path: "/about" },
    { name: t("nav.miracle", "The Miracle"), path: "/miracle" },
    { name: t("nav.visit", "Visit"), path: "/visit" },
    { name: t("nav.gallery", "Gallery"), path: "/gallery" },
    { name: t("nav.contact", "Contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 flex justify-center px-4",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div className={cn(
          "flex justify-between items-center transition-all duration-500 w-full",
          isScrolled 
            ? "max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 header-glass rounded-full px-6 py-3" 
            : "max-w-7xl bg-transparent border-transparent px-6 py-2"
        )}>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={theme === 'light' ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"} alt="Christ King Church Vilakkannur" className={cn("transition-all duration-500", isScrolled ? "h-8 md:h-10" : "h-10 md:h-12")} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-all duration-300 group py-2",
                  location.pathname === link.path
                    ? "text-gold-400"
                    : isScrolled ? "text-white/80 hover:text-white" : "text-white/90 drop-shadow-sm hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-gold-400 transform origin-left transition-transform duration-300",
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher isScrolled={isScrolled} />
            <Link 
              to="/visit" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-sm tracking-wide transition-all duration-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 hover:scale-105"
            >
              Plan Visit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              style={{
                boxShadow: 'var(--shadow-glass)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-btn-primary-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className={cn("w-6 h-6", isScrolled ? "text-white" : "text-white")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 md:p-8">
              <img src="/logos/logo-dark.svg" alt="Christ King Church Vilakkannur" className="h-10" />
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                style={{
                  boxShadow: 'var(--shadow-glass)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-btn-primary-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-3xl md:text-4xl font-serif transition-colors",
                      location.pathname === link.path ? "text-gold-400" : "text-white hover:text-gold-300"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <Link 
                  to="/visit" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-gold-500 text-white font-medium text-lg tracking-wide transition-all duration-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                >
                  Plan Visit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer ref={footerRef} className="relative bg-ink text-warm-50 overflow-hidden">
        {/* 1. TOP EXPERIENCE BLOCK (Hero-style footer) */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: isMobile ? 0 : y }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church-photo.jpg" 
              alt="Church at sunset" 
              className="w-full h-[120%] object-cover object-center opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/60 to-ink"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg">
                Begin Your Journey of Faith
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                Experience the divine presence and the miraculous Eucharistic event in the heart of Kerala.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link 
                  to="/visit" 
                  className="btn-primary w-full sm:w-auto text-center"
                >
                  Plan Your Visit
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. MAIN FOOTER GRID */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Column 1: Logo & Desc */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <Link to="/" className="inline-block">
                <img src="/logos/logo-dark.svg" alt="Christ King Church Vilakkannur" className="h-12" />
              </Link>
              <p className="text-warm-50/60 text-sm leading-relaxed max-w-sm">
                {t("footer.description", "A sanctuary of peace and a site of the miraculous Eucharistic event. We welcome pilgrims and visitors from around the world to experience the divine presence in the heart of Kerala.")}
              </p>
            </motion.div>

            {/* Column 2: Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-serif text-lg text-gold-400 mb-6">{t("footer.quick_links", "Quick Links")}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-warm-50/60 hover:text-gold-400 transition-colors flex items-center gap-2 group w-fit"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Visitor Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-serif text-lg text-gold-400 mb-6">Visitor Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-warm-50/60 group">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white/90 mb-1">Holy Mass Timings</span>
                    <span>Sundays: 7:00 AM, 9:30 AM<br/>Weekdays: 6:30 AM</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-warm-50/60 group">
                  <Car className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white/90 mb-1">Travel Info</span>
                    <span>Nearest Airport: Kannur (CNN)<br/>Nearest Railway: Kannur (CAN)</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Column 4: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-serif text-lg text-gold-400 mb-6">{t("footer.contact_us", "Contact Us")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-warm-50/60 group">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span dangerouslySetInnerHTML={{ __html: t("footer.address", "Vilakkannur, Naduvil P.O,<br />Kannur District, Kerala 670582") }} className="group-hover:text-white/80 transition-colors" />
                </li>
                <li className="flex items-center gap-3 text-sm text-warm-50/60 group">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white/80 transition-colors">{t("footer.phone", "+91 460 222 0000")}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-warm-50/60 group">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white/80 transition-colors">{t("footer.email", "info@vilakkannurchurch.org")}</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* 3. SOCIAL & CONNECT + 4. BOTTOM BAR */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white hover:shadow-[0_0_15px_rgba(5,150,105,0.5)] transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white hover:shadow-[0_0_15px_rgba(5,150,105,0.5)] transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white hover:shadow-[0_0_15px_rgba(5,150,105,0.5)] transition-all duration-300 hover:-translate-y-1">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-warm-50/40 text-center md:text-left order-3 md:order-2">
              {t("footer.copyright", "© {{year}} Christ the King Church, Vilakkannur. All rights reserved.", { year: new Date().getFullYear() })}
            </p>

            <div className="flex gap-6 order-2 md:order-3">
              <Link to="/privacy" className="text-warm-50/40 hover:text-gold-400 transition-colors text-xs">{t("footer.privacy", "Privacy Policy")}</Link>
              <Link to="/terms" className="text-warm-50/40 hover:text-gold-400 transition-colors text-xs">{t("footer.terms", "Terms of Service")}</Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
