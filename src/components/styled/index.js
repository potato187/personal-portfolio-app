import styled, { css } from "styled-components";
import { Link as linkRoute } from "react-router-dom";

export const Main = styled.main`
  width: calc(100% - 26rem);
  transform: translateX(26rem);

  @media screen and (max-width: 1030px) {
    width: 100%;
    transform: initial;
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Text = styled.p`
  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const HightLight = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 1px;
`;

export const CustomButton = styled(linkRoute)`
  display: inline-block;
  padding: ${({ size }) => (size ? "1rem 5rem" : "1rem 3rem")};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.3s ease-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    transition: all 0.3s ease-out;
  }
  ${({ primary, theme }) =>
    primary &&
    css`
      color: ${theme.colors.dark};
      border: 1px solid ${theme.colors.dark};
      background-color: transparent;
      :hover {
        color: ${theme.colors.light};
        background-color: ${theme.colors.dark};
        transition: all 0.3s ease-out;
      }
    `};

  ${({ outline, theme }) =>
    outline &&
    css`
      color: ${theme.colors.light};
      border: 1px solid ${theme.colors.light};
      background-color: transparent;
      :hover {
        color: ${theme.colors.dark};
        background-color: rgba(255, 255, 255, 0.7);
        border-color: transparent;
        transition: all 0.3s ease-out;
      }
    `};
`;

export const HeadingGroup = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 5rem;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const SubHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

export const Section = styled.section`
  margin: 5rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: 2.5rem;
`;

export const GridItem = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid ${({ color, theme }) => theme.colors[color]};
  position: relative;
  padding: 2rem;
  & svg {
    fill: ${({ color, theme }) => theme.colors[color]};
  }
`;

export const ItemIcon = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const ItemHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.super};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  ${({ highLight, theme, color }) =>
    highLight &&
    css`
      width: calc(100% + 1rem);
      height: 5rem;
      position: absolute;
      top: 1rem;
      left: -1rem;
      background-color: ${theme.colors[color]};
      margin-bottom: 0;
      color: ${theme.colors.light};
      text-align: center;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border: 1rem solid transparent;
        border-right-color: ${theme.colors[color]};
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    `}
`;
export const ItemImage = styled.img``;

export const ItemDescription = styled.p`
  margin-top: 5rem;
  padding: 3rem;
  line-height: 2;
`;
