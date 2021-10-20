import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  height: 300px;
  @media (min-width: 768px) {
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
  }
  p {
    font-size: 1rem;
  }
  .number {
    font-family: "Press Start 2p", cursive;
  }
`;
