import "./Button.scss";
import { FC, HTMLAttributes } from "react";

import Loader from "../Loader";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
}
const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={`btn-reset btn ${className}`}
      data-kind={kind}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
