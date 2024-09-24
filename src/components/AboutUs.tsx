"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/utilities/Button";
import Title from "./utilities/Title";
import { motion } from "framer-motion";
import Container from "./utilities/Container";

const AboutUs: React.FC = () => {
  // Variant for animation

  //For Container
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

  //For Items
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
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-14 items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pl-8 text-left">
              <Title>ABOUT US</Title>
              <motion.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[40px] lg:text-[56px] leading-none font-primary mb-6"
              >
                Design, Development and Release of a Game
              </motion.h1>
              <motion.p
                className="text-lg mb-8 font-secondary"
                variants={itemVariants}
              >
                Video game developers take a designer&apos;s concepts and buld them
                into a playable game for users.
              </motion.p>
              <motion.p
                className="text-sm mb-8 font-secondary text-gray-400"
                variants={itemVariants}
              >
                Also known as games developers or video game programmers, write
                code for games for a variety of formats, such as PCs, consoles,
                web browsers and mobile phones.
              </motion.p>
              <motion.div className="flex items-center" variants={itemVariants}>
                <Button className="px-10 font-secondary">OUR PRINCIPLES</Button>
              </motion.div>
            </div>
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <Image
                src="/assets/images/dice.svg"
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
    </Container>
  );
};

export default AboutUs;
