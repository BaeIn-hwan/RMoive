import { useEffect, useState } from "react";

import apiRequest from "@/apis";
// import useMovies from "@/store/movies";

import KeyVisual from "@/pages/Main/KeyVisual";
import MovieSlider from "@/pages/Main/MovieSlider";

import * as S from "./styled";

export default function Main() {
  // const { popular, setPopular } = useMovies();
  const [playing, setPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRate, setTopRate] = useState([]);

  const getPlayingMovies = async () => {
    try {
      const response = await apiRequest(`/movie/now_playing`, {
        method: "get",
        params: {
          page: 1,
          language: "ko-KR",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setPlaying(response.data.results);
      }
    } catch (error) {
      console.error(`getPlayingMovies Error.. ${error}`);
    }
  };

  const getPopularMovies = async () => {
    try {
      const response = await apiRequest(`/movie/popular`, {
        method: "get",
        params: {
          page: 1,
          language: "ko-KR",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setPopular(response.data.results);
      }
    } catch (error) {
      console.error(`GetPopularMovies Error.. ${error}`);
    }
  };

  const getTopRateMovies = async () => {
    try {
      const response = await apiRequest(`/movie/top_rated`, {
        method: "get",
        params: {
          page: 1,
          language: "ko-KR",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setTopRate(response.data.results);
      }
    } catch (error) {
      console.error(`getTopRateMovies Error.. ${error}`);
    }
  };

  useEffect(() => {
    getPlayingMovies();
    getPopularMovies();
    getTopRateMovies();
  }, []);

  return (
    <S.Container>
      <KeyVisual movies={popular.slice(0, 4)} />

      {/* <S.Section>
        <S.Title>Now Playing</S.Title>

        <MovieSlider movies={playing} />
      </S.Section> */}

      <S.Section>
        <S.Title>Popular</S.Title>

        <MovieSlider movies={popular} />
      </S.Section>

      {/* <S.Section>
        <S.Title>Top Rate</S.Title>

        <MovieSlider movies={topRate} />
      </S.Section> */}
    </S.Container>
  );
}
