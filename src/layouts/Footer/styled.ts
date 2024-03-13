import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const TextStyle = css`
  font-size: 14px;
  color: #ccc;
  line-height: 22px;
`;

export const Copyright = styled.p`
  margin-top: 40px;
  font-size: 16px;
  color: #ccc;
`;

export const Content = styled.p`
  margin-top: 20px;
  ${TextStyle};
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const MenuItem = styled.li`
  position: relative;

  &:not(:first-child) {
    margin-left: 14px;
    padding-left: 16px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 18px;
      background-color: #fff;
      transform: translate3d(0, -50%, 0);
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Footer = styled.footer`
  margin-top: 100px;
  padding: 50px 0;
  background-color: #111;
`;
