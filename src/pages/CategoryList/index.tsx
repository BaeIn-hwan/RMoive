import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./styled";
import * as T from "./types";

import apiRequest from "@/apis";

// import Genres from "@/components/Geners";
import MovieCard from "@/components/MovieCard";
import MovieSearch from "@/components/MovieSerach";

export default function CategoryList() {
  const { type } = useParams<{
    type?: "movie" | "tv";
  }>();
  // const [genres, setGenres] = useState([]);
  const [list, setList] = useState<T.TList[] | []>([]);
  // const [selectGenres, setSelectGenres] = useState<number>(0);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  // const getGenres = async () => {
  //   try {
  //     const response = await apiRequest(`/genre/${type}/list`, {
  //       method: "get",
  //       params: {
  //         language: "ko-kr",
  //       },
  //     });

  //     if (
  //       response &&
  //       response.data &&
  //       response.data.genres &&
  //       response.data.genres.length
  //     ) {
  //       setGenres(response.data.genres);
  //     }
  //   } catch (error) {
  //     console.error(`GetGenres Error.. ${error}`);
  //   }
  // };

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

  const getCategorySearch = async () => {
    try {
      const response = await apiRequest(`/search/${type}`, {
        method: "get",
        params: {
          language: "ko-kr",
          query: searchKeyword,
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
      console.error(`GetCategorySearch Error.. ${error}`);
    }
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchKeyword.trim() === "") {
      alert("검색어를 입력해주세요");

      return;
    }

    getCategorySearch();
  };

  useEffect(() => {
    // setSelectGenres(0);
    // getGenres();
    getCategoryList();
  }, [type]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>{type === "movie" ? "영화" : "TV 프로그램"} 목록</S.Title>

        <MovieSearch
          value={searchKeyword}
          setValue={setSearchKeyword}
          onSubmit={onSearch}
        />
      </S.Header>

      {/* <S.Nav>
        <Genres
          list={genres}
          selectId={selectGenres}
          onChange={(e) => setSelectGenres(Number(e.target.value))}
        />
      </S.Nav> */}

      <S.List>
        {list.map((item) => {
          return (
            <S.Item key={item.id}>
              <MovieCard type={type} item={item} />
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
}
