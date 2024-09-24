"use client";
import React from "react";
import Image from "next/image";
import Title from "./utilities/Title";
import { motion } from "framer-motion";
import Container from "./utilities/Container";
import ReviewsCard from "./reviews/reviewsCard";

interface ReviewsProps {
  description: string;
  name: string;
  remark: string;
}

const cardDetails: ReviewsProps = {
  description: ` "Graphics are naturally important because games are, to an extent, a work of art. The actual technical quality of graphics is important, but evenmore important is the art design aspect of game design. Games should havea consistent look and feel that reflects the themes and moods of the game itself." `,
  name: "Meg Rigden",
  remark: "Type something",
};

const Reviews: React.FC = () => {
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
          <div className="flex flex-col lg:flex-row lg:gap-14 items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pl-8 text-left">
              <Title>REVIEWS</Title>
              <motion.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[40px] lg:text-[56px] leading-none font-primary mb-6"
              >
                People Reviews Of Our Games
              </motion.h1>
              <motion.p
                className="text-lg mb-8 font-secondary"
                variants={itemVariants}
              >
                Video game developers take a designer&apos;s concepts and buld
                them into a playable game for users.
              </motion.p>
              <div className="flex flex-row space-x-2 items-center">
                <motion.div variants={itemVariants}>
                  <Image
                    src="/assets/images/hexagon.svg"
                    alt="Big Hexagon"
                    width={144}
                    height={144}
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Image
                    src="/assets/images/hexagon.svg"
                    alt="Big Hexagon"
                    width={115}
                    height={115}
                    loading="lazy"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Image
                    src="/assets/images/hexagon.svg"
                    alt="Big Hexagon"
                    width={115}
                    height={115}
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <ReviewsCard {...cardDetails} />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
      </section>
    </Container>
  );
};

export default Reviews;
