import React from "react";
// Styles
import { Title as TitleStyled } from "@styles/shared";

interface TitleProps {
  text?: string;
  color?: string;
  size?: string;
  position?: string;
}

export const Title = ({
  text = "default",
  color = "black",
  size = "md",
  position = "left",
}: TitleProps) => {
  return (
    <TitleStyled color={color} size={size} position={position}>
      {text}
    </TitleStyled>
  );
};
