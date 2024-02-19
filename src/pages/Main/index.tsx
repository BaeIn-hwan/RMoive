import apiRequest from "@/apis";
import { useEffect, useState } from "react";

import * as S from "./styled";
import * as T from "./types";
import VisualSlider from "./VisualSlide";

export default function Main() {
  const [visualMovies, setVisualMovies] = useState<T.TMovieInfo[] | []>([]);

  const getVisualMovies = async () => {
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
      console.error(error);
    }
  };

  useEffect(() => {
    getVisualMovies();
  }, []);

  return (
    <S.Main>
      <S.Visual>
        <h2 className="blind">Visual</h2>

        <VisualSlider movies={visualMovies} />
      </S.Visual>

      <div></div>
    </S.Main>
  );
}
