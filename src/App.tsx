/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { SmoothScroll } from "./components/SmoothScroll";
import { ThemeProvider } from "./context/ThemeContext";
import { Preloader } from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Miracle from "./pages/Miracle";
import EucharisticMiracle from "./pages/EucharisticMiracle";
import Visit from "./pages/Visit";
import MassTimings from "./pages/MassTimings";
import HowToReach from "./pages/HowToReach";
import Location from "./pages/Location";
import Pilgrimage from "./pages/Pilgrimage";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Stays from "./pages/Stays";
import NearbyStays from "./pages/NearbyStays";

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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="eucharistic-miracle" element={<EucharisticMiracle />} />
              <Route path="miracle" element={<Miracle />} />
              <Route path="mass-timings" element={<MassTimings />} />
              <Route path="how-to-reach" element={<HowToReach />} />
              <Route path="location" element={<Location />} />
              <Route path="pilgrimage" element={<Pilgrimage />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="nearby-stays" element={<NearbyStays />} />
              <Route path="stays" element={<Stays />} />
              <Route path="visit" element={<Visit />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsOfService />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
  );
}
