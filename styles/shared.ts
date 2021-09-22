import styled from "styled-components";

interface TitleProps {
  readonly size: string;
  readonly color: string;
  readonly position: string;
}

interface ButtonProps {
  readonly size: string;
  readonly color: string;
}

interface InputProps {
  readonly outline: boolean;
}

interface TextProps {
  readonly position: string;
}

export const Title = styled.div<TitleProps>`
  display: flex;
  justify-content: ${(props) => {
    if (props.position === "center") {
      return "center";
    }
    if (props.position === "right") {
      return "end";
    }
    return "start";
  }};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.8rem";
    }
    if (props.size === "lg") {
      return "2rem";
    }
    return "1.5rem";
  }};
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const Text = styled.p<TextProps>`
  margin: 0;
  color: ${(props) => props.color};
  text-align: ${(props) => props.position};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.color};
  color: white;
  font-family: "Gluten", cursive;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.6rem";
    }
    if (props.size === "lg") {
      return "1rem";
    }
    return "0.8rem";
  }};
  padding: ${(props) => {
    if (props.size === "sm") {
      return "2px 4px";
    }
    if (props.size === "lg") {
      return "8px 10px";
    }
    return "5px 8px";
  }};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 10px 5px;
  font-family: "Gluten", cursive;
  font-size: 0.6rem;
  outline: none;
  border: ${(props) => (props.outline ? "1px solid grey" : "none")};
  border-radius: 10px;
  background-color: ${(props) => (props.readOnly ? "#eeeeee" : "white")};
`;

export const TextButton = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 20px;
  padding: 2px 2px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #eeeeee;
`;
