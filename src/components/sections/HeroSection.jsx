import { motion } from 'framer-motion';
import { Download, Play, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import PhoneMockup from '../ui/PhoneMockup';

/**
 * Hero Section - Main landing section with phone mockup and CTAs
 */
const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F1F5F9] dark:bg-[#0F172A] pt-20"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Floating background shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#2563EB] text-white text-sm font-bold rounded-full border-2 border-[#0F172A] neo-shadow"
            >
              <Sparkles size={14} />
              <span>Aplikasi Antrian Digital #1</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] dark:text-white leading-[1.05] mb-4"
            >
              Raudhatul
              <br />
              <span className="text-[#2563EB] relative">
                Klinik
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 bg-[#2563EB] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-300 mb-4"
            >
              Solusi Antrian Klinik Digital Modern dan Praktis
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
            >
              Tidak perlu antri panjang di klinik. Ambil nomor antrian digital langsung dari smartphone Anda, 
              pantau posisi antrian secara realtime, dan dapatkan notifikasi saat giliran tiba.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex gap-6 mb-8"
            >
              {[
                { value: '100%', label: 'Gratis' },
                { value: '3', label: 'Role User' },
                { value: 'Offline', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-[#2563EB]">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="https://drive.google.com/drive/folders/14-qQnGgGrm-E0q1rPr1YLKF4wUwAKSQ9?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white font-black text-lg rounded-2xl border-2 border-[#0F172A] neo-shadow-lg hover:bg-[#1E3A8A] transition-colors"
                whileHover={{ y: -3, x: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={20} />
                Download APK
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('screenshots')}
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white font-black text-lg rounded-2xl border-2 border-[#0F172A] dark:border-[#60A5FA] neo-shadow hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] transition-colors"
                whileHover={{ y: -3, x: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={20} className="text-[#2563EB]" />
                Lihat Demo
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <Shield size={14} />, text: 'Data Aman' },
                { icon: <Zap size={14} />, text: 'Super Cepat' },
                { icon: <ArrowRight size={14} />, text: 'Mudah Digunakan' },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white text-xs font-bold rounded-full border-2 border-[#0F172A] dark:border-[#60A5FA]"
                >
                  <span className="text-[#2563EB]">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Phone mockups */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <PhoneMockupGroup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-3 bg-[#2563EB] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* Phone mockup group with floating animation */
const PhoneMockupGroup = () => (
  <div className="relative w-72 h-[520px] md:w-80 md:h-[560px]">
    {/* Background glow */}
    <div className="absolute inset-0 bg-[#2563EB]/20 rounded-full blur-3xl scale-75" />

    {/* Main phone */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <PhoneMockup gradient="from-blue-600 to-blue-800" />
    </motion.div>

    {/* Left phone (smaller, behind) */}
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-70"
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
    >
      <PhoneMockup gradient="from-indigo-500 to-blue-600" small />
    </motion.div>

    {/* Right phone (smaller, behind) */}
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-70"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
    >
      <PhoneMockup gradient="from-sky-500 to-blue-500" small />
    </motion.div>

    {/* Floating badges */}
    <motion.div
      className="absolute top-4 right-4 z-30 bg-white border-2 border-[#0F172A] rounded-xl px-3 py-2 neo-shadow"
      animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
    >
      <div className="text-xs font-black text-[#0F172A]"> Antrian</div>
      <div className="text-lg font-black text-[#2563EB]">A-042</div>
    </motion.div>

    <motion.div
      className="absolute bottom-12 left-0 z-30 bg-[#2563EB] border-2 border-[#0F172A] rounded-xl px-3 py-2 neo-shadow"
      animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.8 }}
    >
      <div className="text-xs font-bold text-white/80">Estimasi</div>
      <div className="text-sm font-black text-white">0 menit</div>
    </motion.div>

    <motion.div
      className="absolute top-1/3 right-0 z-30 bg-green-400 border-2 border-[#0F172A] rounded-xl px-3 py-2 neo-shadow"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1.2 }}
    >
      <div className="text-xs font-black text-[#0F172A]">✓ Terdaftar</div>
    </motion.div>
  </div>
);

/* Floating background shapes */
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large circle top right */}
    <motion.div
      className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-[#2563EB]/20"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
    />
    {/* Medium circle bottom left */}
    <motion.div
      className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-4 border-[#60A5FA]/20"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
    />
    {/* Small floating squares */}
    {[
      { top: '15%', left: '5%', delay: 0 },
      { top: '70%', left: '8%', delay: 1 },
      { top: '25%', right: '5%', delay: 0.5 },
      { top: '80%', right: '10%', delay: 1.5 },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-8 h-8 bg-[#2563EB]/10 border-2 border-[#2563EB]/20 rounded-lg"
        style={pos}
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut', delay: pos.delay }}
      />
    ))}
    {/* Gradient blob */}
    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl" />
  </div>
);

export default HeroSection;
