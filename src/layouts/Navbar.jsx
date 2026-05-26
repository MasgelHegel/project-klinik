import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Stethoscope } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';

/**
 * Sticky responsive navbar with dark mode toggle
 */
const Navbar = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b-2 border-[#0F172A] dark:border-[#60A5FA] shadow-lg'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => handleNavClick('#hero')}
          >
            <div className="w-10 h-10 bg-[#2563EB] rounded-xl border-2 border-[#0F172A] neo-shadow flex items-center justify-center">
              <Stethoscope size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-black text-[#0F172A] dark:text-white">Raudhatul</span>
              <span className="text-lg font-black text-[#2563EB]">Klinik</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200
                  ${activeSection === link.href.replace('#', '')
                    ? 'bg-[#2563EB] text-white border-2 border-[#0F172A] neo-shadow'
                    : 'text-[#0F172A] dark:text-white hover:bg-[#2563EB]/10'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <motion.button
              onClick={toggleDark}
              className="w-10 h-10 rounded-xl border-2 border-[#0F172A] dark:border-[#60A5FA] bg-white dark:bg-[#1E293B] flex items-center justify-center neo-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-[#2563EB]" />
              )}
            </motion.button>

            {/* Download button - desktop */}
            <motion.a
              href="https://drive.google.com/drive/folders/14-qQnGgGrm-E0q1rPr1YLKF4wUwAKSQ9?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white font-bold text-sm rounded-xl border-2 border-[#0F172A] neo-shadow hover:bg-[#1E3A8A] transition-colors"
              whileHover={{ y: -2, x: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Download APK
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl border-2 border-[#0F172A] dark:border-[#60A5FA] bg-white dark:bg-[#1E293B] flex items-center justify-center neo-shadow"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0F172A] border-t-2 border-[#0F172A] dark:border-[#60A5FA] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl font-semibold text-[#0F172A] dark:text-white hover:bg-[#2563EB] hover:text-white transition-colors border-2 border-transparent hover:border-[#0F172A]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="https://drive.google.com/drive/folders/14-qQnGgGrm-E0q1rPr1YLKF4wUwAKSQ9?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 bg-[#2563EB] text-white font-bold rounded-xl border-2 border-[#0F172A] neo-shadow mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
              >
                Download APK
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
