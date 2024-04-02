import styled from "styled-components";

export const SummaryContent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;

  span {
    font-size: 18px;
    font-weight: 800;
  }
`;

export const SummaryTitle = styled.div`
  font-size: 18px;
  color: #ccc;
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  &:not(:first-child) {
    margin-left: 20px;
    padding-left: 22px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 20px;
      background-color: #fff;
      transform: translate3d(0, -50%, 0);
    }
  }
`;

export const SummaryList = styled.ul`
  display: flex;
  align-items: center;
`;

export const Summary = styled.div`
  margin-top: 35px;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.6s;
`;

export const OriginTitle = styled.em`
  display: block;
  font-size: 26px;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const DefaultTitle = styled.h2`
  font-size: 42px;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const Title = styled.div`
  margin-top: 25px;
  color: #fff;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.4s;
`;

export const GenresItem = styled.li`
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
`;

export const Genres = styled.ul`
  display: flex;
  gap: 8px;
  opacity: 0;
  transform: translate3d(0, -50px, 0);
  transition: all 0.4s ease 0.2s;
`;

export const Details = styled.div`
  flex: 1;
`;

export const Image = styled.figure`
  overflow: hidden;
  width: 250px;
  border-radius: 10px;
  font-size: 0;
  opacity: 0;
  transform: scale(0);
  transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 0.35s ease;

  img {
    max-width: 100%;
    aspect-ratio: 2 / 3;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 75vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 30%);
  }

  &.animation {
    ${Image} {
      transform: scale(1);
      opacity: 1;
    }

    ${Genres} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${Title} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${Summary} {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
