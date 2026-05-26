import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { SCREENSHOTS } from '../../utils/constants';

/**
 * Screenshots Section - Carousel dengan gambar asli aplikasi
 */
const ScreenshotsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <section id="screenshots" className="py-24 bg-[#F1F5F9] dark:bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge=" Screenshot Aplikasi"
          title="Tampilan"
          highlight="Premium"
          subtitle="Desain UI yang bersih, modern, dan intuitif untuk pengalaman pengguna terbaik."
        />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone carousel */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center gap-4">
              {/* Prev button */}
              <motion.button
                onClick={() => go(-1)}
                className="w-12 h-12 bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-xl neo-shadow flex items-center justify-center z-10"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} className="text-[#2563EB]" />
              </motion.button>

              {/* Phone display area */}
              <div className="relative w-64 h-[500px] flex items-center justify-center">
                {/* Side phones (prev & next) */}
                {[-1, 1].map((offset) => {
                  const idx = (active + offset + SCREENSHOTS.length) % SCREENSHOTS.length;
                  return (
                    <motion.div
                      key={`side-${idx}`}
                      className="absolute opacity-40 scale-75 pointer-events-none"
                      style={{ x: offset * 120 }}
                    >
                      <PhoneFrame small>
                        <img
                          src={SCREENSHOTS[idx].image}
                          alt={SCREENSHOTS[idx].title}
                          className="w-full h-full object-cover"
                        />
                      </PhoneFrame>
                    </motion.div>
                  );
                })}

                {/* Main phone */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={{
                      enter: (d) => ({ x: d * 100, opacity: 0, scale: 0.9 }),
                      center: { x: 0, opacity: 1, scale: 1 },
                      exit: (d) => ({ x: d * -100, opacity: 0, scale: 0.9 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
                    className="relative z-10"
                  >
                    <PhoneFrame>
                      <img
                        src={SCREENSHOTS[active].image}
                        alt={SCREENSHOTS[active].title}
                        className="w-full h-full object-cover"
                      />
                    </PhoneFrame>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next button */}
              <motion.button
                onClick={() => go(1)}
                className="w-12 h-12 bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-xl neo-shadow flex items-center justify-center z-10"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} className="text-[#2563EB]" />
              </motion.button>
            </div>
          </div>

          {/* Info panel */}
          <div className="flex-1 max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-bold rounded-full border-2 border-[#0F172A] neo-shadow mb-3">
                    {String(active + 1).padStart(2, '0')} / {String(SCREENSHOTS.length).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-black text-[#0F172A] dark:text-white mb-3">
                    {SCREENSHOTS[active].title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                    {SCREENSHOTS[active].desc}
                  </p>
                </div>

                {/* Feature list for this screen */}
                <div className="space-y-3">
                  {getScreenFeatures(active).map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-xl neo-shadow"
                    >
                      <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-black">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-[#0F172A] dark:text-white">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {SCREENSHOTS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`h-3 rounded-full border-2 border-[#0F172A] transition-all duration-300 ${
                    i === active ? 'w-8 bg-[#2563EB]' : 'w-3 bg-white dark:bg-[#1E293B]'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Komponen frame smartphone — wraps gambar dengan bingkai HP
 */
const PhoneFrame = ({ children, small = false }) => {
  const w = small ? 'w-36' : 'w-56';
  const h = small ? 'h-64' : 'h-[480px]';

  return (
    <div className={`relative ${w} ${h}`}>
      {/* Outer frame */}
      <div className={`w-full h-full rounded-[2.5rem] border-4 border-[#0F172A] bg-[#0F172A] overflow-hidden relative ${small ? '' : 'neo-shadow-xl'}`}>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0F172A] rounded-full z-10" />

        {/* Screen content */}
        <div className="w-full h-full pt-7 overflow-hidden">
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full z-10" />
      </div>

      {/* Side buttons */}
      <div className="absolute right-[-5px] top-20 w-1.5 h-10 bg-[#0F172A] rounded-r-sm" />
      <div className="absolute left-[-5px] top-16 w-1.5 h-8 bg-[#0F172A] rounded-l-sm" />
      <div className="absolute left-[-5px] top-28 w-1.5 h-8 bg-[#0F172A] rounded-l-sm" />
    </div>
  );
};

const getScreenFeatures = (index) => {
  const features = [
    ['Ambil antrian 1 klik', 'Lihat estimasi waktu', 'Notifikasi realtime'],
    ['Panggil pasien berikutnya', 'Scan QR code pasien', 'Update status antrian', 'Memberikan resep obat', 'Konfirmasi pembayaran pasien'],
    ['QR code unik per antrian', 'Scan di klinik', 'Validasi otomatis', 'Anda cukup memberikan QR-Code kepada petugas'],
    ['Kelola jam operasional Klinik', 'Kelola obat dan memberikan resep obat dari dokter', 'Kelola dokter yang bertugas'],
    ['Posisi antrian live', 'Update otomatis', 'Info dokter bertugas'],
  ];
  return features[index] || features[0];
};

export default ScreenshotsSection;
