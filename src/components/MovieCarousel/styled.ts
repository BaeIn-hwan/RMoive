import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: rgba(0 0 0 / 50%);
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
`;

export const CarouselImage = styled.figure`
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

export const CarouselLink = styled(Link)`
  overflow: hidden;
  display: block;

  &:hover {
    ${CarouselImage} {
      &:before {
        display: none;
      }

      img {
        transform: scale(1.1);
      }
    }

    ${CarouselTitle} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const CarouselSlide = styled(SwiperSlide)`
  width: 200px;
`;

export const Carousel = styled(Swiper)<{ $isFull: boolean }>`
  ${(props) => (props.$isFull ? `padding: 0 40px;` : "")}
`;
