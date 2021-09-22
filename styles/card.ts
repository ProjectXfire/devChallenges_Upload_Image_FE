import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 15px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.15);
`;

export const CardImage = styled(Image)`
  width: 100%;
`;
