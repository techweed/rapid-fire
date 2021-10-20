import React from "react";
import { ButtonWrapper } from "./Button.styles";

type Props = {
  content: string;
  name: string;
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  className: string;
};

const Button: React.FC<Props> = ({
  content,
  name,
  click,
  disabled,
  className,
}) => (
  <ButtonWrapper disabled={disabled}>
    <button
      disabled={disabled}
      onClick={click}
      className={className}
      name={name}
    >
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </button>
  </ButtonWrapper>
);

export default Button;
