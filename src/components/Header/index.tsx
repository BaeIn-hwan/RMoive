import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styled";

const gnbList = [
  {
    title: "Movie",
    path: "/movie",
  },
  {
    title: "TV",
    path: "/tv",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const { pathname } = useLocation();

  const active = gnbList.findIndex((e) => e.path === pathname);

  const stickyHeader = () => {
    const target = headerRef.current!;
    const headerHeight = target.clientHeight;

    if (
      document.body.scrollTop > headerHeight ||
      document.documentElement.scrollTop > headerHeight
    ) {
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
      <S.Logo>
        <S.LogoLink to="/">LOGO</S.LogoLink>
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
