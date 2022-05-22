/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Button from '../lib/button/Button.component';

//=============================================>  RENDER
const ContactFormComponent = () => {
  const theme = useTheme();

  return (
    <Container>
      <InputWrapper>
        <p>Name</p>
        <InpTxt type='text' placeholder='Enter your name' />
      </InputWrapper>

      <InputWrapper>
        <p>Email</p>
        <InpTxt type='email' placeholder='Enter your email' />
      </InputWrapper>

      <InputWrapper>
        <p>Your Message</p>
        <InpArea
          type='text'
          placeholder={`Say something...
> ☎️Make enquiries
> 📜Submit complaints
> ❔Get help
> 👋Say HI!`}
        />
      </InputWrapper>

      <Button
        text='Submit'
        bg={theme.colors.clr_1}
        color={theme.colors.lt_2}
        sx={{ alignSelf: 'flex-start' }}
      />
    </Container>
  );
};

export default React.memo(ContactFormComponent);

//=============================================>  COMPONENT
const Container = styled.form`
  gap: 50px;
  width: 90%;
  display: flex;
  padding: 100px 50px;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.sd_5};
  background-color: ${({ theme }) => theme.alpha('dk_1', 0.4)};

  @media (max-width: 1024px) {
    width: 100%;
    padding: 100px 20px;
  }
`;

const InputWrapper = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

const InpTxt = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  padding: 15px;
  font-weight: 300;
  border-radius: 5px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.lt_2};
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  background-color: ${({ theme }) => theme.colors.clr_5};
  transition: ${({ theme }) => theme.transition.smooth};

  &:focus {
    outline: thin solid ${({ theme }) => theme.alpha('lt_2', 0.7)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.alpha('lt_2', 0.4)};
  }

  @media (max-width: 800px) {
    height: 45px;
  }
`;

const InpArea = styled.textarea`
  width: 100%;
  border: none;
  height: 300px;
  padding: 20px;
  resize: none;
  border-radius: 5px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.lt_2};
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  background-color: ${({ theme }) => theme.colors.clr_5};

  &:focus {
    outline: thin solid ${({ theme }) => theme.alpha('lt_2', 0.7)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.alpha('lt_2', 0.4)};
  }
`;
