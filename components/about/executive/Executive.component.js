/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { ExecutiveData } from '../../../data/about.data';
import Separator from '../../lib/separator/Separator.component';
import ButtonComponent from '../../lib/button/Button.component';

//=============================================>  RENDER
const ExecutiveComponent = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title> Meet the Executives</Title>
      <Separator width='120px' height='5px' top='-7vh' />

      <ExecWrapper>
        {ExecutiveData &&
          ExecutiveData.map((data, index) => {
            const area = `card_${index + 1}`;
            return (
              <ExecCard
                style={{ area }}
                data-aos='fade-up'
                data-aos-delay={data.delay}
              >
                <Image src={data.image} alt='' layout='fill' />
                <TitleCard>
                  <h1>{data.name}</h1>
                  <p>{data.title}</p>
                </TitleCard>
              </ExecCard>
            );
          })}
      </ExecWrapper>

      <ButtonComponent
        bg={theme.colors.clr_4}
        hv_bg={theme.colors.clr_2}
        color={theme.colors.lt_2}
        text='view all'
      />
    </Container>
  );
};

export default ExecutiveComponent;

//=============================================>  COMPONENT
const Container = styled.section`
  gap: 8vh;
  width: 100%;
  display: flex;
  padding: 150px 60px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lt_1};
`;

const ExecWrapper = styled.section`
  gap: 4vw;
  width: 100%;
  height: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: ' card_1 card_2 card_3';

  @media (max-width: 1024px) {
    gap: 70px;
    grid-template-areas:
      'card_1'
      'card_2'
      'card_3';
  }
`;

//  component card
const ExecCard = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  position: relative;
  align-items: center;
  background-color: red;
  justify-content: center;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.lt_2},
    10px 10px 0 ${({ theme }) => theme.colors.clr_2},
    15px 15px 0 ${({ theme }) => theme.colors.lt_2},
    20px 20px 0 ${({ theme }) => theme.colors.clr_4};
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  color: ${({ theme }) => theme.colors.dk_1};
`;

const TitleCard = styled.div`
  width: 80%;
  bottom: -40px;
  display: flex;
  height: 80px;
  position: absolute;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lt_1};
  box-shadow: ${({ theme }) => theme.shadow.sd_4};
  background-color: ${({ theme }) => theme.colors.clr_4};

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }

  p {
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.sec};
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;
