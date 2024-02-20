import MovieCard from "@/components/MovieCard";
import * as S from "./styled";

export default function MovieList(props: { width?: number; list: any[] }) {
  const { list, width = 300 } = props;

  return (
    <S.MoiveList>
      {list.map((item) => {
        return (
          <S.MovieItem key={item.id} $width={width}>
            <MovieCard item={item} />
          </S.MovieItem>
        );
      })}
    </S.MoiveList>
  );
}
