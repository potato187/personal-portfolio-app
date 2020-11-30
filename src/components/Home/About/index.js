import {
  Container,
  CustomButton,
  Heading,
  HeadingGroup,
  HightLight,
  Section,
  SubHeading,
  Text
} from "components/styled";
import React from "react";
import { AboutHire } from "./AboutElements";

function AboutSection() {
  return (
    <>
      <Section id="about">
        <Container>
          <HeadingGroup>
            <SubHeading>About</SubHeading>
            <Heading>Who am I?</Heading>
          </HeadingGroup>
          <div>
            <Text>
              <HightLight>Hi, i am Michael G.</HightLight> ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur temporibus repellendus
              eligendi odit ea cum culpa, est nobis odio qui quo ab natus!
              Recusandae praesentium impedit ad quaerat architecto quam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Inventore esse
              dolorum sint quas deleniti debitis porro natus magnam iusto
              molestiae fugit reprehenderit eaque, illo similique harum, odio
              voluptatibus temporibus maxime?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              temporibus repellendus eligendi odit ea cum culpa, est nobis odio
              qui quo ab natus! Recusandae praesentium impedit ad quaerat
              architecto quam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Inventore esse dolorum sint quas deleniti
              debitis porro natus magnam iusto molestiae fugit reprehenderit
              eaque, illo similique harum, odio voluptatibus temporibus maxime?
            </Text>
          </div>
          <AboutHire>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis voluptas magni, animi iste debitis iure nostrum
              deserunt voluptatibus, veritatis enim quis tenetur est dolore unde
              suscipit culpa, quas nobis ipsum.
            </Text>
            <CustomButton primary={1} to="#">
              Hire me now
            </CustomButton>
          </AboutHire>
        </Container>
      </Section>
    </>
  );
}

export default AboutSection;
