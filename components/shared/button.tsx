import React from "react";
// Styles
import { Button as ButtonStyled } from "@styles/shared";

interface ButtonProps {
  text?: string;
  color?: string;
  size?: string;
  onClick?: (...arg: any) => void;
  children: any;
}

export const Button = ({
  text = "",
  color = "black",
  size = "md",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <ButtonStyled color={color} size={size} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
