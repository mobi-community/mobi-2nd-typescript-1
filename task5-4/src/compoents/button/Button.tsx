import { ButtonHTMLAttributes } from "react";
import React from "react";

// ButtonHTMLAttributes<HTMLButtonElement>
// -> 공용 컴포넌트를 만들때 해당 태그의 내장 되어있는 기본 속성들을 쓰기위해 ...rest를 지정했었는데
//    타입스크립트에선 ...rest에 대한 타입도 지정해 줘야 함. -> ButtonHTMLAttributes<HTMLButtonElement>

//onClick, children 내장
interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "small" | "big";
}

//⚽️
const Button: React.FC<ButtonProp> = ({ variant, size, children, ...rest }) => {
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
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
