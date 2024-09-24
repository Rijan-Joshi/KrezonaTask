"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {

  data: string;
  description: string;
  active: boolean;
}

const statCard: React.FC<FeatureCardProps> = ({
  data,
  description,
  active,
}) => (
  <motion.div
    className={`relative ${
      active ? "bg-primary scale-[1.2]" : "bg-card"
    }  w-[220px] h-[128px] rounded-lg cursor-pointer`}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(79, 70, 229)" }}
    transition={{ duration: 0.3 }}
  >
    <h1 className="font-primary text-[40px]">{data}</h1>
    <p>{description}</p>
  </motion.div>
);

export default statCard;
