import apiRequest from "@/apis";
import { useEffect, useState } from "react";

import * as S from "./styled";
import * as T from "./types";

import VisualSlider from "@/components/VisualSlide";
import SliderItem from "@/components/SliderItem";

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
        setVisualMovies(response.data.results.slice(0, 5));
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

        <VisualSlider movies={visualMovies} />
      </S.Visual>

      <section>
        <h2>인기 급!상승 컨텐츠</h2>
        {/* <SliderList /> */}
      </section>

      <section>
        <h2>인기 컨텐츠</h2>
        {trendMovies.map((item) => (
          <SliderItem
            image={
              <div style={{ borderRadius: "10px" }}>
                <div>aaa</div>
                <SliderItem.Image src={item.poster_path} />
              </div>
            }
            info={
              <SliderItem.Info>
                <div>블라브라</div>
              </SliderItem.Info>
            }
          />
        ))}
      </section>
    </S.Main>
  );
}
