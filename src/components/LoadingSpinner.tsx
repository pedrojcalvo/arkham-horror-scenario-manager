import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "gold" | "purple" | "blue";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "gold",
}) => {
  return <div>Loading...</div>;
};

export default LoadingSpinner;
