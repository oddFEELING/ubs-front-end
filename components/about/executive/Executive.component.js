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
                <TitleCard data-aos='fade-up'>
                  <h1 className='text-white font-primary text-md mb-1 font-bold text-xs md:text-sm lg:text-md lg:text-lg text-center'>
                    {data.name}
                  </h1>
                  <p className='text-gray-300 text-xs sm:text-sm text-center'>
                    {data.title}
                  </p>
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
  overflow: hidden;
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
  width: 85%;
  bottom: 16px;
  height: 80px;
  display: flex;
  position: absolute;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(4px);
  color: ${({ theme }) => theme.colors.lt_1};
  box-shadow: ${({ theme }) => theme.shadow.sd_5};
  box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.alpha('clr_4', 0.9)};

  @media (max-width: 480px) {
    height: 60px;
  }
`;
