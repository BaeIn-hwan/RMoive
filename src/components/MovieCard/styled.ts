import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieCardTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const MovieCardInfo = styled.div`
  margin-top: 14px;
`;

export const MovieCardThumb = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  aspect-ratio: 3 / 4;
  transition: all 0.25s ease;
`;

export const MovieCardImage = styled.figure`
  overflow: hidden;
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 0;
  aspect-ratio: 3 / 4;
`;

export const MovieCardLink = styled(Link)`
  &:hover ${MovieCardThumb} {
    transform: scale(1.1);
  }
`;
