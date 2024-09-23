import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  primary?: boolean;
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  primary = false,
  theme = "light",
  size = "medium",
  onClick,
  children,
}) => {
  const baseClasses =
    "font-semibold font-secondary rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = primary
    ? `bg-button-primary-${theme} hover:bg-opacity-0.4 text-white focus:ring-primary`
    : "bg-transparent border-2 border-gray-700 font-primary text-white hover:bg-primary hover:text-white focus:ring-primary";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
