import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  'circle',
  'triangle',
  'square',
  'plus',
  'ring'
];

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 40 + 20; // Increased size
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 20; // Slightly faster

        return (
          <motion.div
            key={i}
            className={`absolute ${shape}`}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.4 // Increased opacity
            }}
            initial={{ y: '110vh', rotate: 0 }}
            animate={{
              y: '-10vh',
              rotate: 360,
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingObjects;