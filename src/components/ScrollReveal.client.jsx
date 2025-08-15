"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // animate every time in view
      transition={{ duration: 0.6, delay }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
