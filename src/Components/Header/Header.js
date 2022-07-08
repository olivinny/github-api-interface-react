import React from "react";
import * as S from "./styled";

function Header() {
  return (
    <S.Wrapper>
      <input type="text" placeholder="Digite o Username para pesquisa." />
      <button>Buscar</button>
    </S.Wrapper>
  );
}

export default Header;
