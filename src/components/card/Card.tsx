import React from "react";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
import { Wrapper } from "./Card.styles";

type Props = {
  question: string;
  incorrectAnswer: boolean;
  submit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  skip: () => void;
  stop: () => void;
  userAnswer: string;
  questionNumber: number;
  onInputChange: (val: string) => void;
};

const Card: React.FC<Props> = ({
  question,
  incorrectAnswer,
  submit,
  skip,
  stop,
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
        error={incorrectAnswer}
        placeholder="Enter your answer"
        onChange={onInputChange}
      />
      <Button
        content="Submit"
        name="submit"
        click={submit}
        disabled={userAnswer.trim().length === 0}
        className=""
      />
    </Wrapper>
    <Button
      content="Skip"
      name="skip"
      click={skip}
      disabled={false}
      className="bottomLeftButton"
    />

    <Button
      content="Stop"
      name="stop"
      click={stop}
      disabled={false}
      className="bottomRightButton"
    />
  </>
);

export default Card;
