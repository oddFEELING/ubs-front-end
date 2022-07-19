/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import useScroll from '../../../hooks/useScroll';
import useMobile from '../../../hooks/useMobile';
import { Nav_Links } from '../../../data/nav.data';
import { navStore } from '../../../context/nav.context';
import logoImg from '../../../assets/images/logo/logo.jpg';
// ======= style import  -->
import {
  Container,
  DesktopLinkDiv,
  LogoDiv,
  MobileLinkDiv,
  MobMenuTitle,
  NavBtn,
} from './Nav.component';

//=============================================>  COMPONENT
const Nav = () => {
  const { current_route, setCurrent_route } = navStore();
  // ======= mobile menu state -->
  const [isOpen, setIsOpen] = useState(false);
  // ======= check for mobile screen -->
  const isMobile = useMobile();
  // ======= check page scroll-->
  const scrolled = useScroll();

  // ======= mobile menu handler -->
  const MenuHandler = () => setIsOpen((state) => !state);

  return (
    <Container mobile={isMobile} scrolled={scrolled}>
      {/* ====== logo */}
      <LogoDiv>
        <Link href='/'>
          <Image
            src={logoImg}
            alt=''
            layout='fill'
            priority
            placeholder='blur'
            quality={100}
          />
        </Link>
      </LogoDiv>

      {/* ====== links */}
      {isMobile ? (
        <NavBtn>
          <Icon
            icon='carbon:menu'
            color={!scrolled ? `rgba(244, 243,255, .9)` : 'rgba(23,23,23,.9)'}
            height='40'
            onClick={MenuHandler}
          />
        </NavBtn>
      ) : (
        <DesktopLinkDiv data-aos='fade-down'>
          {Nav_Links.map((data, index) => {
            return (
              <Link href={data.link} key={index} passHref>
                <a
                  className={scrolled ? `scrolled link` : `link`}
                  onClick={() => {
                    setCurrent_route(data.select);
                  }}
                >
                  {data.text}
                </a>
              </Link>
            );
          })}
        </DesktopLinkDiv>
      )}

      {/* ====== Mobile nav menu  */}
      {isMobile && (
        <MobileLinkDiv open={isOpen}>
          {/* ====== title bar  */}
          <MobMenuTitle>U B S</MobMenuTitle>
          <Icon
            icon='akar-icons:arrow-right-thick'
            height='35'
            onClick={MenuHandler}
            style={{
              position: 'absolute',
              top: '5.5%',
              right: '8%',
              color: 'orange',
              cursor: 'pointer',
            }}
          />

          {/* ====== nav links  */}
          {Nav_Links.map((data, index) => {
            return (
              <Link href={data.link} key={index} passHref>
                <a className='link' onClick={MenuHandler}>
                  {data.text}
                </a>
              </Link>
            );
          })}
        </MobileLinkDiv>
      )}
    </Container>
  );
};

export default Nav;
