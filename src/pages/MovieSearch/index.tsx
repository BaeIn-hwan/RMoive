import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "@/apis";
import Pagination from "@/components/Pagination";

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
    <div>
      {data.results.map((item) => (
        <div key={item.id}>
          {/* <figure>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}w200${item.poster_path}`}
              alt=""
            />
          </figure> */}
          {item.title}
          {/* {JSON.stringify(item)} */}
        </div>
      ))}

      {data.results && data.results.length && (
        <Pagination
          current={pagination.page}
          total={pagination.total}
          range={5}
          perView={20}
          onChange={onPagination}
        />
      )}
    </div>
  );
}
