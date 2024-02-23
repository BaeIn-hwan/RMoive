import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #a1a1a1;
`;

export const CardInfo = styled.div`
  margin-top: 14px;
`;

export const CardThumb = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  transition: all 0.25s ease;
`;

export const CardImage = styled.figure`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 0;
  aspect-ratio: 2 / 3;
`;

export const CardLink = styled(Link)`
  &:hover {
    ${CardThumb} {
      transform: scale(1.1);
    }

    ${CardTitle} {
      color: #fff;
    }
  }
`;
