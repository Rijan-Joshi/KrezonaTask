import { cn } from "@/libs/utils";
import React from "react";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: WrapperProps) => {
  return (
    <div className={cn("mx-auto w-full md:pt-24", className)}>{children}</div>
  );
};

export default Container;
