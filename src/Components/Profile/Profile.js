import React from "react";
import GithubHook from "../../Hooks/githubHook";
import * as S from "./styled";

function Profile() {
  const { githubState } = GithubHook();

  return (
    <S.Wrapper>
      <S.WrapperImg
        src="https://avatars.githubusercontent.com/u/106111448?v=4"
        alt="Profile"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a
              href="https://github.com/olivinny"
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
