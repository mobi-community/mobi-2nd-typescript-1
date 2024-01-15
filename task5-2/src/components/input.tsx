import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { InputHTMLAttributes } from "react";

type InputProps = {
  type?: "text" | "password";
  setName?: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
} & InputHTMLAttributes<HTMLInputElement>; // 리액트가 제공하는 기본 인풋 속성을 가져오는 역할

const NAInput: FC<InputProps> = ({
  type,
  setName,
  onChange,
  text,
  setText,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setName) setName(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <input type={type} onChange={handleChange} value={text} {...props} />
    </>
  );
};
export default NAInput;
