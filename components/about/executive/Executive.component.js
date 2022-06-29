/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ExecutiveData } from '../../../data/about.data';
import Separator from '../../lib/separator/Separator.component';

//=============================================>  RENDER
const ExecutiveComponent = () => {
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
                key={index}
                area={area}
                data-aos='fade-up'
                data-aos-delay={data.delay}
              >
                <Image
                  src={data.image}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
                <TitleCard>
                  <h1>{data.name}</h1>
                  <p>{data.title}</p>
                </TitleCard>
              </ExecCard>
            );
          })}
      </ExecWrapper>
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
  grid-template-areas:
    'card_1 card_2 card_3'
    'card_4 . card_5';

  @media (max-width: 1024px) {
    gap: 70px;
    grid-template-areas:
      'card_1'
      'card_2'
      'card_3'
      'card_4'
      'card_5';
  }
`;

//  component card
const ExecCard = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  grid-area: ${({ area }) => area};
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.lt_2},
    10px 10px 0 ${({ theme }) => theme.colors.clr_2},
    15px 15px 0 ${({ theme }) => theme.colors.lt_2},
    20px 20px 0 ${({ theme }) => theme.colors.clr_5};

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  text-align: center;
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

  @media (max-width: 480px) {
    gap: 2px;
    height: 50px;

    h1 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fonts.size.md};
    }
  }
`;
