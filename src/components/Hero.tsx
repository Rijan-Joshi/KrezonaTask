"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/utilities/Button";
import Title from "./utilities/Title";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="relative bg-background">
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:gap-14 items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-left">
            <Title>GAME DEVELOPMENT</Title>
            <motion.h1
              variants={itemVariants}
              className="text-[56px] sm:text-[56px] lg:text-[72px] leading-none font-primary mb-6"
            >
              The Art Of Creating Games
            </motion.h1>
            <motion.p className="text-lg mb-8" variants={itemVariants}>
              Game Development is the art of creating games and describes the
              design, development and release of a game.
            </motion.p>
            <motion.div className="flex space-x-6" variants={itemVariants}>
              <Button className="!bg-[rgba(99, 87, 246, 1)] px-10 font-secondary">
                PORTFOLIO
              </Button>
              <div className="flex items-center space-x-3">
                <Button className="rounded-full w-[56px] h-[56px] bg-primary">
                  <Play className="h-6 w-6" fill="white" />
                </Button>
                <span className="text-gray-400 font-secondary">Play Video</span>
              </div>
            </motion.div>
          </div>
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <Image
              src="/assets/images/hero.svg"
              alt="Game development illustration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
    </section>
  );
};

export default Hero;
