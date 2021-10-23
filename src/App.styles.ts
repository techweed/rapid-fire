import styled, { createGlobalStyle } from "styled-components";

type GlobalProps = {
  darkMode: boolean;
};

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  html {
    height: 100%;
  }
  body {
    background-size: cover;
    margin: 0;
    padding: 0px;
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
    background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: black;
  }
  h1 {
    font-family: "Press Start 2p", cursive;
    background-image: linear-gradient(90deg, #56ffa4, #59bc86);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 50px;
    text-align: center;
    margin: 40px 0px;
    z-index: 1;
    min-width: 100%;
    img {
      padding-right: 5%;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  #favcolor {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    z-index: 2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
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
