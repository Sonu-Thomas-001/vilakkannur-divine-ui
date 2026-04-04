import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-ink pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-400 mb-6 drop-shadow-lg">
            {t("privacy.title", "Privacy Policy")}
          </h1>
          <p className="text-warm-50/60 mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-10 text-warm-50/80 leading-relaxed font-light">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">1. Introduction</h2>
              <p>
                Welcome to Christ the King Church, Vilakkannur. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-warm-50/70">
                <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers provided through our contact forms.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-warm-50/70">
                <li>To respond to your inquiries and requests submitted via our contact forms.</li>
                <li>To provide you with information about mass timings, events, or visits.</li>
                <li>To improve our website, services, and visitor experiences.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">5. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-4">
                <p className="text-white">Christ the King Church</p>
                <p className="text-warm-50/70">Vilakkannur, Naduvil P.O</p>
                <p className="text-warm-50/70">Kannur District, Kerala 670582</p>
                <p className="text-warm-50/70 mt-2">Email: info@vilakkannurchurch.org</p>
                <p className="text-warm-50/70">Phone: +91 460 222 0000</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
