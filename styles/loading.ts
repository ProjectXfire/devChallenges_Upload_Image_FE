import styled, { keyframes, css } from "styled-components";

const moveBar = keyframes`
  0% {
    transform: translate(-100px, 0);
  }
  100%{
    transform: translate(350px,0);

  }
`;

const animationShow = css`
  animation: ${moveBar} 1.5s infinite ease-in-out;
`;

export const Loading = styled.div`
  width: 100%;
  height: 5px;
  background-color: #eeeeee;
  border-radius: 10px;
  overflow: hidden;
  & div {
    width: 100px;
    height: 5px;
    border-radius: 10px;
    background-color: #1976d2;
    ${animationShow};
  }
`;
