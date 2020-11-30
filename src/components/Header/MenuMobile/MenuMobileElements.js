import styled, { css } from "styled-components";

export const Menu = styled.div`
  @media screen and (max-width: 1030px) {
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: fixed;
    top: 1rem;
    right: 4rem;
    z-index: 999;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s;
    ${({ active }) =>
      active &&
      css`
        transform: rotate(45deg);
        & span {
          ::before,
          ::after {
            transform: rotate(90deg);
          }
        }
        :hover {
          transform: rotate(225deg);
        }
      `}
  }
`;

export const Bars = styled.span`
  @media screen and (max-width: 1030px) {
    position: relative;
    display: block;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.dark};

    ::before,
    ::after {
      content: "";
      left: 0;
      position: absolute;
      width: 100%;
      height: inherit;
      background-color: inherit;
      border-radius: inherit;
      transition: transform 0.3s;
    }

    ::before {
      transform: translateY(-1rem);
    }
    ::after {
      transform: translateY(1rem);
    }
  }
`;
