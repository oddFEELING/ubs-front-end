/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import { AboutCopy } from '../../../data/about.data';
import styled from 'styled-components';

//=============================================>  # RENDER
const Main = () => {
  return (
    <Container>
      <Title>The History behind our great School</Title>

      <Content>
        <Txt>{AboutCopy}</Txt>
        <ImgDiv>
          <Image src='/public/about/about-hero.jpg' alt='' layout='fill' />
        </ImgDiv>
      </Content>
    </Container>
  );
};

export default Main;

//=============================================>   # COMPONENT

const Container = styled.main`
  width: 100%;
  display: flex;
  padding: 80px 5vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max(600px, auto);
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

const Content = styled.div`
  gap: 2vw;
  width: 100%;
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
`;

const Txt = styled.p`
  padding: 20px 50px;
  width: 50%;
`;

const ImgDiv = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
