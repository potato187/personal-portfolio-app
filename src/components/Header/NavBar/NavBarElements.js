import styled, { css } from "styled-components";
import { Link as linkRoute } from "react-router-dom";
import { Link as linkScroll } from "react-scroll";

export const Nav = styled.nav`
  width: 26rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: 1030px) {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
        opacity: 1;
      `}
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Intro = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  margin: 5rem 0;
  line-height: 1.5;
`;
export const IntroHeading = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: -2px;
`;

export const IntroSubHeading = styled.h2`
  font-size: 1.4rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-right: -1px;
`;

export const NavList = styled.div``;
export const NavLink = styled(linkScroll)`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1rem;
  margin-right: -1px;

  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  :hover::before {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  :not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const SocialMedia = styled.div`
  margin: auto 0 3rem 0;
  text-align: center;
`;

export const SocialMediaFollow = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialMediaLink = styled(linkRoute)`
  display: block;
  width: 3rem;
  height: 3rem;
  :nth-of-type(2) {
    margin: 0 2rem;
  }
`;

export const SocialMediaIcon = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s linear;
  :hover {
    transform: translateY(-3px);
  }
`;

export const CopyRightNotice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  color: rgb(255, 255, 255, 0.5);
  margin: 0 0 2.5rem 0;
`;
