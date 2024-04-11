import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  font-size: 22px;
  font-weight: 800;
  color: #fff;

  em {
    font-size: inherit;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0 0 0 / 50%);
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  word-wrap: break-word;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
`;

export const MovieThumb = styled.figure`
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  z-index: 1;
  font-size: 0;
  aspect-ratio: 2 / 3;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 80.5%, rgba(0, 0, 0, 0.5));
  }

  img {
    max-width: 100%;
    height: 100%;
    aspect-ratio: 2 / 3;
    transition: all 0.25s ease;
  }
`;
export const MovieLink = styled(Link)`
  overflow: hidden;
  display: block;

  &:hover {
    ${MovieThumb} {
      &:before {
        display: none;
      }

      img {
        transform: scale(1.1);
      }
    }

    ${MovieTitle} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MovieItem = styled.li`
  position: relative;
  width: 220px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 25px;
  max-width: 1280px;
  margin: 0 auto 50px;
  padding: 0 40px;
`;

export const Container = styled.div`
  margin-top: 80px;
`;
