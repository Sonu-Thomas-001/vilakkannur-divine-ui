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
          "fixed top-0 w-full z-50 transition-all duration-500 flex justify-center px-4",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div className={cn(
          "flex justify-between items-center transition-all duration-500 w-full",
          isScrolled 
            ? "max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_15px_rgba(234,179,8,0.05)] rounded-full px-6 py-3" 
            : "max-w-7xl bg-transparent border-transparent px-6 py-2"
        )}>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={isScrolled ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"} alt="Vilakkannur Church" className={cn("transition-all duration-500", isScrolled ? "h-8 md:h-10" : "h-10 md:h-12")} />
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
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
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
              <img src="/logos/logo-light.svg" alt="Vilakkannur Church" className="h-10" />
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
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
      <footer className="bg-ink text-warm-50 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        <div className="glow-emerald w-[500px] h-[500px] -bottom-64 -right-64"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logos/logo-dark.svg" alt="Vilakkannur Church" className="h-12" />
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
