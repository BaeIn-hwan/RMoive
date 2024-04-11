import { useEffect, useRef } from "react";

import * as S from "./styled";
import Search from "./Search";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const stickyHeader = () => {
    const target = headerRef.current!;

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      target.classList.add("active");
    } else {
      target.classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <S.Header ref={headerRef}>
      <S.Container>
        <S.Logo>
          <S.LogoLink to="/">MOVIE</S.LogoLink>
        </S.Logo>

        <Search />
      </S.Container>
    </S.Header>
  );
}
