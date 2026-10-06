import React, { useState, useCallback } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import AIWorkflow from './components/AIWorkflow';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import CursorEffect from './components/CursorEffect';

const SECTION_IDS = [
  'home',
  'about',
  'projects',
  'expertise',
  'experience',
  'ai',
  'services',
  'education',
  'contact'
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, -80);
  useReveal();

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
  }, []);

  return (
    <>
      {/* Accessibility Skip Link */}
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Interactive Cursor Click Effect */}
      <CursorEffect />

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={isToastVisible} />

      {/* Header / Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Expertise />
        <Experience />
        <AIWorkflow />
        <Services />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
