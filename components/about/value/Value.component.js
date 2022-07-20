/** 🌹oddFEELING */

import React from 'react';
import { Icon } from '@iconify/react';
import Separator from '../../lib/separator/Separator.component';
import { valueData } from '../../../data/about.data';
import styled from 'styled-components';

//=============================================>  RENDER
const ValueComponent = () => {
  return (
    <Container>
      <Title> Some of the things we value</Title>
      <Separator width='120px' height='6px' red top='-3vh' />
      <CardWrapper>
        {valueData &&
          valueData.map((item, index) => {
            const areaStyle = `card_${index + 1}`;
            return (
              <CardBox
                key={index}
                style={{ area: areaStyle }}
                data-aos='fade-right'
                data-aos-delay={item.delay}
              >
                <Icon icon={item.icon} color='white' height='40' />
                <h4>{item.title}</h4>
                <p className='text-gray-300 font-secondary text-'>
                  {item.content}
                </p>
              </CardBox>
            );
          })}
      </CardWrapper>
    </Container>
  );
};

export default ValueComponent;

//=============================================>  COMPONENT
const Container = styled.section`
  gap: 4vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 160px 60px;
  flex-direction: column;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.alpha('clr_4', 0.9)}, ${theme.alpha(
      'clr_4',
      0.9
    )}), url('/about/about-value.webp')`};
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-around;
`;

const Title = styled.h3`
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.lt_2};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: 'card_1 card_2 card_3';

  @media (max-width: 1200px) {
    gap: 3vh;
    grid-template-areas:
      'card_1'
      'card_2'
      'card_3';
  }
`;
const CardBox = styled.div`
  gap: 3vh;
  height: 350px;
  display: flex;
  max-width: 500px;
  padding: 50px 50px;
  flex-direction: column;
  width: max(300px, 80%);
  background-color: ${({ theme }) => theme.alpha('clr_5', 0.9)};

  h4 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.size.lg};
    color: ${({ theme }) => theme.colors.lt_2};
  }

  p {
    /* font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.sec};
    font-size: ${({ theme }) => theme.fonts.size.md}; */
    /* color: ${({ theme }) => theme.alpha('lt_2', 0.8)}; */
  }
`;
