import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TitleLayout = css`
  font-size: 32px;
  color: #fff;
`;

export const SectionLayout = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const ShowAnimation = css`
  visibility: visible;
  opacity: 1;
  transform: translate3d(0, 0, 0);
`;

export const RecommendContent = styled.div`
  margin-top: 20px;
`;

export const RecommendTitle = styled.h3`
  ${SectionLayout};
  margin-bottom: 30px;
`;

export const Recommend = styled.section`
  margin-top: 100px;
`;

export const VideoTitle = styled.h3`
  margin-bottom: 30px;
  ${TitleLayout};
`;

export const Video = styled.section`
  ${SectionLayout};
`;

export const OverView = styled.p<{ $show: boolean }>`
  margin-top: 30px;
  font-size: 14px;
  color: #fff;
  line-height: 26px;
  word-wrap: break-word;
  word-break: keep-all;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0, -30px, 0);
  transition: all.35s linear 0.25s;
  ${(props) => props.$show && `${ShowAnimation}`};
`;

export const TagLine = styled.strong<{ $show: boolean }>`
  display: block;
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0, -30px, 0);
  transition: all.35s linear;
  ${(props) => props.$show && `${ShowAnimation}`};
`;

export const Story = styled.div`
  ${SectionLayout};
`;

export const Contents = styled.div`
  margin-top: 75px;
`;

export const CastLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const CastContent = styled.div`
  word-wrap: break-word;
  word-break: keep-all;
`;

export const CastTitle = styled.div`
  flex: 0 0 auto;
  font-size: 18px;
  color: #ccc;
`;

export const Cast = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 10px;
`;

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
  margin-top: 25px;
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
  margin-top: 35px;
  color: #fff;
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
`;

export const Details = styled.div`
  flex: 1;
  padding-top: 30px;
`;

export const Image = styled.figure`
  overflow: hidden;
  width: 250px;
  border-radius: 10px;
  font-size: 0;

  img {
    max-width: 100%;
    aspect-ratio: 2 / 3;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  position: relative;
  ${SectionLayout};
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
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
`;

export const Container = styled.div`
  position: relative;
`;
