import styled from "styled-components";

type ButtonWrapperProps = {
  disabled: boolean;
  icon: any;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  z-index: 1;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    font-family: "Press Start 2p", cursive;
    width: auto;
    height: 55px;
    margin: 5px 0;
    z-index: 1;
    background: ${({ disabled }) =>
      !disabled ? "linear-gradient(90deg, #56FFA4, #59BC86)" : " grey"};
    border: 3px solid #ffffff;
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    .icon {
      display: inline;
      @media (min-width: 768px) {
        display: none;
      }
    }
    .text {
      display: ${({ icon }) => (icon ? "none" : "inline")};
      @media (min-width: 768px) {
        display: inline;
      }
    }
    @media (min-width: 768px) {
      width: 160px;
      height: 60px;
    }
  }
  .bottomRightButton {
    position: absolute;
    bottom: 20px;
    right: 25px;
    background: rgba(225, 80, 66, 1);
  }
  .bottomLeftButton {
    position: absolute;
    bottom: 20px;
    left: 25px;
    background: rgba(245, 180, 30, 1);
  }
  .centerButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
