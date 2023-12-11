import { Link } from "react-router-dom";
interface ButtonProps {
  onClick?: () => void;
  className?: string;
  value: string;
  id?: string;
  to?: string;
}

const Button = (props: ButtonProps) => {
  // if navigation link is not provided then return only the button.
  return props.to ? (
    <Link to={props.to}>
      <button onClick={props.onClick} className={props.className}>
        {props.value}
      </button>
    </Link>
  ) : (
    <button onClick={props.onClick} className={props.className}>
      {props.value}
    </button>
  );
};
export default Button;
