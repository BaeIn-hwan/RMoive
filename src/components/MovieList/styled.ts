import styled from "styled-components";

interface MovieItemProps {
  $width: number;
}

export const MovieItem = styled.li<MovieItemProps>`
  width: ${(props) => props.$width}px;
`;

export const MoiveList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 15px;
`;
