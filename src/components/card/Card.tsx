import React from "react";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
import { Wrapper } from "./Card.styles";

type Props = {
  question: string;
  submit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: string;
  questionNumber: number;
  onInputChange: (val: string) => void;
};

const Card: React.FC<Props> = ({
  question,
  submit,
  userAnswer,
  questionNumber,
  onInputChange,
}) => (
  <>
    <Wrapper>
      <p className="number">Question: {questionNumber}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <TextInput
        value={userAnswer}
        placeholder="Enter your answer"
        onChange={onInputChange}
      />
    </Wrapper>
    <Button
      content="Submit"
      click={submit}
      disabled={userAnswer.trim().length === 0}
      className="bottomRightButton"
    />
  </>
);

export default Card;
