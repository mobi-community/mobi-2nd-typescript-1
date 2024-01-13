import styled from "styled-components";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
} from "react";

type InputProps = {
  label: string;
  type: "text" | "password";
  message: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Pair2Input: FC<InputProps> & InputHTMLAttributes<HTMLInputElement> = ({
  label,
  type,
  message,
  onChange,
  ...props
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
