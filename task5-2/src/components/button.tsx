import React, { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: any;
  disabled?: boolean;
};

const NAButton: FC<ButtonProps> = ({ children, type, onClick, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default NAButton;
