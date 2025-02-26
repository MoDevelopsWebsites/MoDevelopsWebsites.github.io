import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSquares = () => {
      container.innerHTML = '';
      const width = Math.ceil(window.innerWidth / 40);
      const height = Math.ceil(window.innerHeight / 40);

      for (let i = 0; i < width * height; i++) {
        const square = document.createElement('div');
        square.className = 'interactive-square';
        container.appendChild(square);
      }
    };

    createSquares();
    window.addEventListener('resize', createSquares);

    return () => {
      window.removeEventListener('resize', createSquares);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="bg-pattern absolute inset-0" />
      <motion.div
        ref={containerRef}
        className="absolute inset-0 grid grid-flow-row-dense pointer-events-none"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, 40px)',
          gap: '0px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default BackgroundPattern;