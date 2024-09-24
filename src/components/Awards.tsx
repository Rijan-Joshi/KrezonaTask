"use client";
import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";
import AwardCard from "./award/awardCard";

interface AwardsProps {
  id: number;
  imageUrl: string;
}

const awards: AwardsProps[] = [
  {
    id: 2,
    imageUrl: "/assets/images/clickCenter.svg",
  },
  {
    id: 2,
    imageUrl: "/assets/images/digitalside.svg",
  },

  {
    id: 3,
    imageUrl: "/assets/images/vortex.svg",
  },

  {
    id: 4,
    imageUrl: "/assets/images/travelExplorer.svg",
  },

  {
    id: 5,
    imageUrl: "/assets/images/Fuzion.svg",
  },
];

const Awards = () => {
  return (
    <Container className="text-center">
      <Title>OUR AWARDS</Title>
      <Section
        title="Latest Game Articles"
        subtitle="Game development is the art of creating games and describes the design, development and release."
      >
        <div className="flex flex-row flex-wrap justify-around gap-3 items-center lg:flex-row space-x-5">
          {awards.map((award) => (
            <AwardCard key={award.id} {...award} />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default Awards;
