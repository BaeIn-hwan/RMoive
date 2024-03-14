import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import * as S from "./styled";

interface IPropsItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
  title?: string;
  name?: string;
}

SwiperCore.use([Navigation, Pagination]);

export default function KeyVisual({ movies }: { movies: IPropsItem[] }) {
  if (!(movies && movies.length)) return;

  return (
    <S.Container>
      <S.Slider
        a11y={{
          enabled: true,
        }}
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={25}
      >
        {movies.map((item: IPropsItem, i: number) => {
          return (
            <S.SliderItem key={i}>
              <S.Poster>
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}original${
                    item.backdrop_path
                  }`}
                  alt=""
                />
              </S.Poster>

              <S.Info>
                <S.Title>{item.title}</S.Title>
                {item.original_title && (
                  <S.OriginTitle>{item.original_title}</S.OriginTitle>
                )}
              </S.Info>
            </S.SliderItem>
          );
        })}
      </S.Slider>
    </S.Container>
  );
}
