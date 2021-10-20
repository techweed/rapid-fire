import styled from "styled-components";

type InputWrapperProps = {
  answerStatus: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  input {
    border: ${({ answerStatus }) =>
      answerStatus === "Correct"
        ? "0.5px solid green"
        : answerStatus === "Incorrect"
        ? "0.5px solid red"
        : " 0.5px solid grey"};
    border-radius: 5px;
    overflow: hidden;
    width: 90%;
    height: 40px;
    padding: 5px;
    margin: 30px 0px;
    outline: none;
  }
  span {
    color: ${({ answerStatus }) =>
      answerStatus === "Correct" ? "green" : "red"};
  }
`;
