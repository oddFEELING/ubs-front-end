/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useTheme } from 'styled-components';
import { AddressData, SocialData } from '../../../data/footer.data';
import LogoImg from '../../../assets/images/logo/logo.jpg';
import {
  ContactCard,
  ContactDiv,
  ContactText,
  Container,
  DarkSection,
  LogoDiv,
  MiddleSection,
  SocialDiv,
  SocialWrapper,
  SubscribeDiv,
  TitleWrapper,
} from './Footer.component';

const Footer = () => {
  const theme = useTheme();

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

      <MiddleSection>
        <ContactDiv>
          {AddressData &&
            AddressData.map((data, index) => {
              return (
                <ContactCard
                  key={index}
                  data-aos='fade-right'
                  data-aos-delay={data.delay}
                >
                  <Icon
                    icon={data.icon}
                    color={theme.colors.lt_1}
                    height={27}
                  />
                  <ContactText>
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                  </ContactText>
                </ContactCard>
              );
            })}
        </ContactDiv>

        <SubscribeDiv></SubscribeDiv>

        <SocialDiv>
          <h1>Socials</h1>
          <SocialWrapper>
            {SocialData &&
              SocialData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className='icon-wrapper'
                    data-aos='zoom-in-left'
                    data-aos-delay={data.delay}
                  >
                    <Icon icon={data.icon} height='25' />
                  </div>
                );
              })}
          </SocialWrapper>
        </SocialDiv>
      </MiddleSection>
      <DarkSection />
    </Container>
  );
};

export default Footer;
