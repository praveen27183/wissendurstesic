import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, speed = 2.5, enableShadows = true, className = '' }) => {
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpsideDown(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-4px 0 rgba(229, 9, 20, 0.8)' : 'none',
    '--before-shadow': enableShadows ? '4px 0 rgba(31, 81, 255, 0.8)' : 'none'
  };

  const baseClasses = 'relative inline-block select-none';

  const pseudoClasses = isUpsideDown
    ? 'after:content-[attr(data-text)] after:absolute after:top-0 after:left-[4px] after:text-white after:bg-transparent after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after ' +
      'before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-4px] before:text-white before:bg-transparent before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before'
    : '';

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <motion.div
      animate={{ rotate: isUpsideDown ? 180 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{ display: 'inline-block' }}
    >
      <span style={inlineStyles} data-text={children} className={combinedClasses}>
        {children}
      </span>
    </motion.div>
  );
};

export default GlitchText;
