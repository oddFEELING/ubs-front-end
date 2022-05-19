/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import LogoImg from '../../../assets/images/logo/logo.jpg';
import {
  Container,
  DarkSection,
  LogoDiv,
  TitleWrapper,
} from './Footer.component';

const Footer = () => {
  return (
    <Container>
      <TitleWrapper data-aos='fade-right'>
        <LogoDiv>
          <Image
            src={LogoImg}
            alt=''
            layout='fill'
            loading='lazy'
            placeholder='blur'
          />
        </LogoDiv>
        <h3>Unique Blossom Schools</h3>
      </TitleWrapper>
      <DarkSection />
    </Container>
  );
};

export default Footer;
