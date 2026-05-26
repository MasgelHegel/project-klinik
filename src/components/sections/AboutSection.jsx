import { motion } from 'framer-motion';
import { GitBranch, Mail, Globe, Code2, GraduationCap, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

/**
 * About Developer Section
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Developer"
          title="Tentang"
          highlight="Pengembang"
          subtitle="Dibangun dengan penuh semangat oleh mahasiswa yang berdedikasi untuk inovasi teknologi modern."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-3xl p-8 neo-shadow-xl">
              {/* Avatar */}
              <div className="flex items-start gap-6 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 border-2 border-[#0F172A] rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0F172A] dark:text-white">Developer</h3>
                  <p className="text-[#2563EB] font-bold">RaudhatulKlinik</p>
                  <div className="flex items-center gap-2 mt-2">
                    <GraduationCap size={14} className="text-slate-400" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">Mahasiswa Teknik Informatika</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Mahasiswa semester 4 yang bersemangat dalam pengembangan aplikasi mobile. 
                RaudhatulKlinik adalah proyek tugas akhir yang menggabungkan teknologi Flutter 
                dengan kebutuhan nyata manajemen antrian klinik modern.
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-black text-[#0F172A] dark:text-white mb-3 text-sm uppercase tracking-wider">Teknologi yang Dipelajari</h4>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'SQLite', 'React', 'Tailwind'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#F1F5F9] dark:bg-[#0F172A] text-[#0F172A] dark:text-white text-xs font-bold rounded-full border-2 border-[#0F172A] dark:border-[#60A5FA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: <GitBranch size={18} />, label: 'GitHub', href: 'https://github.com/MasgelHegel', color: 'bg-[#0F172A] text-white' },
                  { icon: <Mail size={18} />, label: 'Email', href: 'https://masgeltori@gmail.com', color: 'bg-[#2563EB] text-white' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center gap-2 px-4 py-2 ${social.color} font-bold text-sm rounded-xl border-2 border-[#0F172A] neo-shadow`}
                    whileHover={{ y: -2, x: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {social.icon}
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Project card */}
            <div className="bg-[#F1F5F9] dark:bg-[#1E293B] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl p-6 neo-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-xl border-2 border-[#0F172A] neo-shadow flex items-center justify-center">
                  <BookOpen size={18} className="text-white" />
                </div>
                <h4 className="font-black text-[#0F172A] dark:text-white">Tentang Proyek</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                RaudhatulKlinik dikembangkan sebagai proyek Tugas Akhir dengan tujuan 
                memodernisasi sistem antrian klinik tradisional menggunakan teknologi mobile terkini.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2', label: 'Bulan Pengembangan' },
                { value: '8+', label: 'Fitur Utama' },
                { value: '3', label: 'Role Pengguna'},
                { value: '100%', label: 'Open Source' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-[#0F172A] border-2 border-[#0F172A] dark:border-[#60A5FA] rounded-2xl p-4 neo-shadow text-center"
                  whileHover={{ y: -3, x: -2 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black text-[#2563EB]">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech learned */}
            <div className="bg-[#2563EB] border-2 border-[#0F172A] rounded-2xl p-6 neo-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-white" />
                <h4 className="font-black text-white">Stack yang Digunakan</h4>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Flutter + Dart', level: 90 },
                  { name: 'SQLite Database', level: 85 },
                  { name: 'UI/UX Design', level: 85 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-white text-xs font-bold mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
