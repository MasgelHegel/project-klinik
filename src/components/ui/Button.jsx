import { motion } from 'framer-motion';

/**
 * Reusable Neo Brutalism Button component
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold border-2 border-[#0F172A] transition-all duration-200 cursor-pointer select-none';

  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1E3A8A]',
    secondary: 'bg-white text-[#0F172A] hover:bg-[#F1F5F9]',
    outline: 'bg-transparent text-[#2563EB] border-[#2563EB] hover:bg-[#2563EB] hover:text-white',
    dark: 'bg-[#0F172A] text-white hover:bg-[#1E3A8A]',
    ghost: 'bg-transparent text-[#0F172A] border-transparent hover:bg-[#F1F5F9]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} neo-shadow hover-lift ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
