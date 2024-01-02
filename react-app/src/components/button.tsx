import { Link } from "react-router-dom";

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
};

export default Button;
