import * as S from "./styled";
import * as T from "./types";

export default function MovieSearch(props: T.IPropsMovieSearch) {
  const { value, setValue, onSubmit } = props;

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Fieldset>
        <legend>검색</legend>

        <S.Input
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <S.Button type="submit">
          <span className="blind">검색</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </S.Button>
      </S.Fieldset>
    </S.Form>
  );
}
