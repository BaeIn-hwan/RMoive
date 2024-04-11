import { useEffect, useMemo, useState } from "react";
import * as S from "./styled";
import * as T from "./types";

export default function Pagination(props: T.IPropsPagination) {
  const { current, total, range, perView, onChange } = props;
  const [list, setList] = useState<number[] | []>([]);

  const showPerPage = useMemo(() => {
    const _length = Math.ceil(total / perView);

    const pagePerViewMiddle = Math.ceil(range / 2);

    const pageSize = Math.min(
      Math.max(0, current - pagePerViewMiddle),
      _length - range
    );

    return list.slice(Math.max(0, pageSize), range + pageSize);
  }, [list, current]);

  const onPageMove = (num: number) => {
    onChange(num);
  };

  const init = () => {
    const setArray = [];
    const _length = Math.ceil(total / perView);

    for (let i = 0; i < _length; i++) {
      setArray.push(i + 1);
    }

    setList(setArray);
  };

  useEffect(() => {
    init();
  }, [props]);

  if (total === 0) return null;

  return (
    <S.Pagination>
      <S.PaginationFirst disabled={current === 1} onClick={() => onPageMove(1)}>
        <span className="blind">처음 이동</span>
      </S.PaginationFirst>
      <S.PaginationPrev
        disabled={current === 1}
        onClick={() => onPageMove(Math.max(1, current - 1))}
      >
        <span className="blind">이전 이동</span>
      </S.PaginationPrev>

      <S.PaginationList>
        {showPerPage.map((item) => (
          <S.PaginationItem key={item}>
            <S.PaginationNumber
              className={current === item ? "is-active" : ""}
              onClick={() => onPageMove(item)}
            >
              {item}
            </S.PaginationNumber>
          </S.PaginationItem>
        ))}
      </S.PaginationList>

      <S.PaginationNext
        disabled={current === list.length}
        onClick={() => onPageMove(Math.min(current + 1, list.length))}
      >
        <span className="blind">다음 이동</span>
      </S.PaginationNext>
      <S.PaginationLast
        disabled={list.length === current}
        onClick={() => onPageMove(list.length)}
      >
        <span className="blind">마지막 이동</span>
      </S.PaginationLast>
    </S.Pagination>
  );
}
