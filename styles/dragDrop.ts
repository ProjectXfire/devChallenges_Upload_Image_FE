import styled from "styled-components";

interface DragDropProps {
  bkgColor?: string;
  opacity?: number;
}

export const DragDrop = styled.div<DragDropProps>`
  display: grid;
  row-gap: 50px;
  padding: 40px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  border: 1px dashed #2196f3;
  background-size: 28px 1px;
  background-repeat: repeat-x;
  border-radius: 20px;
  background-color: ${(props) => (props.bkgColor ? props.bkgColor : "#f5f5f5")};
  cursor: pointer;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;
