/**
 * Reusable Badge component
 */
const Badge = ({ children, color = 'blue', className = '' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    sky: 'bg-sky-100 text-sky-800 border-sky-300',
    dark: 'bg-[#0F172A] text-white border-[#0F172A]',
    white: 'bg-white text-[#0F172A] border-[#0F172A]',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-3 py-1 
        text-xs font-bold uppercase tracking-wider
        border-2 rounded-full
        ${colors[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
