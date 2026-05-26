import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Hooks
import { useDarkMode } from './hooks/useDarkMode';

// Layout
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// UI Components
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';

// Sections
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import StatsSection from './components/sections/StatsSection';
import ScreenshotsSection from './components/sections/ScreenshotsSection';
import TechStackSection from './components/sections/TechStackSection';
import WhyChooseSection from './components/sections/WhyChooseSection';
import DownloadSection from './components/sections/DownloadSection';
import AboutSection from './components/sections/AboutSection';

/**
 * Main App component for RaudhatulKlinik landing page
 */
function App() {
  const { isDark, toggle } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  // Auto-dismiss loading after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#F1F5F9] dark:bg-[#0F172A]"
          >
            {/* Scroll progress indicator */}
            <ScrollProgress />

            {/* Sticky navbar */}
            <Navbar isDark={isDark} toggleDark={toggle} />

            {/* Page sections */}
            <main>
              <HeroSection />
              <StatsSection />
              <FeaturesSection />
              <ScreenshotsSection />
              <TechStackSection />
              <WhyChooseSection />
              <DownloadSection />
              <AboutSection />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
