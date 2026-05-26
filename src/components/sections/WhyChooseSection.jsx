import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { WHY_CHOOSE } from '../../utils/constants';

/**
 * Why Choose RaudhatulKlinik Section
 */
const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-[#F1F5F9] dark:bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-[#2563EB]/5 select-none pointer-events-none whitespace-nowrap">
        WHY US
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Kenapa Kami"
          title="Kenapa Pilih"
          highlight="RaudhatulKlinik?"
          subtitle="Kami hadir dengan solusi yang benar-benar memahami kebutuhan klinik modern Indonesia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, index) => (
            <WhyCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Without app */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-500 rounded-2xl p-6 neo-shadow">
            <div className="text-xl font-black text-red-600 mb-4"> Tanpa RaudhatulKlinik</div>
            <ul className="space-y-2">
              {['Antri panjang di klinik', 'Tidak tahu estimasi waktu', 'Kertas antrian mudah hilang', 'Tidak ada notifikasi'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
                  <span className="w-5 h-5 bg-red-200 dark:bg-red-800 rounded-full flex items-center justify-center text-xs">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With app */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-[#2563EB] rounded-2xl p-6 neo-shadow-blue">
            <div className="text-xl font-black text-[#2563EB] mb-4"> Dengan RaudhatulKlinik</div>
            <ul className="space-y-2">
              {['Antrian dari rumah via HP', 'Estimasi waktu akurat', 'Tiket digital QR code', 'Notifikasi otomatis'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                  <span className="w-5 h-5 bg-[#2563EB] rounded-full flex items-center justify-center text-xs text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -6, x: -3, rotate: index % 2 === 0 ? -1 : 1 }}
    className="group bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl p-6 neo-shadow cursor-pointer"
  >
    {/* Emoji icon */}
    <motion.div
      className="text-5xl mb-4"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {item.icon}
    </motion.div>

    <h3 className="text-xl font-black text-[#0F172A] dark:text-white mb-2">{item.title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>

    {/* Animated bottom bar */}
    <div className="mt-4 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#2563EB] rounded-full"
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
      />
    </div>
  </motion.div>
);

export default WhyChooseSection;
