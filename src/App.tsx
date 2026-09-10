/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { SmoothScroll } from "./components/SmoothScroll";
import { ThemeProvider } from "./context/ThemeContext";
import { Preloader } from "./components/Preloader";

// Route-level code-splitting for optimal LCP, INP, and bundle performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const EucharisticMiracle = lazy(() => import("./pages/EucharisticMiracle"));
const Visit = lazy(() => import("./pages/Visit"));
const MassTimings = lazy(() => import("./pages/MassTimings"));
const HowToReach = lazy(() => import("./pages/HowToReach"));
const Location = lazy(() => import("./pages/Location"));
const Pilgrimage = lazy(() => import("./pages/Pilgrimage"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NearbyStays = lazy(() => import("./pages/NearbyStays"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-deep-black text-gold-400">
      <div className="w-8 h-8 rounded-full border-2 border-gold-500/20 border-t-gold-400 animate-spin" />
    </div>
  );
}

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <SmoothScroll>
            <AnimatePresence mode="wait">
            {isPreloading && <Preloader key="preloader" onComplete={() => setIsPreloading(false)} />}
          </AnimatePresence>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                
                {/* Primary Canonical Miracle Route & Consolidated Redirect */}
                <Route path="eucharistic-miracle" element={<EucharisticMiracle />} />
                <Route path="miracle" element={<Navigate to="/eucharistic-miracle" replace />} />
                
                {/* Primary Timings & Pilgrim Directions */}
                <Route path="mass-timings" element={<MassTimings />} />
                <Route path="how-to-reach" element={<HowToReach />} />
                <Route path="location" element={<Location />} />
                <Route path="pilgrimage" element={<Pilgrimage />} />
                <Route path="visit" element={<Visit />} />
                
                {/* Accommodation & Consolidated Redirect */}
                <Route path="nearby-stays" element={<NearbyStays />} />
                <Route path="stays" element={<Navigate to="/nearby-stays" replace />} />
                
                {/* FAQ, Media, Contact & Legal */}
                <Route path="faq" element={<FAQ />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />

                {/* 404 Catch-All */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
  );
}
