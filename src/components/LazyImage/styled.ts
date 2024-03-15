import styled, { keyframes } from "styled-components";
const loop = keyframes`
 0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border: 3px solid #fff;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: ${loop} 1s linear infinite;
    box-sizing: border-box;
  }
`;
