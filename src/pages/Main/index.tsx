import apiRequest from "@/apis";
import { useEffect, useState } from "react";

import * as S from "./styled";
import * as T from "./types";

import VisualMovie from "./VisualMovie";
import MovieSlider from "@/components/MovieSlider";

export default function Main() {
  const [visualMovies, setVisualMovies] = useState<T.TPopularMovie[] | []>([]);
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
        setTrendMovies(response.data.results);
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

        <VisualMovie movies={visualMovies} />
        {/* <VisualSlider movies={visualMovies} /> */}
      </S.Visual>

      <div>
        <section>
          <h2>인기 급!상승 컨텐츠</h2>
          {/* <SliderList /> */}
          {/* <MovieSlider> */}
        </section>

        <section style={{ height: "100vh", background: "blue" }}>
          <h2>인기 컨텐츠</h2>
        </section>
      </div>
    </S.Main>
  );
}
