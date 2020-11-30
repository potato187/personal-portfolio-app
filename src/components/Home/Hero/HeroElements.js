import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  background: url(${({ url }) => url}) bottom center/cover;
  display: flex;
  justify-content: center;
  position: relative;

  ::before {
    content: attr(data-name);
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18vw;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.light};
    z-index: 1;
  }

  @media screen and (max-width: 1030px) {
    height: 80vh;
  }

  @media screen and (max-width: 768px) {
    height: 60vh;
  }

  @media screen and (max-width: 480px) {
    height: 48rem;
  }
`;

export const HeroBanner = styled.img`
  display: block;
  max-width: 95%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  margin-top: auto;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1030px) {
    max-width: 100%;
  }
`;

const moveWheel = keyframes`
  0%{
    opacity: 1;
    transform: translate(-50%, 0rem);
  }
  100%{
    opacity: 0;
    transform: translate(-50%, 3rem);
  }
`;

const arrowDown = keyframes`
  0% {
    opacity: 1;
  }
  25%{
    opacity: 0.25;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  }
  100%{
    opacity: 1;
  }
`;

export const ScrollDown = styled.a`
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  z-index: 5;
  height: 5rem;
  width: 2.5rem;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.light};
  ::before {
    content: "";
    display: blok;
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    opacity: 1;
    transform: translate(-50%, 2px);
    background-color: ${({ theme }) => theme.colors.light};
    animation: ${moveWheel} 1s linear infinite forwards;
  }

  ::after {
    display: block;
    content: "";
    position: absolute;
    left: 50%;
    bottom: -1rem;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 0 0.8rem 0.8rem 0;
    transform: rotate(-45deg) translate(-45%, -25%);
    margin: 0 auto;
    animation: ${arrowDown} 1s linear infinite forwards;
  }
`;
