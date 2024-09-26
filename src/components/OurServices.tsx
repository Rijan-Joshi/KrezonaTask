"use client";
import React from "react";
import Image from "next/image";
import Title from "./utilities/Title";
import { motion } from "framer-motion";
import Container from "./utilities/Container";

const OurServices: React.FC = () => {
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
              <Title>OUR SERVICES</Title>
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
                Video game developers take a designer&apos;s concepts and buld
                them into a playable game for users.
              </motion.p>
              <motion.div
                className="flex flex-row space-x-5 items-center"
                variants={itemVariants}
              >
                <div className="relative">
                  <Image
                    src="/assets/images/hexagon.svg"
                    alt="Big Hexagon"
                    width={144}
                    height={144}
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -top-5 inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/images/hexagon2-2.svg"
                      alt="Small Hexagon"
                      width={80}
                      height={80}
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/assets/images/diamond.svg"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="font-primary text-[16px]">Video Game</h3>
                  <p className="font-secondary text-gray-500 text-[14px]">
                    Designer&apos;s concepts
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <Image
                src="/assets/images/dice99.svg"
                alt="Game development illustration"
                width={600}
                height={400}
                className="rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
      </section>
    </Container>
  );
};

export default OurServices;
