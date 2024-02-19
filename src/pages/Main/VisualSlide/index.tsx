import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import * as T from "../types";
import * as S from "./styled";
import { useEffect, useState } from "react";

function VisualItem(props: { item: T.TMovieInfo }) {
  const { item } = props;
  const [moreDesc, setMoreDesc] = useState<boolean>(true);
  const [overview, setOverview] = useState<string>("");

  const onDescMore = () => {
    setMoreDesc(false);
    setOverview(item.overview);
  };

  useEffect(() => {
    if (item.overview && item.overview.length) {
      setOverview(item.overview.substring(0, 50));
    }
  }, []);

  return (
    <S.VisualContainer
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/original/${
          item.backdrop_path
        })`,
      }}
    >
      <S.VisualContent>
        <S.VisualImage>
          <S.VisualThumb
            src={`${import.meta.env.VITE_IMAGE_URL}/original/${
              item.poster_path
            }`}
            alt=""
          />
        </S.VisualImage>

        <S.VisualInfo>
          <S.VisualTitle>
            {item.title}
            {item.original_language !== "ko" && (
              <>
                <br />({item.original_title})
              </>
            )}
          </S.VisualTitle>
          {item.overview && (
            <>
              <S.VisualDesc>
                <S.VisualDescText>{overview}</S.VisualDescText>
                {moreDesc && (
                  <S.VisualDescMore onClick={onDescMore}>
                    ...더 보기
                  </S.VisualDescMore>
                )}
              </S.VisualDesc>
            </>
          )}

          <S.VisualButtons>
            <S.VisualBtn to={`/movie/${item.id}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              상세정보
            </S.VisualBtn>
            <S.VisualOutlineBtn>예고편</S.VisualOutlineBtn>
          </S.VisualButtons>
        </S.VisualInfo>
      </S.VisualContent>
    </S.VisualContainer>
  );
}

export default function VisualSlider(props: { movies: T.TMovieInfo[] | [] }) {
  const { movies } = props;

  return (
    <Swiper loop={true} spaceBetween={0} slidesPerView={1}>
      {movies.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            <VisualItem item={movie} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
