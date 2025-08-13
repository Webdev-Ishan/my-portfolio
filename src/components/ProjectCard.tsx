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
      className="w-[350px] h-[250px] cursor-pointer perspective"
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
          }}
          className="absolute w-full h-full bg-cover bg-center rounded-xl shadow-lg flex items-center justify-center text-white font-semibold text-lg"
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition">
            Learn More &gt;
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className="absolute w-full h-full bg-cover bg-center rounded-xl shadow-lg text-white px-5 py-6"
        >
          <div className="absolute inset-0 bg-black/60 rounded-xl" />
          <div className="relative z-10 flex flex-col justify-center gap-4 h-full">
            <h1 className="text-2xl text-blue-500 font-bold">{title}</h1>
            <p className="text-gray-200 text-base">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
