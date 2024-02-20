import styled from "styled-components";
import { Link } from "react-router-dom";

export const GnbLink = styled(Link)`
  position: relative;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.25s linear;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.25s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover:before {
    width: 100%;
  }
`;

export const GnbItem = styled.li`
  &.active ${GnbLink} {
    &:before {
      width: 100%;
    }
  }
`;

export const GnbList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Gnb = styled.nav``;

export const LogoLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  transition: all 0.35s linear;

  /* &.active {
    height: 60px;
  } */
`;
