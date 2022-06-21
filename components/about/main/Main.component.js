/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { AboutCopy } from '../../../data/about.data';
import Separator from '../../lib/separator/Separator.component';
import CopyImg from '../../../assets/images/about/about-copy-img.JPG';

//=============================================>  # RENDER
const Main = () => {
  return (
    <Container>
      <Title>The History behind our great School</Title>
      <Separator width='150px' height='8px' top='-70px' />
      <Content>
        <Txt data-aos='fade-right'>{AboutCopy}</Txt>
        <ImgDiv data-aos='zoom-in'>
          <Image
            src={CopyImg}
            alt=''
            layout='fill'
            placeholder='blur'
            blurDataURL={AboutCopy}
            loading='lazy'
            objectFit='cover'
            objectPosition='top'
          />
        </ImgDiv>
      </Content>
    </Container>
  );
};

export default Main;

//=============================================>   # COMPONENT

const Container = styled.main`
  gap: 80px;
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
  text-align: justify;
  justify-content: center;
  color: ${({ theme }) => theme.alpha('dk_1', 0.8)};

  @media (max-width: 1024px) {
    min-width: 300px;
    flex-direction: column-reverse;
  }
`;

const Txt = styled.p`
  width: 550px;
  padding: 20px 50px;
  font-size: ${({ theme }) => theme.fonts.size.md};

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
`;

const ImgDiv = styled.div`
  width: 35%;
  height: 500px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;
