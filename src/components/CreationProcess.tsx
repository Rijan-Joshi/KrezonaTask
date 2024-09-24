// "use client";
// import React from "react";
// import Container from "./utilities/Container";
// import Section from "./utilities/Section";
// import Title from "./utilities/Title";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface SlideContent {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// const slides: SlideContent[] = [
//   {
//     id: "01",
//     title: "Market Research",
//     description:
//       "Understanding the current trends and needs of gaming communities to develop relevant titles.",
//     imageUrl: "/assets/images/handJoyStick.svg",
//   },
//   // {
//   //   id: "02",
//   //   title: "Marketing Research",
//   //   description:
//   //     "Understanding the current trends and needs of gaming communities to develop relevant titles.",
//   //   imageUrl: "/assets/images/BitMap.svg",
//   // },
// ];

// const CreationProcess: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   return (
//     <Container className="text-center">
//       <Title>CREATION PROCESS</Title>
//       <Section
//         title="How We Work"
//         subtitle="Game development is the art of creating games and describes the design, development and release."
//       >
//         <div className="flex flex-col lg:gap-3 items-center cursor-pointer">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             {slides.map((slide) => (
//               <div key={slide.id} className="relative w-full">
//                 <Image
//                   src={slide.imageUrl}
//                   width={770}
//                   height={480}
//                   alt="Slides"
//                 />
//                 <div className="absolute p-10 w-[272px] h-[370px] left-1/2 -bottom-14 -translate-x-1/2 translate-y-1/2 lg:-bottom-0 lg:-translate-x-0 lg:translate-y-0 lg:top-16 lg:-left-20  bg-white rounded-md text-left tracking-wide">
//                   <div className="text-[18px] text-gray-700 mb-2">
//                     {slide.id}
//                   </div>
//                   <h3 className="text-[40px] font-primary mb-2 text-black">
//                     {slide.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{slide.description}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//           <div className="flex space-x-2 justify-center items-center mt-64 lg:mt-7">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-4 h-4 rounded-full ${
//                   index === currentSlide ? "bg-primary" : "bg-card"
//                 }`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </Section>
//     </Container>
//   );
// };

"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";

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
  {
    id: "02",
    title: "Game Design",
    description:
      "Creating engaging gameplay mechanics and immersive storylines to captivate players.",
    imageUrl: "/assets/images/Bitmap.svg",
  },
  {
    id: "03",
    title: "Development",
    description:
      "Bringing the game to life through coding, asset creation, and rigorous testing.",
    imageUrl: "/assets/images/Bitmap.svg",
  },
  // Add more slides as needed
];

const CreationProcess: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Container className="text-center">
      <Title>CREATION PROCESS</Title>
      <Section
        title="How We Work"
        subtitle="Game development is the art of creating games and describes the design, development and release."
      >
        <div className="relative w-full max-w-4xl mx-auto mt-10 pb-40 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[16/10] rounded-lg"
            >
              <div className="absolute inset-4 md:inset-8">
                <Image
                  src={slides[currentSlide].imageUrl}
                  layout="fill"
                  objectFit="contain"
                  alt={slides[currentSlide].title}
                  priority
                />
              </div>
              <motion.div
                className="absolute z-20 py-12 px-7 w-[272px] h-[370px] left-24 top-50 sm:left-40 sm:top-60 md:top-28 md:left-4 -translate-x-1/2 md:translate-x-0 md:translate-y-1/3 bg-white rounded-md text-left tracking-wide shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-lg text-gray-700 mb-3">
                  {slides[currentSlide].id}
                </div>
                <h3 className="text-[40px] md:text-[56px] font-primary mb-3 text-black">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex space-x-2 justify-center items-center mt-24 lg:mt-0">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-card hover:bg-primary/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default CreationProcess;
