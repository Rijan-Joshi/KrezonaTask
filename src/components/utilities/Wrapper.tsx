import { cn } from "@/libs/utils";
import React from "react";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={cn("mx-auto w-full md:pt-14", className)}>{children}</div>
  );
};

export default Wrapper;
