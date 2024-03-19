import { useQuery } from "@tanstack/react-query";

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

  const [tagLineRef, tagLineShow] = useIo<HTMLDivElement>({
    threshold: 0.25,
  });

  const [overViewRef, overViewShow] = useIo<HTMLDivElement>({
    threshold: 0.25,
  });

  const getDetail = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}`, {
        method: "get",
        params: {
          language: "ko-KR",
        },
      });

      return response.data;
    } catch (error) {
      console.error(`GetDetail Error.. ${error}`);
      return error;
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

      return response.data.cast.splice(0, 5);
    } catch (error) {
      console.error(`GetCast Error.. ${error}`);
      return error;
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

      return response.data.results;
    } catch (error) {
      console.error(`GetRecommend Error.. ${error}`);
      return error;
    }
  };

  const { isLoading: load01, data: detail } = useQuery({
    queryKey: ["detail"],
    queryFn: getDetail,
  });

  const { isLoading: load02, data: casts } = useQuery({
    queryKey: ["casts"],
    queryFn: getCast,
  });

  const { isLoading: load03, data: recommends } = useQuery({
    queryKey: ["recommends"],
    queryFn: getRecommend,
  });

  if (load01 && load02 && load03) return <div>Loading...</div>;

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
                {casts.map((cast, i) => {
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
            <div ref={tagLineRef}>
              <S.TagLine $show={tagLineShow}>{detail.tagline}</S.TagLine>
            </div>
          )}

          {detail.overview && (
            <div ref={overViewRef}>
              <S.OverView $show={overViewShow}>{detail.overview}</S.OverView>
            </div>
          )}
        </S.Story>
      </S.Contents>

      {recommends && recommends.length ? (
        <S.Recommend>
          <S.RecommendTitle>Recommend Movie</S.RecommendTitle>

          <MovieCarousel
            list={recommends}
            spaceBetween={20}
            navigation={false}
          />
        </S.Recommend>
      ) : null}
    </S.Container>
  );
}
