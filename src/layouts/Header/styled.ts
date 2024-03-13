import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
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
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.35s linear;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgb(0 0 0 / 50%), transparent);
  }

  &.active {
    box-shadow: 0 0 0 0 #000;

    &::before {
      backdrop-filter: blur(10px);
    }
  }
`;
