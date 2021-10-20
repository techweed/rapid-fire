import React from "react";
import { InputWrapper } from "./TextInput.styles";

type Props = {
  value: string;
  placeholder: string;
  onChange: (val: string) => void;
};

const TextInput: React.FC<Props> = ({ value, placeholder, onChange }) => (
  <InputWrapper value={value}>
    <input
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
    />
  </InputWrapper>
);

export default TextInput;
