"use client";
import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  data: string;
  description: string;
  active: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ data, description, active }) => (
  <motion.div
    className={`
      relative 
      ${active ? "bg-primary" : "bg-card"}
      w-full sm:w-[220px] h-[128px] 
      rounded-lg cursor-pointer 
      flex flex-col justify-center items-center
      p-4 text-center
      transition-all duration-300
      ${active ? "scale-105 sm:scale-110" : ""}
    `}
    whileHover={{
      scale: active ? 1.1 : 1.05,
      boxShadow: "0px 0px 8px rgb(79, 70, 229)",
    }}
    transition={{ duration: 0.3 }}
  >
    <h1 className="font-primary text-3xl sm:text-4xl mb-2">{data}</h1>
    <p className="text-sm sm:text-base">{description}</p>
  </motion.div>
);

export default StatCard;
