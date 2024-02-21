import styled, { css } from "styled-components";

const SectionTitle = css`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 800;
  color: #fff;
`;

const SectionLayout = css`
  max-width: 1045px;
  margin: 0 auto;
  padding-top: 100px;
`;
export const SimilarTitle = styled.h2`
  ${SectionTitle};
`;

export const Similar = styled.section`
  ${SectionLayout};
`;

export const CastSharacter = styled.span`
  display: block;
  font-size: 14px;
  color: #fff;
`;

export const CastInfo = styled.div`
  display: block;
  margin-top: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #a1a1a1;
  line-height: 24px;
`;

export const CastThumb = styled.img`
  max-width: 100%;
  transition: all 0.25s ease;
`;

export const CastImage = styled.figure`
  overflow: hidden;
  border-radius: 10px;
  font-size: 0;
`;

export const CastItem = styled.li`
  width: calc(100% / 6);

  &:hover {
    ${CastThumb} {
      transform: scale(1.1);
    }
  }
`;

export const CastList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const CastTitle = styled.h2`
  ${SectionTitle};
`;

export const Cast = styled.section`
  ${SectionLayout};
`;

export const ContentOverview = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  line-height: 28px;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const ContentTagLine = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  word-break: keep-all;
  word-wrap: break-word;
`;

export const ContentTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #fff;
`;

export const ContentInfo = styled.div`
  width: 70%;
`;

export const ContentThumb = styled.img`
  max-width: 100%;
`;

export const ContentImage = styled.figure`
  flex: 1 1;
  font-size: 0;
`;

export const Content = styled.section`
  display: flex;
  gap: 50px;
  max-width: 1045px;
  margin: 0 auto;
`;

export const PosterImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 150px;
`;
