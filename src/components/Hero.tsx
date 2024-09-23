"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/utilities/Button";
import Title from "./utilities/Title";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-background">
      <div className="relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-14 items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-left">
            <Title>GAME DEVELOPMENT</Title>
            <h1 className="text-[56px] sm:text-[56px] lg:text-[72px] leading-tight font-primary mb-6">
              The Art Of Creating Games
            </h1>
            <p className="text-lg mb-8">
              Game Development is the art of creating games and describes the
              design, development and release of a game.
            </p>
            <div className="flex space-x-6">
              <Button className="!bg-[rgba(99, 87, 246, 1)] px-10 font-secondary">
                PORTFOLIO
              </Button>
              <div className="flex items-center space-x-3">
                <Button className="rounded-full w-[56px] h-[56px] bg-primary">
                  <Play className="h-6 w-6" fill="white" />
                </Button>
                <span className="text-gray-400 font-secondary">Play Video</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/assets/images/hero.svg"
              alt="Game development illustration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
    </section>
  );
};

export default Hero;
