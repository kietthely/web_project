interface ButtonProps {
  onClick?: () => void;
  className?: string;
  value: string;
  id?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
    >
      {props.value}
    </button>
  );
};
export default Button;
