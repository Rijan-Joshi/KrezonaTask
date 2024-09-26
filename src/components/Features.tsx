"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "./utilities/Title";
import FeatureCard from "./features/FeatureCard";
import Container from "./utilities/Container";

interface FeatureCardProps {
  title: string;
  description: string;
  hexagon: string;
  hexagon2: string;
  logo: string;
  comeDown: boolean;
}
const features: FeatureCardProps[] = [
  {
    title: "Quality",
    description: "Top-tier game designs built to professional standards",
    hexagon: "/assets/images/hexagon.svg",
    hexagon2: "/assets/images/hexagon2-4.svg",
    logo: "/assets/images/visionpro.svg",
    comeDown: true,
  },
  {
    title: "Fast",
    description: "Quick development and seamless gameplay",
    hexagon: "/assets/images/hexagon.svg",
    hexagon2: "/assets/images/hexagon2-2.svg",
    logo: "/assets/images/Sword.svg",
    comeDown: false,
  },
  {
    title: "Easy",
    description: "Intuitive controls and user-friendly interfaces",
    hexagon: "/assets/images/hexagon.svg",
    hexagon2: "/assets/images/hexagon2-2.svg",
    logo: "/assets/images/King.svg",
    comeDown: true,
  },
  {
    title: "Reliably",
    description: "Stable performance across various platforms",
    hexagon: "/assets/images/hexagon.svg",
    hexagon2: "/assets/images/hexagon2-4.svg",
    logo: "/assets/images/JoyStick.svg",
    comeDown: false,
  },
];

const Features = () => {
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
    <Container>
      <section className="relative bg-background">
        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row lg:gap-14 items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-left">
              <Title>FEATURES</Title>
              <motion.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[40px] lg:text-[56px] leading-none font-primary mb-6"
              >
                The Art Of Creating Games
              </motion.h1>
              <motion.p className="text-lg mb-8" variants={itemVariants}>
                Game Development is the art of creating games and describes the
                design, development and release of a game.
              </motion.p>
              <motion.p
                className="text-sm text-indigo-300 mb-8"
                variants={itemVariants}
              >
                Game Development is the art of creating games and describes the
                design, development and release of a game.
              </motion.p>
            </div>
            <motion.div
              className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
      </section>
    </Container>
  );
};

export default Features;
