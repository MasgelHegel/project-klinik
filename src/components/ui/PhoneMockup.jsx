import { motion } from 'framer-motion';

/**
 * Smartphone mockup component
 */
const PhoneMockup = ({ children, className = '', gradient = 'from-blue-500 to-blue-700', small = false }) => {
  return (
    <div className={`relative ${small ? 'w-36 h-64' : 'w-56 h-[480px]'} ${className}`}>
      {/* Phone frame */}
      <div className={`
        w-full h-full rounded-[2.5rem] border-4 border-[#0F172A] 
        bg-[#0F172A] overflow-hidden
        ${small ? '' : 'neo-shadow-xl'}
        relative
      `}>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0F172A] rounded-full z-10" />
        
        {/* Screen */}
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-4 pt-8`}>
          {children || <DefaultScreenContent small={small} />}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full" />
      </div>

      {/* Side buttons */}
      <div className="absolute right-[-6px] top-20 w-1.5 h-10 bg-[#0F172A] rounded-r-sm" />
      <div className="absolute left-[-6px] top-16 w-1.5 h-8 bg-[#0F172A] rounded-l-sm" />
      <div className="absolute left-[-6px] top-28 w-1.5 h-8 bg-[#0F172A] rounded-l-sm" />
    </div>
  );
};

const DefaultScreenContent = ({ small }) => (
  <div className="w-full h-full flex flex-col gap-2 pt-4">
    {/* Status bar */}
    <div className="flex justify-between items-center px-2 mb-2">
      <span className="text-white/80 text-[8px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-1.5 bg-white/80 rounded-sm" />
        <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
      </div>
    </div>

    {/* App header */}
    <div className="bg-white/20 rounded-xl p-2 mx-1">
      <div className="text-white font-black text-xs text-center">RaudhatulKlinik</div>
    </div>

    {/* Queue number */}
    <div className="bg-white rounded-xl p-3 mx-1 text-center border-2 border-[#0F172A]">
      <div className="text-[#2563EB] text-[8px] font-bold uppercase">Nomor Antrian</div>
      <div className="text-[#0F172A] text-2xl font-black">A-042</div>
      <div className="text-slate-500 text-[7px]">Estimasi: 15 menit</div>
    </div>

    {/* QR placeholder */}
    <div className="bg-white/20 rounded-xl p-2 mx-1 flex items-center justify-center">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-sm ${i % 3 === 0 || i === 4 ? 'bg-[#0F172A]' : 'bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </div>

    {/* Status cards */}
    <div className="grid grid-cols-2 gap-1 mx-1">
      <div className="bg-white/20 rounded-lg p-1.5 text-center">
        <div className="text-white text-[8px] font-bold">Menunggu</div>
        <div className="text-white text-sm font-black">12</div>
      </div>
      <div className="bg-white/20 rounded-lg p-1.5 text-center">
        <div className="text-white text-[8px] font-bold">Selesai</div>
        <div className="text-white text-sm font-black">28</div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
