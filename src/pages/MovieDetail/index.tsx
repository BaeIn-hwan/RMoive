import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import apiRequest from "@/apis";

import * as S from "./styled";
import LazyImage from "@/components/LazyImage";
import MovieCarousel from "@/components/MovieCarousel";
import useIo from "@/hooks/useIo";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

export default function MovieDetail() {
  const { type, id } = useParams<{
    type?: "movie" | "tv";
    id: string | undefined;
  }>();

  const [detail, setDetail] = useState(null);
  const [casts, setCasts] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const [tagLineRef, tagLineShow] = useIo({
    threshold: 1,
  });

  const [overViewRef, overViewShow] = useIo({
    threshold: 1,
  });

  const getDetail = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}`, {
        method: "get",
        params: {
          language: "ko-KR",
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
          language: "ko-KR",
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

  const getRecommend = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/recommendations`, {
        method: "get",
        params: {
          language: "ko-KR",
          page: 1,
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setRecommend(response.data.results);
      }
    } catch (error) {
      console.error(`GetRecommend Error.. ${error}`);
    }
  };

  useEffect(() => {
    getDetail();
    getCast();
    getRecommend();
  }, []);

  if (!detail) return;

  return (
    <S.Container>
      <S.MovieCard
        style={{
          backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}original${
            detail.backdrop_path
          })`,
        }}
      >
        <S.Wrapper>
          <S.Image>
            <LazyImage
              src={`${import.meta.env.VITE_IMAGE_URL}w300${detail.poster_path}`}
              alt=""
            />
          </S.Image>

          <S.Details>
            <S.Genres>
              {detail.genres.map((item) => {
                return <S.GenresItem key={item.id}>{item.name}</S.GenresItem>;
              })}
            </S.Genres>

            <S.Title>
              <S.DefaultTitle>{detail.title}</S.DefaultTitle>
              {detail.original_title && (
                <S.OriginTitle>{detail.original_title}</S.OriginTitle>
              )}
            </S.Title>

            <S.Summary>
              <S.SummaryList>
                <S.SummaryItem>
                  <S.SummaryTitle>개봉</S.SummaryTitle>
                  <S.SummaryContent>{detail.release_date}</S.SummaryContent>
                </S.SummaryItem>

                <S.SummaryItem>
                  <S.SummaryTitle>상영시간</S.SummaryTitle>
                  <S.SummaryContent>
                    <span>{detail.runtime}</span>분
                  </S.SummaryContent>
                </S.SummaryItem>

                <S.SummaryItem>
                  <S.SummaryTitle>평점</S.SummaryTitle>
                  <S.SummaryContent>
                    <span style={{ color: "#febe98" }}>
                      {detail.vote_average.toFixed(1)}
                    </span>{" "}
                    / 10.0
                  </S.SummaryContent>
                </S.SummaryItem>
              </S.SummaryList>
            </S.Summary>

            <S.Cast>
              <S.CastTitle>출연</S.CastTitle>
              <S.CastContent>
                {casts.slice(0, 5).map((cast, i) => {
                  return (
                    <S.CastLink key={cast.id} to="#">
                      {cast.name}
                      {i !== 4 && ","}{" "}
                    </S.CastLink>
                  );
                })}
              </S.CastContent>
            </S.Cast>
          </S.Details>
        </S.Wrapper>
      </S.MovieCard>

      <S.Contents>
        <S.Story>
          {detail.tagline && (
            <S.TagLine ref={tagLineRef} $show={tagLineShow}>
              {detail.tagline}
            </S.TagLine>
          )}
          {detail.overview && (
            <S.OverView ref={overViewRef} $show={overViewShow}>
              {detail.overview}
            </S.OverView>
          )}
        </S.Story>
      </S.Contents>

      {recommend && recommend.length ? (
        <S.Recommend>
          <S.RecommendTitle>Recommend Movie</S.RecommendTitle>
          <div>
            <MovieCarousel
              list={recommend}
              isFull={false}
              spaceBetween={20}
              navigation={false}
            />
          </div>
        </S.Recommend>
      ) : null}
    </S.Container>
  );
}
