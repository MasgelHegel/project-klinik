import { motion } from 'framer-motion';
import { GitBranch, Mail, Globe, ExternalLink, Stethoscope, Heart, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';

/**
 * Footer component - smooth minimalist with social links
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Top border */}
      <div className="h-1 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />

      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl border-2 border-[#60A5FA] flex items-center justify-center">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-white">Raudhatul</span>
                <span className="text-lg font-black text-[#60A5FA]">Klinik</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Solusi antrian klinik digital modern yang memudahkan pasien dan meningkatkan efisiensi klinik.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <GitBranch size={16} />, href: '#', label: 'GitHub' },
                { icon: <Mail size={16} />, href: '#', label: 'Email' },
                { icon: <Globe size={16} />, href: '#', label: 'Website' },
                { icon: <ExternalLink size={16} />, href: '#', label: 'Portfolio' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-[#1E293B] border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-[#60A5FA] text-sm font-medium transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full group-hover:bg-[#60A5FA] transition-colors" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* App info */}
          <div>
            <h4 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Informasi Aplikasi</h4>
            <div className="space-y-3">
              {[
                { label: 'Platform', value: 'Android' },
                { label: 'Versi', value: '1.0.0' },
                { label: 'Ukuran', value: '69.1 MB' },
                { label: 'Lisensi', value: 'Open Source' },
                { label: 'Status', value: 'Aktif' },
              ].map((info) => (
                <div key={info.label} className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">{info.label}</span>
                  <span className="text-white text-sm font-bold">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Download mini button */}
            <motion.a
              href="https://drive.google.com/drive/folders/14-qQnGgGrm-E0q1rPr1YLKF4wUwAKSQ9?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full py-3 bg-[#2563EB] text-white font-bold text-sm text-center rounded-xl border border-[#60A5FA] hover:bg-[#1E3A8A] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download APK Gratis
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© 2026 RaudhatulKlinik</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">Built with React + Flutter</span>
            
            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 bg-[#2563EB] border border-[#60A5FA] rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
