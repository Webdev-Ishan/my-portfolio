"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[90%] sm:w-[320px] md:w-[350px] aspect-[4/3] shadow-lg hover:shadow-blue-500 rounded-xl cursor-pointer perspective"
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backfaceVisibility: "hidden",
          }}
          className="absolute w-full h-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg flex items-center justify-center text-white font-semibold text-lg"
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-white text-sm sm:text-base shadow-md">
              Learn More &gt;
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className="absolute w-full h-full bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col justify-center gap-3 h-full p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl text-blue-400 font-bold text-center">
              {title}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base text-center leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
