import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

/**
 * Animated stats counter section
 */
const StatsSection = () => {
  const stats = [
    { value: 100, suffix: '%', label: 'Gratis Selamanya' },
    { value: 8, suffix: '+', label: 'Fitur Unggulan' },
    { value: 3, suffix: '', label: 'Role Pengguna' },
    { value: 99, suffix: '%', label: 'Uptime Offline' },
  ];

  return (
    <section className="py-16 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Gradient line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * stat.value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, x: -2 }}
      className="bg-[#1E293B] border-2 border-[#60A5FA]/30 rounded-2xl p-6 text-center cursor-pointer group hover:border-[#60A5FA] transition-colors"
    >
      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-200">
        {stat.icon}
      </div>
      <div className="text-4xl font-black text-white mb-1">
        <span className="text-[#60A5FA]">{count}</span>
        <span className="text-[#2563EB]">{stat.suffix}</span>
      </div>
      <div className="text-slate-400 text-sm font-semibold">{stat.label}</div>
    </motion.div>
  );
};

export default StatsSection;
