import styled from "styled-components";

type ButtonWrapperProps = {
  disabled: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    font-family: "Press Start 2p", cursive;
    width: 160px;
    height: 60px;
    margin: 5px 0;
    background: ${({ disabled }) =>
      !disabled ? "linear-gradient(90deg, #56FFA4, #59BC86)" : " grey"};
    border: 3px solid #ffffff;
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
  .bottomRightButton {
    position: absolute;
    bottom: 20px;
    right: 25px;
  }
  .centerButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
