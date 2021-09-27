import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(2, auto);
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin: 2rem 0;
  color: #c4c5ac;
  grid-column: 2/3;
`;

export const LinkLogin = styled.div``;

export const SectionCity = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  grid-column: 1/4;
  grid-row: 2/3;
`;
