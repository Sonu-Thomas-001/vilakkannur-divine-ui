/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Layout } from "./components/Layout";
import { SmoothScroll } from "./components/SmoothScroll";
import { ThemeProvider } from "./context/ThemeContext";
import { Preloader } from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Miracle from "./pages/Miracle";
import Visit from "./pages/Visit";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Stays from "./pages/Stays";

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
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
              <Route path="miracle" element={<Miracle />} />
              <Route path="visit" element={<Visit />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="stays" element={<Stays />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsOfService />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}
