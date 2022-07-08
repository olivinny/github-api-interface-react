import React, { useState } from "react";
import * as S from "./styled";
import GithubHook from "../../Hooks/githubHook";
function Header() {
  const { getUser } = GithubHook();
  const [usernameForSearch, setUsernameForSearch] = useState();
  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };
  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite o Username para pesquisa..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
      <button onClick={submitGetUser}>Buscar</button>
    </S.Wrapper>
  );
}

export default Header;
