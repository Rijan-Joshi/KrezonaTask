"use client";
import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SlideContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const slides: SlideContent[] = [
  {
    id: "01",
    title: "Market Research",
    description:
      "Understanding the current trends and needs of gaming communities to develop relevant titles.",
    imageUrl: "/assets/images/handJoyStick.svg",
  },
  // {
  //   id: "02",
  //   title: "Marketing Research",
  //   description:
  //     "Understanding the current trends and needs of gaming communities to develop relevant titles.",
  //   imageUrl: "/assets/images/BitMap.svg",
  // },
];

const CreationProcess: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Container className="text-center">
      <Title>CREATION PROCESS</Title>
      <Section
        title="How We Work"
        subtitle="Game development is the art of creating games and describes the design, development and release."
      >
        <div className="flex flex-col lg:gap-3 items-center cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative w-full">
                <Image
                  src={slide.imageUrl}
                  width={770}
                  height={480}
                  alt="Slides"
                />
                <div className="absolute p-10 w-[272px] h-[370px] left-1/2 -bottom-14 -translate-x-1/2 translate-y-1/2 lg:-bottom-0 lg:-translate-x-0 lg:translate-y-0 lg:top-16 lg:-left-20  bg-white rounded-md text-left tracking-wide">
                  <div className="text-[18px] text-gray-700 mb-2">
                    {slide.id}
                  </div>
                  <h3 className="text-[40px] font-primary mb-2 text-black">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="flex space-x-2 justify-center items-center mt-64 lg:mt-7">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide ? "bg-primary" : "bg-card"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default CreationProcess;
