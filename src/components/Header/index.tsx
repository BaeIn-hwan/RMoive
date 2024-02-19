import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styled";

const gnbList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/movie",
  },
  {
    title: "TV Series",
    path: "/tv",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const { pathname } = useLocation();

  const active = gnbList.findIndex((e) => e.path === pathname);

  const stickyHeader = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      headerRef.current!.classList.add("active");
    } else {
      headerRef.current!.classList.remove("active");
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
      <S.Logo>
        <S.LogoLink to="/">Logo</S.LogoLink>
      </S.Logo>

      <S.Gnb>
        <h2 className="blind">GNB</h2>

        <S.GnbList>
          {gnbList.map((item, index) => (
            <S.GnbItem
              key={index}
              className={`${index === active ? "active" : ""}`}
            >
              <S.GnbLink to={item.path}>{item.title}</S.GnbLink>
            </S.GnbItem>
          ))}
        </S.GnbList>
      </S.Gnb>
    </S.Header>
  );
}
