import React from "react";
import { ButtonWrapper } from "./Button.styles";

type Props = {
  content: string;
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  className: string;
};

const Button: React.FC<Props> = ({ content, click, disabled, className }) => (
  <ButtonWrapper disabled={disabled}>
    <button disabled={disabled} onClick={click} className={className}>
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </button>
  </ButtonWrapper>
);

export default Button;
