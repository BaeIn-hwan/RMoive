import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselImage = styled.figure`
  overflow: hidden;
  border-radius: 6px;
  font-size: 0;
  aspect-ratio: 2 / 3;

  img {
    max-width: 100%;
    height: 100%;
    aspect-ratio: 2 / 3;
  }
`;

export const CarouselLink = styled(Link)`
  display: block;
`;

export const CarouselSlide = styled(SwiperSlide)`
  width: 200px;
`;

export const Carousel = styled(Swiper)`
  padding: 0 40px;
`;
