import * as S from "./styled";
interface IPropsGeners {
  list: { id: string; name: string }[];
  selectId: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Genres(props: IPropsGeners) {
  const { list, selectId, onChange } = props;

  return (
    <S.GenersList>
      {list.map((item) => {
        return (
          <S.GenersItem key={item.id}>
            <input
              type="radio"
              value={item.id}
              checked={String(selectId) === String(item.id)}
              onChange={onChange}
            />
            <S.GenersText>{item.name}</S.GenersText>
          </S.GenersItem>
        );
      })}
    </S.GenersList>
  );
}
