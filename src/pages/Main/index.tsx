import apiRequest from "@/apis";
import { useEffect, useState } from "react";

import * as S from "./styled";
import * as T from "./types";

import VisualMovie from "./VisualMovie";
import ContentMovie from "./ContentMovie";

export default function Main() {
  const [visualMovies, setVisualMovies] = useState<T.TPopularMovie[] | []>([]);
  const [popularMovies, setPopularMovies] = useState<T.TPopularMovie[] | []>(
    []
  );
  const [trendMovies, setTrendMovies] = useState<T.TTrendMovie[] | []>([]);

  const getPopularMovies = async () => {
    try {
      const response = await apiRequest(`/movie/popular`, {
        method: "get",
        params: {
          page: 1,
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setVisualMovies(response.data.results.slice(0, 4));
        setPopularMovies(response.data.results);
      }
    } catch (error) {
      console.error(`GetPopularMovies Error.. ${error}`);
    }
  };

  const getTrendingMovies = async () => {
    try {
      const response = await apiRequest(`/trending/movie/day`, {
        method: "get",
        params: {
          page: 1,
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setTrendMovies(response.data.results.slice(0, 10));
      }
    } catch (error) {
      console.error(`GetTrendingMovies Error.. ${error}`);
    }
  };

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
  }, []);

  return (
    <S.Main>
      <S.Visual>
        <h2 className="blind">Visual</h2>

        <VisualMovie list={visualMovies} />
      </S.Visual>

      <S.Section>
        <S.SectionTitle>급상승 인기 컨텐츠</S.SectionTitle>

        <ContentMovie list={popularMovies} />
      </S.Section>

      <S.Section>
        <S.SectionTitle>인기 컨텐츠</S.SectionTitle>

        <ContentMovie list={trendMovies} />
      </S.Section>
    </S.Main>
  );
}
