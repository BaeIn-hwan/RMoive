import styled from "styled-components";

export const Name = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 14px;
`;

export const Character = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-top: 10px;
  color: #fff;
`;

export const ThumbNail = styled.figure`
  overflow: hidden;
  font-size: 0;
  border-radius: 10px;

  img {
    max-width: 100%;
    transition: all 0.25s ease;
  }
`;

export const Item = styled.li`
  width: calc(100% / 5 - 10px);

  &:hover {
    ${ThumbNail} img {
      transform: scale(1.2);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div``;
