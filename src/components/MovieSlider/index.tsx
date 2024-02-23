import { useMemo, useRef } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import * as S from "./styled";
import * as T from "./types";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const defaultOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: false,
  loop: false,
  autoplay: false,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 2,
    loadOnTransitionStart: true,
  },
  grabCursor: true,
};

export default function MovieSlider(props: T.IPropsMovieSlider) {
  const { options, children } = props;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    []
  );

  return (
    <S.Container>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: "disabled",
        }}
        {...sliderOptions}
      >
        {children}
      </Swiper>

      {/* Prev Button */}
      <S.PrevButton ref={prevRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </S.PrevButton>

      {/* Next Button */}
      <S.NextButton ref={nextRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </S.NextButton>
    </S.Container>
  );
}

MovieSlider.Item = SwiperSlide;
