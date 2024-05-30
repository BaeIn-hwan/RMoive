import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  display: block;
  font-size: 0;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 40px;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 50%), transparent);
  transition: background-color 0.35s linear;

  &.sticky {
    backdrop-filter: blur(10px);
  }
`;
