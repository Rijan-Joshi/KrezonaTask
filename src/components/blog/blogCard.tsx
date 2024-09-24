"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BLogProps {
  date: string;
  title: string;
  imageSrc: string;
}

const BlogCard = ({ date, title, imageSrc }: BLogProps) => (
  <motion.div
    className="bg-card rounded-lg overflow-hidden cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={300}
      className="w-full h-80 object-cover"
    />
    <div className="p-8 text-left">
      <h3 className="text-[24px] font-primary text-white">{title}</h3>
      <p className="text-indigo-300 font-secondary mb-2">{date}</p>
    </div>
  </motion.div>
);

export default BlogCard;
