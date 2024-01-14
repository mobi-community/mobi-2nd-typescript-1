import styled from "styled-components";
import { ChangeEvent, FC } from "react";
import { InputTypes } from "./input.type";

const Pair2Input: FC<InputTypes> = ({
  label,
  type,
  message,
  onChange,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} onChange={handleChange} {...props} />
      <Message>{message}</Message>
    </Container>
  );
};

export default Pair2Input;

const Container = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Message = styled.p``;
