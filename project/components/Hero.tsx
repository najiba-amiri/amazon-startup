// src/components/Hero.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slogans = [
  "آمازون تِک؛ اولین گام برنامه نویس شدن",
  "آمازون تِک؛ جای که خلاقیت شکوفا می‌شود!",
  "آمازون تِک؛ این‌جا می‌توانید مسیرتان را پیدا کنید و...",
  "...به رویاهای تان جامه عمل بپوشانید!",
  "توسعه بدون محدودیت",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 6000); // بازه ۶ ثانیه‌ای
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-10 w-full flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute text-yellow-500 font-bold"
        >
          {slogans[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
