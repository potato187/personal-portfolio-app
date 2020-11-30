import {
  Container,
  CustomButton,
  Heading,
  HeadingGroup,
  Section,
  SubHeading,
} from "components/styled";
import React from "react";
import { MdLocationOn as Location, MdPhone as Phone } from "react-icons/md";
import {
  ContactInfo,
  ContactInfoIcon,
  ContactInfoItem,
  ContactWrapper,
  DataItem,
  DataWrapper,
  FormContact,
  Input,
  Message,
} from "./ContactElements";
function Contact() {
  return (
    <>
      <Section>
        <Container>
          <HeadingGroup>
            <SubHeading>Contact Me</SubHeading>
            <Heading>Let's work together</Heading>
          </HeadingGroup>

          <ContactWrapper>
            <ContactInfo>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <Location />
                </ContactInfoIcon>
                <DataWrapper>
                  <DataItem>200 Address st</DataItem>
                  <DataItem>City, State12345</DataItem>
                  <DataItem>United States</DataItem>
                </DataWrapper>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <Phone />
                </ContactInfoIcon>
                <DataWrapper>
                  <DataItem>789-232-799</DataItem>
                </DataWrapper>
              </ContactInfoItem>
            </ContactInfo>
            <FormContact action="#">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Subject" />
              <Message rows="7" placeholder="Message"></Message>
              <CustomButton to="#">Send Message</CustomButton>
            </FormContact>
          </ContactWrapper>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
