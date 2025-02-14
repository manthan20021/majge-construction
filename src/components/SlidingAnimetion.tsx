"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.1ArUXGJ1SDWRWnm5FqtFfQHaE7&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.r4ruzSOxM4tp-67rta7YtgHaFG&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.YNvQXzuBxI9vq9qSA-CemAHaE6&pid=Api&P=0&h=180",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-gray-300 sm:text-transparent sm:bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
