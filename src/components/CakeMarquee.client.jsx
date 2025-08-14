"use client";

import { motion } from "framer-motion";

const messages = [
  "Delicious Cheesecake! 🍰",
  "Chocolate Lovers Special! 🍫",
  "Mini Cheesecake Bites! 🧁",
  "Seasonal Fruit Cheesecakes! 🍓",
  "No-Bake Cheesecakes! 🥄",
  "Vegan Cheesecake Delights! 🌱",
  "Berry Good Cheesecakes! 🍒",
];

export default function CakeTextMarquee() {
  return (
    <div className="overflow-hidden bg-cream-100 py-4">
      <motion.div
        className="flex whitespace-nowrap text-xl font-bold text-gray-800 gap-16 min-w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30, // adjust speed
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Repeat messages to cover the screen twice */}
        {[...messages, ...messages].map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </motion.div>
    </div>
  );
}
