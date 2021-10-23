import styled, { createGlobalStyle } from "styled-components";

type GlobalProps = {
  darkMode: boolean;
};

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  body {
    background-size: cover;
    margin: 0px;
    padding: 0px;
    font-family: 'Catamaran', sans-serif;
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
    width: 100%;
    img {
      :hover {
        opacity: 0.5;
      }
      padding-right: 5%;
      opacity: 0.1;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
