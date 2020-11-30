import React from "react";
import {
  Nav,
  NavWrapper,
  Intro,
  IntroHeading,
  IntroSubHeading,
  NavList,
  NavLink,
  SocialMedia,
  SocialMediaFollow,
  SocialMedias,
  SocialMediaLink,
  SocialMediaIcon,
  CopyRightNotice,
} from "./NavBarElements";

function NavBar({ isOpen }) {
  return (
    <>
      <Nav isOpen={isOpen}>
        <NavWrapper>
          <Intro>
            <IntroHeading>Michael G.</IntroHeading>
            <IntroSubHeading>UI & Web Developer</IntroSubHeading>
          </Intro>
          <NavList>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Skill</NavLink>
            <NavLink to="#">Experience</NavLink>
            <NavLink to="#">Portfolio</NavLink>
            <NavLink to="#">Contact</NavLink>
          </NavList>
          <SocialMedia>
            <SocialMediaFollow>Follow me on</SocialMediaFollow>
            <SocialMedias>
              <SocialMediaLink to="#">
                <SocialMediaIcon url="/icons/facebook.svg" />
              </SocialMediaLink>
              <SocialMediaLink to="#">
                <SocialMediaIcon url="/icons/instagram.svg" />
              </SocialMediaLink>
              <SocialMediaLink to="#">
                <SocialMediaIcon url="/icons/linkedin.svg" />
              </SocialMediaLink>
            </SocialMedias>
          </SocialMedia>
          <CopyRightNotice>
            Copyright &copy; 2020. All rights reversed
          </CopyRightNotice>
        </NavWrapper>
      </Nav>
    </>
  );
}

export default NavBar;
