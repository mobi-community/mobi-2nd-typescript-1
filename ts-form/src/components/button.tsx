import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "button" | "submit";
  disabled: boolean;
}
const Pair2Button: FC<ButtonProps> = ({ label, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      {label}
    </Button>
  );
};
export default Pair2Button;

const Button = styled.button``;
