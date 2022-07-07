import React from "react";
import * as S from "./styled";

function Profile() {
  return (
    <S.Wrapper>
      <S.WrapperImg
        src="https://avatars.githubusercontent.com/u/106111448?v=4"
        alt="Profile"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Vinicius Oliveira</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a
              href="https://github.com/olivinny"
              target="_blank"
              rel="noreferrer"
            >
              olivinny
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
            <h4>Starreds</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
