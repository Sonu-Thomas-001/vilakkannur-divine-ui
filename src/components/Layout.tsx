import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function Layout() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "glass-dark py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-forest-900/5 group-hover:bg-gold-400/10 transition-colors">
              <span className="text-gold-500 font-serif text-xl">V</span>
            </div>
            <div className="flex flex-col">
              <span className={cn("font-serif text-xl leading-tight transition-colors", isScrolled ? "text-white" : "text-white drop-shadow-md")}>
                {t("footer.church_name", "Christ the King")}
              </span>
              <span className={cn("text-[10px] tracking-[0.2em] uppercase transition-colors", isScrolled ? "text-gold-400" : "text-white/80 drop-shadow-sm")}>
                {t("footer.location", "Vilakkannur Church")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all hover:text-gold-500",
                  location.pathname === link.path
                    ? "text-gold-400"
                    : isScrolled ? "text-white/80 hover:text-white" : "text-white/90 drop-shadow-sm hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled ? "text-white" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled ? "text-white" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-dark pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif transition-colors",
                    location.pathname === link.path ? "text-gold-400" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
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
      <footer className="bg-ink text-warm-50 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        <div className="glow-emerald w-[500px] h-[500px] -bottom-64 -right-64"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-xl">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl leading-tight text-white">
                    {t("footer.church_name", "Christ the King Church")}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400/80">
                    {t("footer.location", "Vilakkannur")}
                  </span>
                </div>
              </div>
              <p className="text-warm-50/60 text-sm leading-relaxed max-w-md">
                {t("footer.description", "A sanctuary of peace and a site of the miraculous Eucharistic event. We welcome pilgrims and visitors from around the world to experience the divine presence in the heart of Kerala.")}
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-gold-400 mb-6">{t("footer.quick_links", "Quick Links")}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-warm-50/60 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-gold-400 mb-6">{t("footer.contact_us", "Contact Us")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-warm-50/60">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: t("footer.address", "Vilakkannur, Naduvil P.O,<br />Kannur District, Kerala 670582") }} />
                </li>
                <li className="flex items-center gap-3 text-sm text-warm-50/60">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <span>{t("footer.phone", "+91 460 222 0000")}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-warm-50/60">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <span>{t("footer.email", "info@vilakkannurchurch.org")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-warm-50/40">
              {t("footer.copyright", "© {{year}} Christ the King Church, Vilakkannur. All rights reserved.", { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-warm-50/40 hover:text-gold-400 transition-colors text-xs">{t("footer.privacy", "Privacy Policy")}</a>
              <a href="#" className="text-warm-50/40 hover:text-gold-400 transition-colors text-xs">{t("footer.terms", "Terms of Service")}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
