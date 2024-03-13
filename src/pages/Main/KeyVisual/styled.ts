import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ItemButtonStyle = css`
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

export const ItemPreview = styled.button.attrs({ type: "button" })`
  ${ItemButtonStyle};
  background-color: #fff;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.45);
  }
`;

export const ItemMoreView = styled(Link)`
  ${ItemButtonStyle};
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(254, 190, 152, 0.45);
  }
`;

export const ItemCtrl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.6s;
`;

export const ItemOverview = styled.div`
  margin-top: 16px;
  font-size: 16px;
  line-height: 26px;
  word-break: keep-all;
  word-wrap: break-word;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.4s;
`;

export const ItemTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  word-break: keep-all;
  word-wrap: break-word;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.2s;
`;

export const ItemInfo = styled.div`
  flex: 1;
  padding-top: 50px;
  color: #fff;
`;

export const ItemImage = styled.figure`
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  font-size: 0;
  opacity: 0;
  transform: scale(0);
  transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 0.6s ease;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.04);
  }

  img {
    aspect-ratio: 3 / 4;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1024px;
  transform: translate3d(-50%, -50%, 0);
`;

export const ItemContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 0 40px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const Container = styled.section`
  position: relative;

  .swiper-slide-active {
    ${ItemImage} {
      opacity: 1;
      transform: scale(1);
    }

    ${ItemTitle} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${ItemOverview} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${ItemCtrl} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
