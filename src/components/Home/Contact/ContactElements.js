import styled, { css } from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  flex-basis: 45%;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ContactInfoIcon = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  font-size: 5rem;

  & svg {
    fill: ${({ theme }) => theme.colors.blue};
    margin: auto;
  }
`;

export const DataWrapper = styled.div`
  margin-left: 2rem;
`;

export const DataItem = styled.span`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 1.5;
  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.xSmall};
  }
`;

export const FormContact = styled.form`
  flex: 1;
  text-align: center;
`;

const CustomInput = css`
  width: 100%;
  letter-spacing: 1px;
  line-height: 1.5;
  border: none;
  outline: none;
  border-radius: 3px;
  margin-bottom: 2rem;
  padding: 1rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    font-family: ${theme.fonts.default};
    color: ${theme.colors.fontColor};
    font-size: ${theme.fontSize.small};
  `}
`;

export const Input = styled.input`
  ${CustomInput};
`;

export const Message = styled.textarea`
  ${CustomInput};
  resize: none;
`;

export const ButtonSubmit = styled.button``;
