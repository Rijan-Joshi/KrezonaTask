"use client";
import React from "react";
import Title from "./utilities/Title";
import Image from "next/image";
import CustomButton from "./utilities/Button";
import Container from "./utilities/Container";

const Contact = () => {
  return (
    <Container>
      <div className="w-full p-10 bg-primary flex flex-col lg:flex-row lg:justify-between justify-around items-center rounded-md relative">
        <div>
          <Title>CONTACT</Title>
          <div className=" mt-3 text-white font-primary lg:text-[56px] text-[40px]">
            {" "}
            Contact Us
          </div>
          <p className="mt-2">
            Game Development is the art of creaing games and describes
          </p>
        </div>
        <CustomButton className="bg-icon-primary-light h-min z-40">
          {" "}
          CONTACT US
        </CustomButton>
        <Image
          src="/assets/images/backside.svg"
          alt="Background Social"
          width={700}
          height={400}
          className=" absolute w-1/2 right-0 top-0"
        />
      </div>
    </Container>
  );
};

export default Contact;
