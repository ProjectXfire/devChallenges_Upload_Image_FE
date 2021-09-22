import React from "react";
// Styles
import { Container as ContainerStyled } from "@styles/container";

export const Container: React.FC = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
