import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { TECH_STACK } from '../../utils/constants';

/**
 * Technology Stack Section - Grid of tech badges
 */
const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="⚙️ Tech Stack"
          title="Dibangun dengan"
          highlight="Teknologi Modern"
          subtitle="Kombinasi teknologi modern yang dipilih untuk performa, keandalan, dan kemudahan pengembangan."
        />

        {/* Main tech grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {TECH_STACK.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F1F5F9] dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-3xl p-8 neo-shadow-lg"
        >
          <h3 className="text-xl font-black text-[#0F172A] dark:text-white mb-6 text-center">
            Lihat detail selengkapnya
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: 'Flutter App', desc: 'Mobile Client', color: 'bg-blue-500' },
              { label: '→', icon: null, desc: null, color: null },
              { label: 'Provider', desc: 'State Mgmt', color: 'bg-indigo-500' },
              { label: '→', icon: null, desc: null, color: null },
              { label: 'SQLite' , desc: 'Local DB', color: 'bg-sky-500' },
            ].map((item, i) =>
              item.icon ? (
                <motion.div
                  key={i}
                  className={`${item.color} border-2 border-[#0F172A] rounded-2xl p-4 text-center neo-shadow min-w-[100px]`}
                  whileHover={{ y: -4, x: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-white font-black text-sm">{item.label}</div>
                  <div className="text-white/70 text-xs">{item.desc}</div>
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  className="text-2xl font-black text-[#2563EB] hidden md:block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              )
            )}
          </div>

          {/* QR Flutter addon */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#0F172A] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl neo-shadow">
              <div>
                <div className="font-black text-[#0F172A] dark:text-white text-sm">QR Flutter Plugin</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Generate & Scan QR Code</div>
              </div>
              <span className="px-2 py-0.5 bg-[#2563EB] text-white text-xs font-bold rounded-full">Integrated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechCard = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6, x: -3, rotate: -1 }}
    className="group w-[calc(50%-12px)] sm:w-44 bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl p-6 neo-shadow text-center cursor-pointer"
  >
    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-200">
      {tech.icon}
    </div>
    <div className="font-black text-[#0F172A] dark:text-white text-lg mb-1">{tech.name}</div>
    <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${tech.color} dark:bg-opacity-20`}>
      {tech.desc}
    </div>
  </motion.div>
);

export default TechStackSection;
