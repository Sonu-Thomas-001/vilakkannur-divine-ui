import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ml', label: 'ML', name: 'മലയാളം' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' },
  { code: 'ta', label: 'TA', name: 'தமிழ்' },
];

export function LanguageSwitcher({ isScrolled }: { isScrolled: boolean }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (i18n.language) {
      const code = i18n.language.split('-')[0];
      // Remove any existing lang-* classes
      document.body.className = document.body.className.split(' ').filter(c => !c.startsWith('lang-')).join(' ');
      document.body.classList.add(`lang-${code}`);
    }
  }, [i18n.language]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
          isScrolled 
            ? "bg-white/5 border border-white/10 hover:bg-white/10 text-white" 
            : "bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/40 text-white"
        )}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wider">{currentLang.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-36 bg-black/80 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] z-50"
          >
            <div className="flex flex-col py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "px-4 py-2.5 text-sm text-left transition-colors hover:bg-white/10",
                    i18n.language?.startsWith(lang.code) ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-white"
                  )}
                >
                  <span className="block text-xs font-medium mb-0.5">{lang.label}</span>
                  <span className="block text-[10px] opacity-60">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
