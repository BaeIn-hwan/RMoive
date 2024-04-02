import * as S from "./styled";

import LazyImage from "@/components/LazyImage";

export default function Cast(props) {
  const { list } = props;

  if (!(list && list.length)) return;

  return (
    <S.Container>
      <S.List>
        {list.map((item, i) => {
          return (
            <S.Item key={i}>
              <S.ThumbNail>
                <LazyImage
                  src={`${import.meta.env.VITE_IMAGE_URL}w300${
                    item.profile_path
                  }`}
                  alt=""
                />
              </S.ThumbNail>
              <S.Info>
                <S.Character>{item.character}</S.Character>
                <S.Name>{item.name}</S.Name>
              </S.Info>
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
}
