import React from "react";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
import { Wrapper } from "./Card.styles";
import iconClose from "../../assets/icons/close.svg";
import iconSkip from "../../assets/icons/skip.svg";

type Props = {
  question: string;
  answerStatus: string;
  submit: () => void;
  skip: () => void;
  stop: () => void;
  userAnswer: string;
  score: number;
  onInputChange: (val: string) => void;
};

const Card: React.FC<Props> = ({
  question,
  answerStatus,
  submit,
  skip,
  stop,
  userAnswer,
  score,
  onInputChange,
}) => (
  <>
    <Wrapper>
      <p className="number">Score: {score}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <TextInput
        value={userAnswer}
        answerStatus={answerStatus}
        placeholder="Enter your answer"
        onChange={onInputChange}
      />
      <Button
        content="Submit"
        name="submit"
        icon={null}
        click={submit}
        // validation: button will be active only after any text is entered
        disabled={userAnswer.trim().length === 0}
        className=""
      />
    </Wrapper>
    <Button
      content="Skip"
      name="skip"
      icon={iconSkip}
      click={skip}
      disabled={false}
      className="bottomLeftButton"
    />

    <Button
      content="Stop"
      name="stop"
      icon={iconClose}
      click={stop}
      disabled={false}
      className="bottomRightButton"
    />
  </>
);

export default Card;
