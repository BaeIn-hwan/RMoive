import { useEffect, useState } from "react";
import * as S from "./styled";

export default function Search() {
  const [open, setOpen] = useState(false);

  const [word, setWord] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const [recent, setRecent] = useState<string[] | []>([]);

  const onSearchOpen = () => {
    setOpen(true);
  };

  const onSearchClose = () => {
    if (!open) return;

    if (word && word.length) setWord("");

    setOpen(false);
    setSearchFocus(false);
  };

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      const copyRecent = [...recent];
      copyRecent.unshift(word);
      const splitList = [...new Set([...copyRecent])].slice(0, 10);

      setRecent(splitList);
      window.localStorage.setItem("recent", JSON.stringify(splitList));
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("recent")) {
      setRecent(JSON.parse(window.localStorage.getItem("recent")!));
    }
  }, []);

  return (
    <S.Search className={open ? "on" : ""} onMouseLeave={onSearchClose}>
      <S.SearchContainer>
        <S.SearchIcon onClick={onSearchOpen}>
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
        </S.SearchIcon>
        <S.SearchInput
          placeholder="검색어를 입력해주세요"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyUp={onSubmit}
          onFocus={() => setSearchFocus(true)}
        />
      </S.SearchContainer>

      {searchFocus && (
        <S.Recent>
          <S.RecentList>
            {recent.map((item, i) => (
              <S.RecentItem key={i}>
                {i !== 9 ? `0${i + 1}` : i + 1}. {item}
              </S.RecentItem>
            ))}
          </S.RecentList>
        </S.Recent>
      )}
    </S.Search>
  );
}
