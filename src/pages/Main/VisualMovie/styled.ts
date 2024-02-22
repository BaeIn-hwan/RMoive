import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const ContainerLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const VisualBtnCommon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 20px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.25s linear;
`;

export const SkeletonOverviewText = styled.span`
  display: block;
  width: 100%;
  height: 23px;
  background-color: ${(props) => props.theme.colors.skeletonColor};
`;

export const SkeletonOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
`;

export const SkeletonTitle = styled.div`
  height: 52px;
  background-color: ${(props) => props.theme.colors.skeletonColor};
`;

export const SkeletonInfo = styled.div`
  width: 50%;
  padding: 0 40px;
`;

export const SkeletonImage = styled.div`
  width: 360px;
  background-color: ${(props) => props.theme.colors.skeletonColor};
  aspect-ratio: 2 / 3;
`;

export const SkeletonContainer = styled.div`
  ${ContainerLayout};
  background-color: ${(props) => props.theme.colors.skeletonBg};
`;

export const TrailerPopupVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const TrailerPopup = styled.div`
  height: 400px;
  aspect-ratio: 4 / 3;
`;

export const VisualTrailer = styled.button.attrs({ type: "button" })`
  ${VisualBtnCommon};
  background-color: #fff;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.45);
  }
`;

export const VisualViewMore = styled(Link)`
  ${VisualBtnCommon};
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(254, 190, 152, 0.45);
  }
`;

export const VisualBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  line-height: 46px;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.6s;
`;

export const VisualOverview = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 26px;
  word-break: keep-all;
  word-wrap: break-word;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.4s;
`;

export const VisualTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  word-break: keep-all;
  word-wrap: break-word;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.2s;
`;

export const VisualInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  padding: 0 40px;
  color: #fff;
`;

export const VisualThumb = styled.img`
  max-width: 100%;
  border-radius: inherit;
  aspect-ratio: 2 / 3;
`;

export const VisualImage = styled.figure`
  overflow: hidden;
  position: relative;
  width: 360px;
  border-radius: 16px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 0.35s ease-in;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const VisualContent = styled.div`
  ${ContainerLayout};
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 10%,
      transparent
    );
  }
`;

export const VisualSlide = styled(SwiperSlide)`
  &.swiper-slide-active {
    ${VisualImage} {
      transform: scale(1);
      opacity: 1;
    }

    ${VisualTitle} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${VisualOverview} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${VisualBtns} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const VisualSwiper = styled(Swiper)``;
