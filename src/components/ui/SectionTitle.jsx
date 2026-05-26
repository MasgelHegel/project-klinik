import { motion } from 'framer-motion';

/**
 * Reusable Section Title component with animation
 */
const SectionTitle = ({ badge, title, highlight, subtitle, center = true }) => {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-2 bg-[#2563EB] text-white text-sm font-bold uppercase tracking-widest rounded-full border-2 border-[#0F172A] neo-shadow">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white leading-tight mb-4">
        {title}{' '}
        {highlight && (
          <span className="text-[#2563EB] relative inline-block">
            {highlight}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#2563EB] rounded-full" />
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
