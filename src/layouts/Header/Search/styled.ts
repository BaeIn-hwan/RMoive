import styled from "styled-components";

export const RecentEmpty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  font-size: 14px;
  text-align: center;
`;

export const RecentItem = styled.li`
  &:not(:first-child) {
    margin-top: 6px;
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
