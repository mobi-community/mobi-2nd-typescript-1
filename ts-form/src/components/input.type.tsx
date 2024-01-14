import { InputHTMLAttributes } from "react";

export type InputTypes = {
  label: string;
  type: "text" | "password";
  message: string;
} & InputHTMLAttributes<HTMLInputElement>;
