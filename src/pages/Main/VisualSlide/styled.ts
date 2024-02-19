import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const VisualBtnCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 140px;
  height: 44px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.35s linear;

  &:hover {
    box-shadow: 0 0 10px 3px rgb(255 133 60 / 80%);
  }
`;

export const VisualOutlineBtn = styled.button.attrs({ type: "button" })`
  ${VisualBtnCSS};
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: #fff;

  &:hover {
    background-color: #fff;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const VisualBtn = styled(Link)`
  ${VisualBtnCSS};
  border: 2px solid transparent;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
`;

export const VisualButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 30px;
`;

export const VisualDescMore = styled.button.attrs({ type: "button" })`
  display: inline-block;
  margin-left: 6px;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
`;

export const VisualDescText = styled.p`
  display: inline-block;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  line-height: 26px;
  word-break: break-word;
  word-wrap: break-word;
`;

export const VisualDesc = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const VisualTitle = styled.h3`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.text};
  word-break: break-word;
  word-wrap: break-word;
`;

export const VisualInfo = styled.div`
  flex: 1;
  width: 650px;
`;

export const VisualThumb = styled.img`
  max-width: 100%;
  aspect-ratio: 3 / 4;
`;

export const VisualImage = styled.figure`
  overflow: hidden;
  position: relative;
  width: 300px;
  border-radius: 20px;
  font-size: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const VisualContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: relative;
  z-index: 1;
`;

export const VisualContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: "";
    display: block;
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
