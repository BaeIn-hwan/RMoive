import styled from "styled-components";

export const MovieSliderNavi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
  width: 50px;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  fill: #fff;

  &.disabled {
    display: none !important;
  }
`;

export const MovieSliderNext = styled(MovieSliderNavi)`
  right: 0;
  background-image: radial-gradient(
    77% 42.5% at 94% 50%,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 65.5%,
    rgba(0, 0, 0, 0) 100%
  );
`;
export const MovieSliderPrev = styled(MovieSliderNavi)`
  left: 0;
  background-image: radial-gradient(
    77% 42.5% at 6% 50%,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 65.5%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const MovieSlider = styled.div`
  position: relative;

  &:hover ${MovieSliderNavi} {
    visibility: visible;
    opacity: 1;
  }
`;
