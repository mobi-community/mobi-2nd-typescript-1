import { FC } from "react";
import styled from "styled-components";
import { ButtonTypes } from "./button.type";

const Pair2Button: FC<ButtonTypes> = ({ label, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      {label}
    </Button>
  );
};
export default Pair2Button;

const Button = styled.button``;
