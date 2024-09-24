"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  imageUrl: string;
}

const AwardCard: React.FC<FeatureCardProps> = ({ imageUrl }) => (
  <motion.div
    className={`cursor-pointer`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image src={imageUrl} alt="Awarder" width={112} height={25} />
  </motion.div>
);

export default AwardCard;
