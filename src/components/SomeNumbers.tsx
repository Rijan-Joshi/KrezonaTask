"use client";
import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";
import StatCard from "./stats/statCard";

interface SomeNumbersProps {
  id: number;
  data: string;
  description: string;
  active: boolean;
}

const stats: SomeNumbersProps[] = [
  {
    id: 2,
    data: "7.300+",
    description: "The sky was cloudless",
    active: false,
  },

  {
    id: 2,
    data: "420<",
    description: "Deep dark Blue",
    active: false,
  },

  {
    id: 3,
    data: "95%",
    description: "Creating games",
    active: true,
  },

  {
    id: 4,
    data: "0.002",
    description: "Describe the desing",
    active: false,
  },
];

const SomeNumbers = () => {
  return (
    <Container className="text-center">
      <Title>SOME NUMBERS</Title>
      <Section title="Games Have a Consistent Look">
        <div className="flex flex-col lg:flex-row space-x-5">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </Section>
    </Container>
  );
};
export default SomeNumbers;
