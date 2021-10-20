import React from "react";
import { InputWrapper } from "./TextInput.styles";

type Props = {
  value: string;
  answerStatus: string;
  placeholder: string;
  onChange: (val: string) => void;
};

const TextInput: React.FC<Props> = ({
  value,
  answerStatus,
  placeholder,
  onChange,
}) => (
  <InputWrapper answerStatus={answerStatus}>
    <input
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
    />
    {answerStatus && <span>{answerStatus}</span>}
  </InputWrapper>
);

export default TextInput;
