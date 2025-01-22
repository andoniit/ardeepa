import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

const opacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const slideUp = {
  initial: { top: "0" },
  animate: { top: "0", transition: { duration: 0.8 } },
  exit: {
    top: "-100vh", // Slide to the top of the screen
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(onComplete, 1200); // Allow time for exit animation to complete
      return;
    }
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key="preloader"
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="introduction"
      >
        {dimension.width > 0 && (
          <>
            <motion.p variants={opacity}>
              <span></span>
              {words[index]}
            </motion.p>
            <svg>
              <motion.path variants={curve}></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}