import React from "react";

interface ButtonProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  value: string;
  id?: string;
}
// predefined styles
const defaultStyle = {
  backgroundColor: "#007bff",
  background: "linear-gradient(to right, #34ebdf, #34ebc6)",
  color: "black",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const Button = ({ onClick, className, style, value }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ ...defaultStyle, ...style }}
      className={className}
    >
      {value}
    </button>
  );
};
export default Button;
