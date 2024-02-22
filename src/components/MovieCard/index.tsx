import * as S from "./styled";
import * as T from "./types";

export default function MovieItem(props: T.IPropsItem) {
  const { type, item } = props;

  return (
    <S.CardLink to={`/${type}/${item.id}`}>
      <S.CardImage>
        <S.CardThumb
          src={`${import.meta.env.VITE_IMAGE_URL}original${item.poster_path})`}
          alt=""
        />
      </S.CardImage>

      <S.CardInfo>
        <S.CardTitle>{item.title || item.name}</S.CardTitle>
      </S.CardInfo>
    </S.CardLink>
  );
}
