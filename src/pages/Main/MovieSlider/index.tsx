import { useRef } from "react";

import MovieCarousel from "@/components/MovieCarousel";

import * as S from "./styled";

export default function MovieSlider(props: any) {
  const { movies } = props;

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  if (!(movies && movies.length)) return;

  return (
    <S.MovieSlider>
      <MovieCarousel
        list={movies}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: "disabled",
        }}
      />

      <S.MovieSliderPrev ref={prevRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </S.MovieSliderPrev>

      <S.MovieSliderNext ref={nextRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </S.MovieSliderNext>
    </S.MovieSlider>
  );
}
