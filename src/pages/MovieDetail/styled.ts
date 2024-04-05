import styled, { css } from "styled-components";

export const SectionLayout = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  &:not(:first-child) {
    margin-top: 75px;
  }
`;

export const ShowAnimation = css`
  visibility: visible;
  opacity: 1;
  transform: translate3d(0, 0, 0);
`;

export const ModalCastsName = styled.span`
  display: block;
  font-size: 12px;
`;

export const ModalCastsCharacter = styled.span`
  display: block;

  font-size: 16px;
`;

export const ModalCastsInfo = styled.div`
  margin-top: 10px;
`;

export const ModalCastsThumb = styled.figure`
  overflow: hidden;
  font-size: 0;
  width: 100px;
  margin: 0 auto;
  border-radius: 10px;

  img {
    max-width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: contain;
  }
`;

export const ModalCastsItem = styled.li`
  max-width: 100px;
  text-align: center;
`;

export const ModalCastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 30px 20px;
`;

export const ModalCastsTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
`;

export const ModalCasts = styled.div`
  padding: 15px;
`;

export const OverView = styled.p<{ $show: boolean }>`
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
  font-size: 28px;
  font-weight: 800;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0, -30px, 0);
  transition: all 0.35s linear;
  ${(props) => props.$show && `${ShowAnimation}`};
`;

export const Contents = styled.div`
  margin-top: 100px;
`;

export const MoreBtn = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  line-height: 1;

  svg {
    width: 24px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 36px;
  color: #fff;
`;

export const SectionHeader = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;
`;

export const RecommendSection = styled.section`
  ${SectionLayout};
`;

export const VideoSection = styled.section`
  ${SectionLayout};
`;

export const CastSection = styled.section`
  ${SectionLayout};
`;

export const StorySection = styled.div`
  ${SectionLayout};

  & > div:not(:first-child) {
    margin-top: 24px;
  }
`;

export const Container = styled.div`
  position: relative;
`;
