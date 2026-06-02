import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.98 }} // Starts right, slightly scaled down
      animate={{ opacity: 1, x: 0, scale: 1 }}     // Slides to center, full scale
      exit={{ opacity: 0, x: -40, scale: 0.98 }}   // Slides left, scales down slightly
      transition={{ 
        duration: 0, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a cinematic, "snappy-then-smooth" feel
      }} 
      className="absolute inset-0 w-full h-[100dvh] bg-[#0a0d0a] overflow-hidden"
    >
      {children}
    </motion.div>
  );
}