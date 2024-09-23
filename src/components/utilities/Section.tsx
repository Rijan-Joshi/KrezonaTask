"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[40px] sm:text-[56px] font-primary mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-gray-400 mb-8">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
