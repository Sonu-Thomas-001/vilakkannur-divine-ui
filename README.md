# 🔥 Vilakkannur Experience

> **A cinematic, immersive digital journey into the heart of a Vatican-recognized Eucharistic miracle.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge)](https://your-demo-link.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

**Vilakkannur Experience** is a premium web application designed for Christ the King Church in Kerala, India. It serves as a digital sanctuary, highlighting the profound Eucharistic miracle that occurred in 2013 and received official Vatican recognition in 2025. 

Built to attract global pilgrims and visitors, this project moves beyond a traditional informational site. It leverages modern web technologies to deliver a cinematic, storytelling-driven user experience that evokes reverence, awe, and spiritual connection.

## ✨ Features

- **Cinematic UI/UX:** Dark-themed, glassmorphism-inspired design with gold and emerald accents for a premium, sacred aesthetic.
- **Scroll-Based Storytelling:** Immersive timeline and narrative flow that guides users through the history and significance of the miracle.
- **Fluid Animations:** Smooth page transitions, parallax effects, and micro-interactions powered by Framer Motion.
- **Responsive Design:** Flawless execution across all devices, from ultra-wide desktop monitors to mobile screens.
- **Multilingual Support:** Built-in internationalization (i18n) supporting English, Malayalam, and scalable to other languages.
- **SEO Optimized:** Structured semantic HTML and meta-tag readiness to ensure global discoverability.

## 🖼️ Preview

*(Replace with actual screenshots or GIFs of your project)*

<div align="center">
  <img src="https://via.placeholder.com/800x450/0a0a0a/eab308?text=Hero+Section+Preview" alt="Hero Preview" width="48%" />
  <img src="https://via.placeholder.com/800x450/0a0a0a/10b981?text=Miracle+Timeline+Preview" alt="Timeline Preview" width="48%" />
</div>

## 🧱 Tech Stack

This project is built with a modern, high-performance frontend stack:

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first, mobile-first)
- **Animations:** [Framer Motion](https://motion.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vilakkannur-experience.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd vilakkannur-experience
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000`.*

## 🌍 Multilingual Support

The application is architected for a global audience. Using `react-i18next`, the UI seamlessly switches between languages without page reloads. Currently configured for **English** and **Malayalam**, the translation files are modularly stored in `src/locales/`, making it trivial to add Spanish, Italian, or other languages for international pilgrims.

## 📱 Responsiveness

We utilize a strict **mobile-first** design philosophy. Using Tailwind CSS's responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`), every component—from the masonry image gallery to the interactive timeline—is engineered to adapt perfectly to the user's viewport, ensuring touch targets are accessible and typography remains highly legible on smaller screens.

## 📁 Project Structure

```text
vilakkannur-experience/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, LanguageSwitcher)
│   ├── locales/            # i18n translation files (en.json, ml.json)
│   ├── pages/              # Route components (Home, About, Miracle, Visit, Gallery, Contact)
│   ├── App.tsx             # Main application routing & layout
│   ├── i18n.ts             # Internationalization configuration
│   ├── index.css           # Global Tailwind styles & custom variables
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🔮 Future Enhancements

- [ ] **Virtual Tour:** 360° interactive view of the church interior and the sacred altar.
- [ ] **Pilgrimage Booking Integration:** Seamless scheduling for group visits and mass intentions.
- [ ] **Live Updates:** Real-time notifications for feast days, special masses, and parish news.
- [ ] **Audio Guide:** Embedded multilingual audio narration for the miracle timeline.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <i>Designed with reverence and crafted with code.</i>
</div>
