import React from "react";
// Styles
import { Text as TextStyled } from "@styles/shared";

interface TextProps {
  children?: any;
  color?: string;
  position?: string;
}

export const Text = ({
  children,
  color = "black",
  position = "right",
}: TextProps) => {
  return (
    <TextStyled position={position} color={color}>
      {children}
    </TextStyled>
  );
};
