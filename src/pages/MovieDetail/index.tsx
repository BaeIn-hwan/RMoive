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
          <S.Title>{detail.title}</S.Title>
        </S.Info>
      </S.Details>
    </S.Container>
  );
}
