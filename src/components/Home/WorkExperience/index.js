import {
  Container,
  Heading,
  HeadingGroup,
  Section,
  SubHeading,
  Text,
} from "components/styled";
import React from "react";
import {
  Job,
  Time,
  TimeLine,
  TimeLineHeading,
  TimeLineItem,
} from "./WorkExperienceElements";

function WorkExperience() {
  return (
    <>
      <Section id="experience">
        <Container>
          <HeadingGroup>
            <SubHeading>Previous employment</SubHeading>
            <Heading>Work Experience</Heading>
          </HeadingGroup>

          <TimeLine>
            <TimeLineItem>
              <TimeLineHeading>
                <Job>Web Developer</Job>
                <Time>2017 - Present</Time>
              </TimeLineHeading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quo dolorem error rerum eos incidunt quia quam
                facilis reiciendis consequuntur hic molestias! Facilis, odio
                omnis? Atque nihil recusandae officia molestiae!
              </Text>
            </TimeLineItem>
            <TimeLineItem>
              <TimeLineHeading>
                <Job>Web Developer</Job>
                <Time>2017 - Present</Time>
              </TimeLineHeading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quo dolorem error rerum eos incidunt quia quam
                facilis reiciendis consequuntur hic molestias! Facilis, odio
                omnis? Atque nihil recusandae officia molestiae!
              </Text>
            </TimeLineItem>
            <TimeLineItem>
              <TimeLineHeading>
                <Job>Web Developer</Job>
                <Time>2017 - Present</Time>
              </TimeLineHeading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quo dolorem error rerum eos incidunt quia quam
                facilis reiciendis consequuntur hic molestias! Facilis, odio
                omnis? Atque nihil recusandae officia molestiae!
              </Text>
            </TimeLineItem>
          </TimeLine>
        </Container>
      </Section>
    </>
  );
}

export default WorkExperience;
