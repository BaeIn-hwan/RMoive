import styled from "styled-components";

export const Header = styled.header`
  padding: 10px 12px;
  font-size: 18px;
  font-weight: 600;
`;

export const CloseIcon = styled.button.attrs({ type: "button" })`
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  color: #fff;
`;

export const Modal = styled.div`
  position: relative;
  min-width: 400px;
  max-width: 80%;
  background-color: #fff;
  box-shadow: 0 12px 24px rgba(33, 38, 45, 0.12);
`;

export const Dimmed = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
`;
