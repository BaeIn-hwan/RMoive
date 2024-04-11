import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecentEmpty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  font-size: 14px;
  text-align: center;
`;

export const RecentDelete = styled.button.attrs({ type: "button" })`
  width: 14px;
  font-size: 0;

  svg {
  }
`;

export const RecentTitle = styled(Link)`
  flex: 0 1 auto;
  max-width: calc(100% - 24px);
  font-size: 14px;
  color: #000;
`;

export const RecentItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const RecentList = styled.ul`
  padding: 10px;
  border-radius: 6px;
  background-color: #fff;
`;

export const Recent = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100px;
  padding-top: 15px;
`;

export const SearchInput = styled.input.attrs({ type: "input" })`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 40px;
  padding: 0 20px 0 0;
  border: 0;
  background-color: transparent;
  outline: 0;
`;

export const SearchIcon = styled.i`
  display: flex;
  flex: 0 0 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 0;
  cursor: pointer;

  svg {
    width: 20px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  overflow: hidden;
  width: 40px;
  position: relative;
  border-radius: 20px;
  background-color: #fff;
  transition: box-shadow 0.35s linear;

  &:hover {
    box-shadow: 0 0 4px 4px rgb(255 255 255 / 30%);
  }

  &.on {
    overflow: visible;
    width: 240px;
    box-shadow: 0 0 4px 4px rgb(255 255 255 / 30%);

    ${SearchIcon} {
      cursor: default;
    }
  }
`;
