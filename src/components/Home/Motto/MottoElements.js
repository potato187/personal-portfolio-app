import { Container } from "components/styled";
import styled from "styled-components";

export const MottoSection = styled.section`
  margin: 5rem 0;
  height: 35vh;
  background: #fff url("/images/motto-background.jpg") bottom/cover;
  position: relative;
  z-index: 1;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }
`;
export const MottoContainer = styled(Container)`
  height: 100%;
  display: flex;
`;
export const QuoteWrapper = styled.div`
  margin: auto;
  max-width: 50rem;
  text-align: center;
`;

export const Quote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSize.super};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem;
  position: relative;

  ::before,
  ::after {
    position: absolute;
    font-size: 15rem;
    width: 5rem;
    height: 5rem;
    font-family: sans-serif;
  }

  ::before {
    content: open-quote;
    top: -3.5rem;
    left: -3rem;
  }

  ::after {
    content: close-quote;
    right: -3rem;
    bottom: -2.5rem;
  }

  @media screen and (max-width: 768px) {
    ::before,
    ::after {
      font-size: 8rem;
    }
  }
`;

export const QuoteBy = styled.cite`
  display: block;
  text-align: right;
  margin-top: 2rem;
`;
