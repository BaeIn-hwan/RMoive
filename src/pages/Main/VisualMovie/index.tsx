import { useEffect } from "react";

import type { SwiperProps } from "swiper/react";

import * as T from "../types";
import * as S from "./styled";

interface IPropsVisual {
  movies: T.Movie[];
  options?: SwiperProps;
}

function VisualSkeleton() {
  return (
    <S.SkeletonContainer>
      <S.SkeletonImage></S.SkeletonImage>
      <S.SkeletonInfo>
        <S.SkeletonTitle></S.SkeletonTitle>
        <S.SkeletonOverview>
          <span></span>
          <span></span>
          <span></span>
        </S.SkeletonOverview>
      </S.SkeletonInfo>
    </S.SkeletonContainer>
  );
}

export default function VisualMovie(props: IPropsVisual) {
  const { movies, options } = props;

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  if (!(movies && movies.length)) {
    return <VisualSkeleton />;
  }

  return (
    <S.VisualSwiper {...options}>
      {movies.map((item) => (
        <S.VisualSlide key={item.id}>
          <S.VisualContainer
            style={{
              backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/original${
                item.backdrop_path
              })`,
            }}
          >
            <S.VisualImage>
              <S.VisualThumb
                src={`${import.meta.env.VITE_IMAGE_URL}original${
                  item.poster_path
                }`}
                alt=""
              />
            </S.VisualImage>

            <S.VisualInfo>
              <S.VisualTitle>
                {item.title}{" "}
                {item.original_language !== "ko" && (
                  <>({item.original_title})</>
                )}
              </S.VisualTitle>
              {item.overview && (
                <S.VisualOverview>{item.overview}</S.VisualOverview>
              )}

              <S.VisualBtns>
                <S.VisualViewMore to={`/movie/${item.id}`}>
                  VIEW MORE
                </S.VisualViewMore>
                <S.VisualTrailer>TRAILER PREVIEW</S.VisualTrailer>
              </S.VisualBtns>
            </S.VisualInfo>
          </S.VisualContainer>
        </S.VisualSlide>
      ))}
    </S.VisualSwiper>
  );
}
