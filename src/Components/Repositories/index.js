import React from "react";
import RepositorieItem from "../Repositorie-Item/Repositorie-Item";
import * as S from "./styled";

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositorieItem
          name="bikcraft"
          linkToRepo="https://github.com/olivinny/bikcraft"
          fullName="olivinny/bikcraft"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositorieItem
          name="bikcraft"
          linkToRepo="https://github.com/olivinny/bikcraft"
          fullName="olivinny/bikcraft"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
}

export default Repositories;
