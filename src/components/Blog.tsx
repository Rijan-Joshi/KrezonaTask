"use client";
import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Title from "./utilities/Title";
import Button from "@/components/utilities/Button";
import BlogCard from "./blog/blogCard";

const Blog = () => {
  const games = [
    {
      id: 1,
      date: "30 Nov, 2020",
      title: "Best Game Award",
      imageSrc: "/assets/images/Bitmap.svg",
    },
    {
      id: 2,
      date: "12 Dec, 2020",
      title: "Great Video Game Event",
      imageSrc: "/assets/images/BitMap2.svg",
    },
    {
      id: 3,
      date: "12 Dec, 2020",
      title: "E5 Game Show",
      imageSrc: "/assets/images/BitMap3.svg",
    },
  ];
  return (
    <Container className="text-center">
      <Title>OUR BLOG</Title>
      <Section
        title="LATEST GAME ARTICLES"
        subtitle="Game development is the art of creating games and describes the design, development and release."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <BlogCard key={game.id} {...game} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="pd-10">ALL EVENTS</Button>
        </div>
      </Section>
    </Container>
  );
};

export default Blog;
