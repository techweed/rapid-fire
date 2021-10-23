import styled from "styled-components";

type FireWrapperProps = {};

export const FireWrapper = styled.div<FireWrapperProps>`
  .padded {
    margin: 0px;
    padding: 0px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }
  #canvas {
    width: 100vw;
    height: calc(100vh - 0px);
    @media (min-width: 768px) {
      height: calc(100vh - 0px);
    }
  }
  #favcolor {
    position: absolute;
    top: 80%;
    left: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    z-index: 2;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }
`;
