import styled from "styled-components";

export const TimeLine = styled.div`
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
  }
  ::before {
    top: 50%;
    left: 0;
    width: 0.5rem;
    height: 100%;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.lightGray};
    transform: translate(-50%, -50%);
  }

  ::after {
    bottom: -2.5rem;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.5rem solid ${({ theme }) => theme.colors.lightGray};
    transform: translate(-50%, -50%);
  }
`;
export const TimeLineItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 0 2rem 3rem;
  position: relative;
  padding: 2.2rem;
  ::before {
    content: "";
    top: 1rem;
    left: -3rem;
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: inherit;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1rem solid transparent;
    border-right-color: ${({ theme }) => theme.colors.lightGray};
    transform: translateX(-100%);
  }
`;
export const TimeLineHeading = styled.div`
  margin-bottom: 2rem;
`;
export const Job = styled.h3`
  display: inline-block;
  margin-right: 1rem;
  font-size: ${({ theme }) => theme.fontSize.super};
  font-weight: 400;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
`;
export const Time = styled.span``;
