import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AIQuoteEstimator from './components/AIQuoteEstimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import CustomCursor from './components/CustomCursor';
import StickyNav from './components/StickyNav';
import SplashScreen from './components/SplashScreen';
import BehindTheScenes from './components/BehindTheScenes';
import GearAndSetup from './components/GearAndSetup';
import GeminiChatbot from './components/GeminiChatbot';
import FAQ from './components/FAQ';
import ReferralBanner from './components/ReferralBanner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="bg-primary dark:bg-[#0A0A14] min-h-screen relative isolate">
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <BehindTheScenes />
        <GearAndSetup />
        <ReferralBanner />
        <Testimonials />
        <AIQuoteEstimator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
      <StickyNav />
      <GeminiChatbot />
    </div>
  );
};

export default App;