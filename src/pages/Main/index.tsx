import { useQuery } from "@tanstack/react-query";

import KeyVisual from "@/components/KeyVisual";
import MovieSlider from "@/pages/Main/MovieSlider";

import * as S from "./styled";
import {
  getPlayingMovies,
  getPopularMovies,
  getTopRateMovies,
} from "@/apis/modules/movies";

export default function Main() {
  const {
    isLoading: load01,
    error: error01,
    data: playingList,
  } = useQuery({
    queryKey: ["playingMovie"],
    queryFn: () => getPlayingMovies(),
  });

  const {
    isLoading: load02,
    error: error02,
    data: popularList,
  } = useQuery({
    queryKey: ["playingMovie"],
    queryFn: () => getPopularMovies(),
  });

  const {
    isLoading: load03,
    error: error03,
    data: topRateList,
  } = useQuery({
    queryKey: ["playingMovie"],
    queryFn: () => getTopRateMovies(),
  });

  return (
    <S.Container>
      <KeyVisual movies={playingList} />

      <S.Section>
        <S.Title>Now Playing</S.Title>

        <MovieSlider movies={playingList} />
      </S.Section>

      <S.Section>
        <S.Title>Popular</S.Title>

        <MovieSlider movies={popularList} />
      </S.Section>

      <S.Section>
        <S.Title>Top Rate</S.Title>

        <MovieSlider movies={topRateList} />
      </S.Section>
    </S.Container>
  );
}
