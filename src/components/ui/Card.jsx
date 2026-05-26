import { motion } from 'framer-motion';

/**
 * Reusable Neo Brutalism Card component
 */
const Card = ({
  children,
  className = '',
  hover = true,
  shadowColor = 'dark',
  ...props
}) => {
  const shadowClass = shadowColor === 'blue' ? 'neo-shadow-blue' : 'neo-shadow';

  return (
    <motion.div
      className={`
        bg-white dark:bg-[#1E293B] 
        border-2 border-[#0F172A] dark:border-[#60A5FA]
        rounded-2xl p-6
        ${shadowClass}
        ${hover ? 'hover-lift cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, x: -2 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
