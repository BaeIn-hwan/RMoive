import MovieSlider from "@/components/MovieSlider";
import MovieCard from "@/components/MovieCard";

import * as T from "../types";

interface IPropsContentMovie {
  list: T.TPopularMovie[];
}

export default function ContentMovie(props: IPropsContentMovie) {
  const { list } = props;

  return (
    <MovieSlider options={{ slidesPerView: 5.5, spaceBetween: 16 }}>
      {list.map((item) => {
        return (
          <MovieSlider.Item key={item.id}>
            <MovieCard type="movie" item={item} />
          </MovieSlider.Item>
        );
      })}
    </MovieSlider>
  );
}
