import { motion } from "framer-motion";
import "./tra.css";
import { AnimatePresence } from 'framer-motion';

const Transition = (OgComponent) => {
  return () => (
    <>
      {/* Slide-in Animation */}
        <AnimatePresence mode="wait">
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }} // Start collapsed
        animate={{ scaleY: 0 }} // Expand to full screen
        exit={{ scaleY: 1 }} // Collapse on exit
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Render the Wrapped Component */}
      <OgComponent />

      {/* Slide-out Animation */}
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }} // Start full screen
        animate={{ scaleY: 0 }} // Collapse during animation
        exit={{ scaleY: 0 }} // Ensure it collapses on exit
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      </AnimatePresence>
    </>
  );
};

export default Transition;