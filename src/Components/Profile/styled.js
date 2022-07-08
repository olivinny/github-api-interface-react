import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    align-items: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  a {
    margin-left: 8px;
    color: blueviolet;
    font-weight: bold;
  }
  span {
    margin-left: 8px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 25vh;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 25vh;
  margin: 8px;
`;
