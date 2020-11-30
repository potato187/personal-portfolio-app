import {
  Container,
  Heading,
  HeadingGroup,
  Section,
  SubHeading,
  Grid,
  GridItem,
  ItemDescription,
  ItemHeading,
  ItemIcon,
} from "components/styled";
import React from "react";
import { BsImage, BsImages, BsWrench } from "react-icons/bs";

function Expertise() {
  return (
    <>
      <Section id="skills">
        <Container>
          <HeadingGroup>
            <SubHeading>What i do</SubHeading>
            <Heading>My Expertise</Heading>
          </HeadingGroup>
          <Grid>
            <GridItem color="orange">
              <ItemIcon>
                <BsWrench />
              </ItemIcon>
              <ItemHeading>Web Development</ItemHeading>
            </GridItem>
            <GridItem color="blue">
              <ItemIcon>
                <BsImage />
              </ItemIcon>
              <ItemHeading>Web Development</ItemHeading>
            </GridItem>
            <GridItem color="yellow">
              <ItemIcon>
                <BsImages />
              </ItemIcon>
              <ItemHeading>Web Development</ItemHeading>
            </GridItem>
          </Grid>
          <HeadingGroup style={{ marginTop: "5rem" }}>
            <SubHeading>What i use</SubHeading>
            <Heading>Software & Web Technology</Heading>
          </HeadingGroup>

          <Grid>
            <GridItem color="orange">
              <ItemHeading highLight={1} color="orange">
                HTML
              </ItemHeading>
              <ItemDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                facilis dolorem sapiente quia voluptatibus.
              </ItemDescription>
            </GridItem>
            <GridItem color="blue">
              <ItemHeading highLight={1} color="blue">
                Css
              </ItemHeading>
              <ItemDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                facilis dolorem sapiente quia voluptatibus.
              </ItemDescription>
            </GridItem>
            <GridItem color="yellow">
              <ItemHeading highLight={1} color="yellow">
                Javascript
              </ItemHeading>
              <ItemDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                facilis dolorem sapiente quia voluptatibus.
              </ItemDescription>
            </GridItem>
            <GridItem color="purple">
              <ItemHeading highLight={1} color="purple">
                Bootstrap
              </ItemHeading>
              <ItemDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                facilis dolorem sapiente quia voluptatibus.
              </ItemDescription>
            </GridItem>
            <GridItem color="darkBlue">
              <ItemHeading highLight={1} color="darkBlue">
                Photoshop
              </ItemHeading>
              <ItemDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                facilis dolorem sapiente quia voluptatibus.
              </ItemDescription>
            </GridItem>
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export default Expertise;
