import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-700"
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
