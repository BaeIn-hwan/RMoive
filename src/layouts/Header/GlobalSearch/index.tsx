import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";
import * as S from "./styled";

function GlobalSearch() {
  const searchInputEl = useRef<HTMLInputElement | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [recentList, setRecentList] = useLocalStorage<string[] | [] | null>(
    "recent"
  );

  const navigate = useNavigate();

  const onSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchKeyword(value);
  };

  const onDeleteRecent = (index: number) => {
    if (!(recentList && recentList.length)) return;

    const copyRecent = [...recentList];
    copyRecent.splice(index, 1);
    setRecentList(copyRecent);
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const inputEl = searchInputEl.current as HTMLInputElement;
    e.preventDefault();

    if (searchKeyword === "") {
      inputEl.focus();
      alert("검색어를 입력해주세요.");

      return;
    }

    const copyRecent = recentList && recentList.length ? [...recentList] : [];
    copyRecent.unshift(searchKeyword);
    const splitList = [...new Set([...copyRecent])].slice(0, 10);

    setRecentList(splitList);
    setSearchKeyword("");
    navigate(`search?keyword=${searchKeyword}`);
    inputEl.blur();
  };

  return (
    <S.Search>
      <S.SearchForm onSubmit={onSearchSubmit}>
        <fieldset>
          <legend>전체검색</legend>

          <S.SearchInputWrapper>
            <S.SearchInput
              ref={searchInputEl}
              type="text"
              placeholder="검색어를 입력해주세요"
              value={searchKeyword}
              onChange={onSearchKeyword}
            />
            <S.SearchButton type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </S.SearchButton>
          </S.SearchInputWrapper>

          <S.SearchRecent>
            {recentList && recentList.length ? (
              <S.SearchRecentList>
                {recentList.map((item, index) => (
                  <S.SearchRecentItem key={index}>
                    <S.SearchRecentItemText>{item}</S.SearchRecentItemText>
                    <S.SearchRecentItemDelete
                      onClick={() => onDeleteRecent(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </S.SearchRecentItemDelete>
                  </S.SearchRecentItem>
                ))}
              </S.SearchRecentList>
            ) : (
              <S.SearchRecentEmpty>최근 검색어가 없습니다.</S.SearchRecentEmpty>
            )}
          </S.SearchRecent>
        </fieldset>
      </S.SearchForm>
    </S.Search>
  );
}

export default GlobalSearch;
