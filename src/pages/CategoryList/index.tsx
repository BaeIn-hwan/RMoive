import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./styled";

import apiRequest from "@/apis";

import Genres from "@/components/Geners";
import MovieList from "@/components/MovieList";

export default function CategoryList() {
  const { category } = useParams();
  const [genres, setGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [selectGenres, setSelectGenres] = useState<number>(0);

  const getGenres = async () => {
    try {
      const response = await apiRequest(`/genre/${category}/list`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.genres &&
        response.data.genres.length
      ) {
        setGenres(response.data.genres);
      }
    } catch (error) {
      console.error(`GetGenres Error.. ${error}`);
    }
  };

  const getDiscoverList = async () => {
    try {
      const response = await apiRequest(`/discover/${category}`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setMovieList(response.data.results);
      }
    } catch (error) {
      console.error(`GetDiscoverMovies Error.. ${error}`);
    }
  };

  useEffect(() => {
    setSelectGenres(0);
    getGenres();
    getDiscoverList();
  }, [category]);

  return (
    <S.Container>
      <S.Title>{category?.toUpperCase()} LIST</S.Title>

      <S.Nav>
        <Genres
          list={genres}
          selectId={selectGenres}
          onChange={(e) => setSelectGenres(Number(e.target.value))}
        />
      </S.Nav>

      <S.List>
        <MovieList list={movieList} width={250} />
      </S.List>
    </S.Container>
  );
}
