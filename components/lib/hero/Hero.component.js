/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button.component';

//=============================================>  # RENDER
const Hero = ({ ...props }) => {
  const { btn_1_click, btn_2_click, btn_1_txt, btn_2_txt, img, title, desc } =
    props;
  return (
    <Container img={img}>
      <Title data-aos='fade-up'>{title}</Title>
      <Desc data-aos='fade-up' data-aos-delay='300'>
        {desc}
      </Desc>
      <BtnArea>
        <Button
          text={btn_1_txt}
          bg='#E72727'
          color='#f3f4ff'
          onClick={btn_1_click}
        />
        <Button
          text={btn_2_txt}
          bg='#f3f4ff'
          color='#1A1A1A'
          onClick={btn_2_click}
        />
      </BtnArea>
    </Container>
  );
};

export default Hero;

//=============================================>  # COMPONENT

const Container = styled.header`
  width: 100%;
  display: flex;
  gap: 60px;
  padding: max(12vh, 80px) 16vw;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  height: max(600px, 60vh);
  background: ${({ img, theme }) =>
    `linear-gradient(to bottom,${theme.alpha('dk_1', 0.5)}, ${theme.alpha(
      'dk_1',
      0.6
    )}), url(${img ? img : '/about/about-hero.jpg'})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 800px) {
    padding: max(12vh, 80px) 8vw;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  margin-top: 5vh;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.xxl};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
`;

const Desc = styled.h3`
  font-weight: 500;
  margin-top: -50px;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  color: ${({ theme }) => theme.alpha('lt_1', 0.7)};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.size.md};
  }
`;

const BtnArea = styled.div`
  display: flex;
  gap: 1.5vw;
`;
