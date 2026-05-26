import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

/**
 * Loading screen shown on initial page load
 */
const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-[#2563EB] rounded-3xl border-4 border-[#60A5FA] flex items-center justify-center"
          style={{ boxShadow: '0 0 40px rgba(37, 99, 235, 0.5)' }}
        >
          <Stethoscope size={44} className="text-white" />
        </motion.div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="text-4xl font-black text-white">
            Raudhatul<span className="text-[#60A5FA]">Klinik</span>
          </div>
          <div className="text-slate-400 text-sm mt-1">Antrian Digital Modern</div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64"
        >
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              onAnimationComplete={onComplete}
            />
          </div>
          <div className="text-center text-slate-500 text-xs mt-2">Memuat aplikasi...</div>
        </motion.div>

        {/* Floating dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#2563EB] rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
