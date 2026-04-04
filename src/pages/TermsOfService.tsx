import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-ink pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-900/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-400 mb-6 drop-shadow-lg">
            {t("terms.title", "Terms of Service")}
          </h1>
          <p className="text-warm-50/60 mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-10 text-warm-50/80 leading-relaxed font-light">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of Christ the King Church, Vilakkannur (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Site's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">2. Use of the Site</h2>
              <p>
                The Site and its original content, features, and functionality are owned by Christ the King Church and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">3. Intellectual Property</h2>
              <p>
                All content published and made available on our Site is the property of Christ the King Church and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.
              </p>
              <p>
                Images of the church, the Eucharistic miracle, and related spiritual content are sacred and must be treated with respect. Unauthorized commercial use or reproduction without explicit written permission is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">4. Links to Other Websites</h2>
              <p>
                Our Site contains links to third-party websites or services that are not owned or controlled by Christ the King Church. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">5. Limitation of Liability</h2>
              <p>
                Christ the King Church and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">6. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">7. Contact Information</h2>
              <p>
                If you have any questions or concerns about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-4">
                <p className="text-white">Christ the King Church</p>
                <p className="text-warm-50/70">Vilakkannur, Naduvil P.O</p>
                <p className="text-warm-50/70">Kannur District, Kerala 670582</p>
                <p className="text-warm-50/70 mt-2">Email: info@vilakkannurchurch.org</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
