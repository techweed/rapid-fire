import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  height: 290px;
  margin-bottom: 0px;
  p {
    font-size: 1rem;
  }
  .number {
    font-family: "Press Start 2p", cursive;
    text-align: right;
    font-size: 10px;
  }
  @media (min-width: 768px) {
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
    margin-bottom: 60px;
  }
`;
