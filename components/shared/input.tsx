import React from "react";
// Styles
import { Input as InputStyled } from "@styles/shared";

interface InputProps {
  value?: any;
  defaultValue?: any;
  readOnly?: boolean;
  outline?: boolean;
  type?: string;
  placeholder?: string;
  onChange?: (...arg: any) => void;
}

export const Input = ({
  value = "",
  readOnly,
  type = "text",
  outline = true,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <InputStyled
      value={value}
      readOnly={readOnly}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      outline={outline}
    />
  );
};
