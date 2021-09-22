import React from "react";
// Styles
import { Button, TextButton as TextButtonStyled, Input } from "@styles/shared";

interface TextButtonProps {
  text?: string;
  color?: string;
  size?: string;
  value?: any;
  defaultValue?: any;
  readOnly?: boolean;
  outline?: boolean;
  type?: string;
  onChange?: (...arg: any) => void;
  onClick?: (...arg: any) => void;
}

export const TextButton = ({
  text = "",
  color = "black",
  size = "md",
  value = "",
  readOnly,
  type = "text",
  outline = true,
  onChange,
  onClick = () => {},
}: TextButtonProps) => {
  return (
    <TextButtonStyled>
      <Input
        value={value}
        readOnly={readOnly}
        type={type}
        onChange={onChange}
        outline={outline}
      />
      <Button onClick={() => onClick(value)} color={color} size={size}>
        {text}
      </Button>
    </TextButtonStyled>
  );
};
