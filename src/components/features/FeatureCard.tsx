import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  hexagon: string;
  hexagon2: string;
  logo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  hexagon,
  hexagon2,
  logo,
}) => (
  <motion.div
    className="bg-card rounded-lg p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(79, 70, 229)" }}
    transition={{ duration: 0.3 }}
  >
    <div className=" left-1/2 top-0 transform -translate-x-1/2 translate-y-1/2">
      <div className="relative">
        <Image
          src={hexagon}
          alt="Big Hexagon"
          width={144}
          height={144}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={hexagon2}
            alt="Small Hexagon"
            width={115}
            height={115}
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-[40px] font-primary text-white mb-2">{title}</h3>
    <p className="text-indigo-200 text-sm">{description}</p>
  </motion.div>
);
