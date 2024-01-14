import { ButtonHTMLAttributes } from "react";

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "button" | "submit";
  disabled: boolean;
}
