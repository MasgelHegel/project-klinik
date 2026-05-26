import { motion } from 'framer-motion';
import {
  MousePointerClick, QrCode, Users, LayoutDashboard,
  BarChart3, WifiOff, Bell, Smartphone
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { FEATURES } from '../../utils/constants';

const iconMap = {
  MousePointerClick, QrCode, Users, LayoutDashboard,
  BarChart3, WifiOff, Bell, Smartphone
};

const colorMap = {
  'bg-blue-500': { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200' },
  'bg-indigo-500': { bg: 'bg-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-200' },
  'bg-blue-600': { bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
  'bg-sky-500': { bg: 'bg-sky-500', light: 'bg-sky-50', border: 'border-sky-200' },
  'bg-blue-700': { bg: 'bg-blue-700', light: 'bg-blue-50', border: 'border-blue-200' },
  'bg-indigo-600': { bg: 'bg-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200' },
  'bg-sky-600': { bg: 'bg-sky-600', light: 'bg-sky-50', border: 'border-sky-200' },
};

/**
 * Features Section - 8 feature cards in neo brutalism style
 */
const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge=" Fitur Unggulan"
          title="Semua yang Kamu"
          highlight="Butuhkan"
          subtitle="RaudhatulKlinik hadir dengan fitur lengkap untuk memudahkan manajemen antrian klinik modern."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#F1F5F9] dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl neo-shadow">
            <div className="text-left">
              <div className="font-black text-[#0F172A] dark:text-white">Dan masih banyak lagi...</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Update fitur terus dilakukan secara berkala</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  const Icon = iconMap[feature.icon];
  const colors = colorMap[feature.color] || colorMap['bg-blue-500'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, x: -3 }}
      className="group bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl p-6 neo-shadow cursor-pointer transition-all duration-200"
    >
      {/* Icon */}
      <div className={`w-14 h-14 ${colors.bg} rounded-xl border-2 border-[#0F172A] neo-shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
        {Icon && <Icon size={26} className="text-white" />}
      </div>

      {/* Number badge */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-black text-[#0F172A] dark:text-white text-base leading-tight">
          {feature.title}
        </h3>
        <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {feature.desc}
      </p>

      {/* Hover indicator */}
      <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colors.bg} rounded-full`}
          initial={{ width: '30%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
