"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const marqueeRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const marqueeWidth = marqueeRef.current?.scrollWidth || 0;

    controls.start({
      x: [`0%`, `-${marqueeWidth}px`],
      transition: {
        repeat: Infinity,
        duration: marqueeWidth / 50, // adjust speed: bigger width = longer duration
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden bg-cream-100 py-4">
      <motion.div
        ref={marqueeRef}
        className="inline-flex whitespace-nowrap text-xl font-bold text-gray-800 gap-16"
        animate={controls}
      >
        {[...messages, ...messages].map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </motion.div>
    </div>
  );
}
