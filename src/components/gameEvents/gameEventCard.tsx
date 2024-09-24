"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GameCardProps {
  date: string;
  title: string;
  imageSrc: string;
}

const GameEventCard = ({ date, title, imageSrc }: GameCardProps) => (
  <motion.div
    className="bg-card rounded-lg overflow-hidden cursor-pointer relative"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={300}
      className="w-full h-80 object-cover"
      loading="lazy"
    />
    <div className="p-8 text-left">
      <p className="text-indigo-300 font-secondary mb-2">{date}</p>
      <h3 className="text-[24px] font-primary text-white">{title}</h3>
    </div>
    <motion.div
      className="absolute top-7 left-7"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/assets/images/download.svg"
        alt="Download Button"
        width={48}
        height={48}
        loading="lazy"
      />
    </motion.div>
  </motion.div>
);

export default GameEventCard;
