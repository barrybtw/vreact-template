import styled from "styled-components";

const Home_Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 64px);
  display: grid;
  place-items: center;

  font-family: Hokusai;
  letter-spacing: 12px;
  text-align: center;
  font-size: 6rem;

  @media screen and (max-width: 1600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1345px) {
    font-size: 4rem;
  }
`;

export const Home = () => {
  return <Home_Section>Welcome to the dungeon</Home_Section>;
};
