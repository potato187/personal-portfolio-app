import { CustomButton, Grid, GridItem } from "components/styled";
import styled from "styled-components";

export const PortfolioGrid = styled(Grid)``;
export const PortfolioItem = styled(GridItem)`
  min-height: 35rem;
  position: relative;
  overflow: hidden;
`;
export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProjectName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.super};
  letter-spacing: 1px;
  margin: 0 0 1rem 0;
  transform: translateY(-2rem);
  transition: transform 0.5s;

  & span {
    font-size: ${({ theme }) => theme.fontSize.xSmall};
    font-weight: 300;
    opacity: 0.5;
    margin: 0 0 0 1rem;
  }
`;

export const ProjectType = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  opacity: 0.5;
  transform: translateY(2rem);
  transition: transform 0.5s;
`;
export const Project = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.5s linear;

  :hover {
    transition: opacity 0.5s linear;
    opacity: 1;
  }

  :hover ${ProjectName}, :hover ${ProjectType} {
    transform: translateY(0);
  }
`;

export const Buttons = styled.div`
  margin-top: auto;
  & ${CustomButton}:first-child {
    margin: 0 0.5rem 0.5rem 0;
  }
`;
export const LoadMore = styled.div`
  margin-top: 2.5rem;
`;
