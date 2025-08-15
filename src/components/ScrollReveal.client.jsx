"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, ...motionProps }) {
  return (
    <section className="will-change-transform">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 40 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </section>
  );
}
