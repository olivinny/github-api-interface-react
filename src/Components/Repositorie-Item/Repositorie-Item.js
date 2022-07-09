import React from "react";
import * as S from "./styled";

function RepositorieItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <h4>Full Name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </S.Wrapper>
  );
}

export default RepositorieItem;
