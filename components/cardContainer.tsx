import React from "react";
// Styles
import { CardContainer as CardContainerStyled } from "@styles/card";

export const CardContainer: React.FC = ({ children }) => {
  return <CardContainerStyled>{children}</CardContainerStyled>;
};
