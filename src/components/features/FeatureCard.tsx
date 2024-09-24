"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  hexagon: string;
  hexagon2: string;
  logo: string;
  comeDown?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  hexagon,
  hexagon2,
  logo,
  comeDown,
}) => (
  <motion.div
    className={`relative bg-card w-270 h-224 rounded-lg mt-14 pt-14 px-10 pb-6 lg:p-4 lg:pt-6 flex flex-col items-center text-center cursor-pointer ${
      comeDown ? "lg:transform lg:translate-y-6" : null
    }`}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(79, 70, 229)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-144 h-144">
      <div className="relative">
        <Image
          src={hexagon}
          alt="Big Hexagon"
          width={144}
          height={144}
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute -top-5 inset-0 flex items-center justify-center">
          <Image
            src={hexagon2}
            alt="Small Hexagon"
            width={80}
            height={80}
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className=" object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-[40px] font-primary text-white mb-2">{title}</h3>
    <p className="text-indigo-200 text-sm">{description}</p>
  </motion.div>
);

export default FeatureCard;
