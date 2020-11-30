import styled from "styled-components";

export const AboutHire = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 5rem;
  padding: 3rem;

  p {
    font-size: 2.4rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
`;
