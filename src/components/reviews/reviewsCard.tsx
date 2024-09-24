"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ReviewsProps {
  description: string;
  name: string;
  remark: string;
}

const ReviewsCard = ({ description, name, remark }: ReviewsProps) => (
  <motion.div
    className="bg-card rounded-lg cursor-pointer relative p-7 pt-14"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src="/assets/images/stars.svg"
      alt="Star Ratings"
      width={160}
      height={32}
      className="ml-8"
    />

    <p className="font-secondary text-white text-[14px] mt-2">{description}</p>

    <span className="font-primary text-white mt-3">{name}</span>
    <p className="font-secondary text-indigo-300 mt-1">{remark}</p>

    <div className="absolute right-7 -top-7">
      <Image
        src="/assets/images/Quote.svg"
        alt="Star Ratings"
        width={160}
        height={32}
      />
    </div>
  </motion.div>
);

export default ReviewsCard;
