import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "@/apis";
import Pagination from "@/components/Pagination";
import * as S from "./styled";

import NoImage from "@/assets/no-image.png";

const getSearchList = async ({
  page,
  query,
}: {
  page: number;
  query: string | null;
}) => {
  try {
    const response = await apiRequest(`/search/movie`, {
      method: "get",
      params: {
        query: query,
        include_adult: true,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`GetSearchList Error.. ${error}`);
    return error;
  }
};

export default function MovieSearch() {
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["myData", pagination.page, searchParams.get("keyword")],
    queryFn: () =>
      getSearchList({
        page: pagination.page,
        query: searchParams.get("keyword"),
      }),
  });

  const onPagination = (num: number) => {
    const copyPagination = { ...pagination };

    copyPagination.page = num;

    setPagination(copyPagination);
  };

  useEffect(() => {
    if (data) {
      const copyPagination = { ...pagination };

      copyPagination.total = data.total_results;

      setPagination(copyPagination);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.Container>
      {data.results && data.results.length ? (
        <S.MovieList>
          {data.results.map((item) => (
            <S.MovieItem key={item.id}>
              <S.MovieLink to={`/movie/detail/${item.id}`}>
                <S.MovieThumb>
                  <img
                    src={
                      item.poster_path
                        ? `${import.meta.env.VITE_IMAGE_URL}w300${
                            item.poster_path
                          }`
                        : NoImage
                    }
                    alt=""
                  />
                </S.MovieThumb>

                <S.MovieTitle>{item.title}</S.MovieTitle>
              </S.MovieLink>
            </S.MovieItem>
          ))}
        </S.MovieList>
      ) : (
        <S.EmptyContent>
          <em>"{searchParams.get("keyword")}"</em>에 대한 검색어가 없습니다.
        </S.EmptyContent>
      )}

      {data.results && data.results.length > 0 && (
        <Pagination
          current={pagination.page}
          total={pagination.total}
          range={5}
          perView={20}
          onChange={onPagination}
        />
      )}
    </S.Container>
  );
}
