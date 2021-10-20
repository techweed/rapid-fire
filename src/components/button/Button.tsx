import React from "react";
import { ButtonWrapper } from "./Button.styles";

type Props = {
  content: string;
  name: string;
  icon: any;
  click: () => void;
  disabled: boolean;
  className: string;
};

const Button: React.FC<Props> = ({
  content,
  name,
  icon,
  click,
  disabled,
  className,
}) => (
  <ButtonWrapper disabled={disabled} icon={icon}>
    <button
      disabled={disabled}
      onClick={click}
      className={className}
      name={name}
    >
      {icon ? <img className="icon" src={icon} alt={name} /> : null}

      <span className="text" dangerouslySetInnerHTML={{ __html: content }} />
    </button>
  </ButtonWrapper>
);

export default Button;
