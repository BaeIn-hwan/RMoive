import styled from "styled-components";
import FirstArrow from "@/assets/images/icon_pagination_first.svg";
import PrevArrow from "@/assets/images/icon_pagination_prev.svg";
import NextArrow from "@/assets/images/icon_pagination_next.svg";
import LastArrow from "@/assets/images/icon_pagination_last.svg";

export const PaginationBtn = styled.button.attrs({ type: "button" })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: rgb(255 255 255 / 10%);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }
`;

export const PaginationNumber = styled(PaginationBtn)`
  font-size: 14px;
  font-weight: 600;
  color: #fff;

  &.is-active {
    background-color: rgb(255 255 255 / 10%);
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const PaginationLast = styled(PaginationBtn)`
  margin-left: 4px;
  background-image: url(${LastArrow});
`;

export const PaginationNext = styled(PaginationBtn)`
  background-image: url(${NextArrow});
`;

export const PaginationPrev = styled(PaginationBtn)`
  background-image: url(${PrevArrow});
`;

export const PaginationFirst = styled(PaginationBtn)`
  margin-right: 4px;
  background-image: url(${FirstArrow});
`;

export const PaginationItem = styled.li`
  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
