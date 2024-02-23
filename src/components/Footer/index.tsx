import * as S from "./styled";

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to={"/"}>고객센터</S.MenuLink>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLink to={"/"}>이용약관</S.MenuLink>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLink to={"/"}>개인정보 처리방침</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>

        <S.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </S.Content>

        <S.Copyright>Copyright © NAME All right reserved.</S.Copyright>
      </S.Container>
    </S.Footer>
  );
}
