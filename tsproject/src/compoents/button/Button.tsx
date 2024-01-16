import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "blue" : "red",
        fontSize: size === "small" ? "10px" : "20px",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
