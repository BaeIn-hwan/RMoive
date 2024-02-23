import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiRequest from "@/apis";

import * as S from "./styled";
import * as T from "./types";

import MovieCard from "@/components/MovieCard";

import noImage from "@/assets/img_no-people.webp";
import MovieSlider from "@/components/MovieSlider";

export default function CategoryDetail() {
  const { type, id } = useParams<{
    type?: "movie" | "tv";
    id: string | undefined;
  }>();
  const [detail, setDetail] = useState<T.IDetail | null>(null);
  const [casts, setCasts] = useState<T.ICast[] | []>([]);
  const [similars, setSimilars] = useState<T.ISimilar[] | []>([]);

  const getDetail = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (response && response.data) {
        setDetail(response.data);
      }
    } catch (error) {
      console.error(`GetDetail Error.. ${error}`);
    }
  };

  const getCast = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/credits`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.cast &&
        response.data.cast.length
      ) {
        setCasts(response.data.cast.splice(0, 6));
      }
    } catch (error) {
      console.error(`GetCast Error.. ${error}`);
    }
  };

  const getSimilar = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/similar`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setSimilars(response.data.results);
      }
    } catch (error) {
      console.error(`GetCast Error.. ${error}`);
    }
  };

  useEffect(() => {
    getDetail();
    getCast();
    getSimilar();
  }, [type, id]);

  if (!detail) return;

  return (
    <S.Container>
      <S.BackgroundPoster
        style={{
          backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}original${
            detail.backdrop_path
          })`,
        }}
      ></S.BackgroundPoster>

      <S.Detail>
        <S.Poster>
          <S.PosterThumb
            src={`${import.meta.env.VITE_IMAGE_URL}original${
              detail.poster_path
            }`}
            alt=""
          />
        </S.Poster>

        <S.Infomation>
          {detail.genres && detail.genres.length && (
            <S.Genres>
              {detail.genres.map((item) => (
                <S.GenresItem key={item.id}>{item.name}</S.GenresItem>
              ))}
            </S.Genres>
          )}

          <S.Title>
            {detail.title || detail.name}{" "}
            {detail.original_language !== "ko" && (
              <>({detail.original_title || detail.original_name})</>
            )}
          </S.Title>

          {detail.tagline && <S.TagLine>{detail.tagline}</S.TagLine>}

          {detail.overview && <S.Overview>{detail.overview}</S.Overview>}
        </S.Infomation>
      </S.Detail>

      <S.Cast>
        <S.CastTitle>출연진</S.CastTitle>

        <S.CastList>
          {casts.map((cast) => (
            <S.CastItem key={cast.id}>
              <S.CastImage>
                <S.CastThumb
                  src={
                    cast.profile_path
                      ? `${import.meta.env.VITE_IMAGE_URL}w300${
                          cast.profile_path
                        }`
                      : `${noImage}`
                  }
                  alt=""
                />
              </S.CastImage>
              <S.CastInfo>
                <S.CastSharacter>{cast.character}</S.CastSharacter>({cast.name})
              </S.CastInfo>
            </S.CastItem>
          ))}
        </S.CastList>
      </S.Cast>

      {similars && (
        <S.Similar>
          <S.SimilarTitle>
            관련 {type === "movie" ? "영화" : "TV 프로그램"} 추천
          </S.SimilarTitle>

          <MovieSlider options={{ slidesPerView: 5, spaceBetween: 16 }}>
            {similars.map((item) => {
              return (
                <MovieSlider.Item key={item.id}>
                  <MovieCard type={type} item={item} />
                </MovieSlider.Item>
              );
            })}
          </MovieSlider>
        </S.Similar>
      )}
    </S.Container>
  );
}
