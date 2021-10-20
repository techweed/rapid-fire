import React from "react";
import { InputWrapper } from "./TextInput.styles";

type Props = {
  value: string;
  error: boolean;
  placeholder: string;
  onChange: (val: string) => void;
};

const TextInput: React.FC<Props> = ({
  value,
  error,
  placeholder,
  onChange,
}) => (
  <InputWrapper error={error}>
    <input
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
    />
  </InputWrapper>
);

export default TextInput;
