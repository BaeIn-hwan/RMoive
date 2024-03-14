import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import apiRequest from "@/apis";

import * as S from "./styled";
import LazyImage from "@/components/LazyImage";

export default function MovieDetail() {
  const { type, id } = useParams<{
    type?: "movie" | "tv";
    id: string | undefined;
  }>();

  const [detail, setDetail] = useState(null);
  const [casts, setCasts] = useState([]);

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

  useEffect(() => {
    getDetail();
    getCast();
  }, [type, id]);

  if (!detail) return;

  return (
    <S.Container>
      <S.Poster
        style={{
          backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}original${
            detail.backdrop_path
          })`,
        }}
      ></S.Poster>

      <S.Details>
        <S.Image>
          <LazyImage
            src={`${import.meta.env.VITE_IMAGE_URL}w300${detail.poster_path}`}
            alt=""
          />
        </S.Image>

        <S.Info>
          <S.Genres>
            {detail.genres.map((item) => {
              return <S.GenresItem key={item.id}>{item.name}</S.GenresItem>;
            })}
          </S.Genres>

          <S.Title>{detail.title || detail.original_title}</S.Title>

          <S.ReleaseDate>
            <S.ReleaseDateTitle>개봉일</S.ReleaseDateTitle>
            <div>{detail.release_date}</div>
          </S.ReleaseDate>

          <S.Cast>
            <S.CastTitle>출연진</S.CastTitle>
            <div>
              {casts.slice(0, 5).map((cast, i) => {
                return (
                  <S.CastLink key={cast.id} to="#">
                    {cast.name}
                    {i !== 4 && ", "}
                  </S.CastLink>
                );
              })}
            </div>
          </S.Cast>
        </S.Info>
      </S.Details>

      <S.Contents>
        {detail.overview && <S.OverView>{detail.overview}</S.OverView>}
        {detail.tagline && <S.TagLine>{detail.tagline}</S.TagLine>}
      </S.Contents>
    </S.Container>
  );
}
