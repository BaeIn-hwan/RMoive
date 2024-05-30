import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const OriginTitle = styled.strong`
  font-size: 18px;
`;

export const Title = styled.h2`
  font-size: 32px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  z-index: 1;
  left: 30px;
  bottom: 20px;
  color: #fff;
`;

export const Poster = styled.figure`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  aspect-ratio: 3 / 1;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 15%);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`;

export const SlideItem = styled(SwiperSlide)`
  position: relative;
`;

export const SlideContainer = styled(Swiper)`
  padding: 0 40px;
`;

export const SlidePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  position: absolute;
  z-index: 9;
  bottom: 25px;
  right: 80px;
  left: 80px;
  font-size: 0;

  .swiper-pagination-bullet {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    &-active {
      background-color: #fff;
    }
  }
`;

export const SlideNav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 9;
  top: 0;
  width: 50px;
  height: 100%;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.25s linear;
  cursor: pointer;

  &[aria-disabled="true"] {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
`;

export const SlideNavNext = styled(SlideNav)`
  right: 0;
  &:hover {
    background-image: radial-gradient(
      115.5% 50% at 105.25% 50%,
      rgb(255 255 255 / 0.9) 0%,
      rgb(255 255 255 / 0.4) 52.6%,
      rgb(255 255 255 / 0) 100%
    );
  }
`;

export const SlideNavPrev = styled(SlideNav)`
  left: 0;

  &:hover {
    background-image: radial-gradient(
      115.5% 50% at -5.25% 50%,
      rgb(255 255 255 / 0.9) 0%,
      rgb(255 255 255 / 0.4) 52.6%,
      rgb(255 255 255 / 0) 100%
    );
  }
`;

export const Container = styled.section`
  position: relative;
`;
