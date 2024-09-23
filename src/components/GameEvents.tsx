"use client";
import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";
import GameCard from "./games/gamesCard";
import Button from "@/components/utilities/Button";

const GameEvents = () => {
  const games = [
    {
      id: 1,
      title: "Funny Video Adventure",
      category: "Action RPG",
      imageSrc: "/assets/images/Bitmap.svg",
    },
    {
      id: 2,
      title: "Super Cosmo 3D",
      category: "Online MMO",
      imageSrc: "/assets/images/BitMap2.svg",
    },
    {
      id: 3,
      title: "Space Ship Star",
      category: "Racing Simulator",
      imageSrc: "/assets/images/BitMap3.svg",
    },
  ];
  return (
    <Container className="text-center">
      <Title>GAME EVENTS</Title>
      <Section
        title="WELCOME TO GAME EVENTS"
        subtitle="Game development is the art of creating games and describes the design, development and release."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="pd-7">ALL EVENTS</Button>
        </div>
      </Section>
    </Container>
  );
};

export default GameEvents;
