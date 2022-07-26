/** 🌹oddFEELING */

import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { cardData } from '../../data/contact.data';
import ContactFormComponent from './ContactForm.component';

//=============================================>  RENDER
const ContactCardComponent = () => {
  return (
    <Container>
      <CardWrapper>
        <h2>Get in touch</h2>
        {cardData &&
          cardData.map((data, index) => {
            return (
              <Card key={index} data-aos='fade-right'>
                <div className='title__wrapper'>
                  <Icon icon={data.icon} height='50' />
                  <h3>{data.title}</h3>
                </div>
                <p>{data.content}</p>
              </Card>
            );
          })}
      </CardWrapper>

      <FormWrapper>
        <h2>Leave us a message</h2>
        <ContactFormComponent />
      </FormWrapper>
    </Container>
  );
};

export default ContactCardComponent;

//=============================================>  COMPONENT
const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.alpha('clr_4', 0.9)},${theme.alpha(
      'clr_4',
      0.9
    )}), url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`};
  /* background-color: ${({ theme }) => theme.colors.clr_4}; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.lt_1};

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

// ======= Card wrapper -->
const CardWrapper = styled.aside`
  gap: 70px;
  width: 30%;
  display: flex;
  padding: 50px;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const Card = styled.div`
  gap: 20px;
  width: 300px;
  height: 250px;
  display: flex;
  padding: 40px;
  border-radius: 8px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.clr_5};

  .title__wrapper {
    gap: 10px;
    display: flex;
    align-items: center;

    h3 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fonts.size.lg};
    }
  }

  p {
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.pri};
    color: ${({ theme }) => theme.alpha('lt_2', 0.8)};
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

// ======= Form wrapper -->
const FormWrapper = styled.div`
  gap: 50px;
  width: 70%;
  display: flex;
  padding: 50px;
  flex-direction: column;

  h2 {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 620px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;
