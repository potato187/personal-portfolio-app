import React from "react";
import {
  MottoContainer,
  MottoSection,
  Quote,
  QuoteBy,
  QuoteWrapper,
} from "./MottoElements";

function Motto() {
  return (
    <>
      <MottoSection>
        <MottoContainer>
          <QuoteWrapper>
            <Quote>Opportunity don't happen. Your create them.</Quote>
            <QuoteBy>~ Chris Grosser</QuoteBy>
          </QuoteWrapper>
        </MottoContainer>
      </MottoSection>
    </>
  );
}

export default Motto;
