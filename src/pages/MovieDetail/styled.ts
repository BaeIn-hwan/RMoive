import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const OverView = styled.p`
  margin-top: 24px;
  font-size: 14px;
  line-height: 26px;
  word-wrap: break-word;
  word-break: keep-all;
`;

export const TagLine = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 20px;
`;

export const Contents = styled.div`
  margin-top: 100px;
`;

export const CastLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const CastTitle = styled(InfoTitle)``;

export const Cast = styled.div`
  margin-top: 16px;
`;

export const ReleaseDateTitle = styled(InfoTitle)``;

export const ReleaseDate = styled.span`
  display: block;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const Title = styled.h2`
  margin-top: 35px;
  font-size: 42px;
  line-height: 54px;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const GenresItem = styled.li`
  padding: 4px 10px;
  border: 1px solid #fff;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
`;

export const Genres = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Info = styled.div`
  flex: 1;
  color: #fff;
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

export const Details = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Poster = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  position: relative;
  padding-top: 80px;
`;
