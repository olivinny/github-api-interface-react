import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  input {
    border: 1px solid #ccc;
    border-radius: 16px;
    width: 100%;
    height: 4;
    margin: 8px;
    height: 24px;
    text-indent: 1.1%;
    line-height: 2;
  }

  input:focus {
    outline: none;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  }

  button {
    background-color: lightblue;
    padding: 4px 12px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    transition: 300ms;

    &:hover {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
      background-color: rgb(40, 160, 200);
      color: white;
      transition: 300ms;
    }
  }
`;
