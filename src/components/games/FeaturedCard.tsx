"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GameCardProps {
  title: string;
  category: string;
  imageSrc: string;
}

const FeaturedGameCard = ({ title, category, imageSrc }: GameCardProps) => (
  <motion.div
    className="bg-card rounded-lg overflow-hidden cursor-pointer relative"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src={imageSrc}
      alt={title}
      width={1000}
      height={600}
      className="w-full lg:h-3/4 object-cover"
    />
    <div className="p-8 text-left">
      <p className="text-indigo-300 font-secondary mb-2">{category}</p>
      <h3 className="text-[24px] lg:text-[40px] font-primary text-white">
        {title}
      </h3>
    </div>
    <motion.div
      className="absolute bottom-7 right-7"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/assets/images/download.svg"
        alt="Download Button"
        width={48}
        height={48}
      />
    </motion.div>
  </motion.div>
);

export default FeaturedGameCard;
