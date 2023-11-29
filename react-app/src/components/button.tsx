interface ButtonProps {
  onClick?: () => void;
  className?: string;
  value: string;
  id?: string;
}

const Button = ({ onClick, className, value }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {value}
    </button>
  );
};
export default Button;
