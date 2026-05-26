import { motion } from 'framer-motion';
import { Download, Smartphone, CheckCircle, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

/**
 * URL download APK - Google Drive
 */
const DOWNLOAD_URL = 'https://drive.google.com/drive/folders/14-qQnGgGrm-E0q1rPr1YLKF4wUwAKSQ9?usp=drive_link';

/**
 * APK Download Section with real QR code and download button
 */
const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-[#2563EB] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative circles */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-white/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-4 border-white/10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-white text-[#2563EB] text-sm font-bold uppercase tracking-widest rounded-full border-2 border-[#0F172A] neo-shadow"
          >
            Download Sekarang
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            Mulai Gunakan
            <br />
            <span className="text-yellow-300">RaudhatulKlinik</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-xl mx-auto"
          >
            Download APK gratis sekarang dan rasakan kemudahan antrian digital di klinik Anda.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Download button card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-[#0F172A] rounded-3xl p-8 neo-shadow-xl text-center"
          >
            <div className="w-20 h-20 bg-[#2563EB] rounded-2xl border-2 border-[#0F172A] neo-shadow flex items-center justify-center mx-auto mb-6">
              <Download size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-2">Download APK</h3>
            <p className="text-slate-500 text-sm mb-6">Versi 1.0.0 • Google Drive</p>

            <motion.a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-[#2563EB] text-white font-black text-lg rounded-2xl border-2 border-[#0F172A] neo-shadow-lg hover:bg-[#1E3A8A] transition-colors"
              whileHover={{ y: -3, x: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Download size={20} />
                Download Gratis
              </span>
            </motion.a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <CheckCircle size={14} className="text-green-500" />
              <span>Aman • Gratis • Tanpa Iklan</span>
            </div>

            {/* Direct link */}
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-[#2563EB] font-semibold hover:underline"
            >
              <ExternalLink size={12} />
              Buka Google Drive
            </a>
          </motion.div>

          {/* QR Code card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-2 border-[#0F172A] rounded-3xl p-8 neo-shadow-xl text-center"
          >
            <h3 className="text-xl font-black text-[#0F172A] mb-4">Scan QR Code</h3>

            {/* Real QR Code via Google Charts API (free, no key needed) */}
            <div className="w-44 h-44 mx-auto bg-white border-4 border-[#0F172A] rounded-2xl p-2 neo-shadow mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(DOWNLOAD_URL)}&color=0F172A&bgcolor=FFFFFF&margin=2`}
                alt="QR Code Download RaudhatulKlinik"
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            <p className="text-slate-500 text-sm mb-2">Scan dengan kamera HP Anda</p>
            <p className="text-xs text-slate-400 mb-3">Langsung menuju Google Drive</p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F1F5F9] text-[#2563EB] text-xs font-bold rounded-xl border-2 border-[#0F172A] hover:bg-[#2563EB] hover:text-white transition-colors"
            >
              <ExternalLink size={12} />
              Atau klik di sini
            </a>
          </motion.div>

          {/* Compatibility card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-[#0F172A] rounded-3xl p-8 neo-shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#2563EB] rounded-xl border-2 border-[#0F172A] neo-shadow flex items-center justify-center">
                <Smartphone size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0F172A]">Kompatibilitas</h3>
                <p className="text-xs text-slate-500">Android Support</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Android Version', value: '5.0+' },
                { label: 'RAM Minimum', value: '2 GB'},
                { label: 'Storage', value: '50 MB'},
                { label: 'Internet', value: 'Opsional' },
                { label: 'Kamera', value: 'Untuk QR Scan' },
              ].map((spec) => (
                <div key={spec.label} className="flex items-center justify-between p-3 bg-[#F1F5F9] rounded-xl">
                  <div className="flex items-center gap-2">
                    <span>{spec.icon}</span>
                    <span className="text-sm font-semibold text-[#0F172A]">{spec.label}</span>
                  </div>
                  <span className="text-sm font-black text-[#2563EB]">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Download button in compatibility card too */}
            <motion.a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#0F172A] text-white font-bold text-sm rounded-xl border-2 border-[#0F172A] neo-shadow hover:bg-[#1E3A8A] transition-colors"
              whileHover={{ y: -2, x: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download Sekarang
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
