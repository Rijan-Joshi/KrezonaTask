import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <span className="16px text-gray-400 font-secondary tracking-wide">
      {children}
    </span>
  );
};

export default Title;
