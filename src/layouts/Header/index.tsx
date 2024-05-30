import { useEffect, useRef } from "react";

import * as S from "./styled";
import Search from "./GlobalSearch";

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const stickyHeader = () => {
    const target = headerRef.current!;

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      target.classList.add("sticky");
    } else {
      target.classList.remove("sticky");
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
          <S.LogoLink to="/">
            <img src={require("@/assets/images/logo.png")} alt="" />
          </S.LogoLink>
        </S.Logo>

        <Search />
      </S.Container>
    </S.Header>
  );
}

export default Header;
