import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./styled";

import apiRequest from "@/apis";

import Genres from "@/components/Geners";
import MovieList from "@/components/MovieList";

export default function CategoryList() {
  const { type } = useParams();
  const [genres, setGenres] = useState([]);
  const [list, setList] = useState([]);
  const [selectGenres, setSelectGenres] = useState<number>(0);

  const getGenres = async () => {
    try {
      const response = await apiRequest(`/genre/${type}/list`, {
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

  const getCategoryList = async () => {
    try {
      const response = await apiRequest(`/discover/${type}`, {
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
        setList(response.data.results);
      }
    } catch (error) {
      console.error(`GetCategoryList Error.. ${error}`);
    }
  };

  useEffect(() => {
    setSelectGenres(0);
    getGenres();
    getCategoryList();
  }, [type]);

  return (
    <S.Container>
      <S.Title>{type === "movie" ? "영화" : "프로그램"} 목록</S.Title>

      <S.Nav>
        <Genres
          list={genres}
          selectId={selectGenres}
          onChange={(e) => setSelectGenres(Number(e.target.value))}
        />
      </S.Nav>

      <S.List>
        <MovieList list={list} width={250} />
      </S.List>
    </S.Container>
  );
}
