import * as S from "./styled";

export default function MovieCard(props) {
  const { type, item } = props;

  return (
    <S.MovieCardLink to={`/${type}/${item.id}`}>
      <S.MovieCardImage>
        <S.MovieCardThumb
          src={`${import.meta.env.VITE_IMAGE_URL}w300${item.poster_path})`}
          alt=""
        />
      </S.MovieCardImage>

      <S.MovieCardInfo>
        <S.MovieCardTitle>{item.title || item.name}</S.MovieCardTitle>
      </S.MovieCardInfo>
    </S.MovieCardLink>
  );
}
