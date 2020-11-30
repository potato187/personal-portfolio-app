import {
  Container,
  CustomButton,
  Heading,
  HeadingGroup,
  Section,
  SubHeading,
} from "components/styled";
import React from "react";
import {
  Buttons,
  LoadMore,
  PortfolioGrid,
  PortfolioImage,
  PortfolioItem,
  Project,
  ProjectName,
  ProjectType,
} from "./PortfolioElements";

function Portfolio() {
  return (
    <Section id="my-portfolio">
      <Container>
        <HeadingGroup>
          <SubHeading>PREVIOUS EMPLOYMENT</SubHeading>
          <Heading>WORK EXPERIENCE</Heading>
        </HeadingGroup>
        <PortfolioGrid>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioImage src="/images/the-rosa.jpg" all="rosa" />
            <Project>
              <ProjectName>
                The Rosa
                <span>01</span>
              </ProjectName>
              <ProjectType>Website</ProjectType>
              <Buttons>
                <CustomButton outline={1} to="#">
                  Live Demo
                </CustomButton>
                <CustomButton outline={1} to="#">
                  Source Code
                </CustomButton>
              </Buttons>
            </Project>
          </PortfolioItem>
        </PortfolioGrid>
        <LoadMore>
          <CustomButton size="large" to="#">
            Load More
          </CustomButton>
        </LoadMore>
      </Container>
    </Section>
  );
}

export default Portfolio;
