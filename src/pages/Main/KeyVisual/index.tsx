import { useEffect, useState } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import useMovies from "@/store/movies";

import * as S from "./styled";

import LazyImage from "@/components/LazyImage";

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

SwiperCore.use([Navigation]);

function KeyVisualItem(props: { item: IPropsItem }) {
  const { item } = props;

  const onPreview = () => {};

  return (
    <S.ItemContainer
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/original${
          item.backdrop_path
        })`,
      }}
    >
      <S.ItemBox>
        <S.ItemImage>
          <LazyImage
            src={`${import.meta.env.VITE_IMAGE_URL}w300${item.poster_path}`}
            alt=""
          />
        </S.ItemImage>

        <S.ItemInfo>
          <S.ItemTitle>{item.title}</S.ItemTitle>
          {item.overview && <S.ItemOverview>{item.overview}</S.ItemOverview>}
          <S.ItemCtrl>
            <S.ItemMoreView to={`/movie/${item.id}`}>MORE VIEW</S.ItemMoreView>
            <S.ItemPreview onClick={onPreview}>PREVIEW</S.ItemPreview>
          </S.ItemCtrl>
        </S.ItemInfo>
      </S.ItemBox>
    </S.ItemContainer>
  );
}

export default function KeyVisual() {
  const [movies, setMovies] = useState([]);
  const { popular } = useMovies();

  useEffect(() => {
    setMovies(popular.slice(0, 4));
  }, [popular]);

  if (!(movies && movies.length)) return;

  return (
    <S.Container>
      <Swiper
        a11y={{
          enabled: true,
        }}
      >
        {movies.map((item: IPropsItem, i) => {
          return (
            <SwiperSlide key={i}>
              <KeyVisualItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
}
