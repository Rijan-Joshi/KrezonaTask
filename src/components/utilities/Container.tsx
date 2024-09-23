"use client";
import { cn } from "@/libs/utils";
import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: WrapperProps) => {
  return (
    <motion.div className={cn("mx-auto w-full pt-10 md:pt-24", className)}>
      {children}
    </motion.div>
  );
};

export default Container;
