/** 🌹oddFEELING */

import AOS from 'aos';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useMobile from '../../hooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExecutiveData } from '../../data/about.data';
import logoImg from '../../assets/images/logo/logo.jpg';
import Button from '../../components/lib/button/Button.component';
import { Container, LogoDiv } from '../../styles/about/execPage.component';
import ExecCardComponent from '../../components/executive/ExecCard.component';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import Separator from '../../components/lib/separator/Separator.component';

const Executives = () => {
  const mobile = useMobile();
  const [swiperStyle, setSwiperStyle] = useState({
    width: '60vw',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '18px',
    justifyContent: 'center',
    boxShadow: '5px 12px 40px rgba(0,0,0,0.2)',
  });

  useEffect(() => {
    setSwiperStyle({
      width: mobile || window.innerWidth < 1024 ? '100%' : '60vw',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '18px',
      justifyContent: 'center',
      boxShadow: '5px 12px 40px rgba(0,0,0,0.2)',
    });
    AOS.init({
      delay: 0,
      once: true,
      offset: 50,
      duration: 800,
      disable: 'phone',
    });
  });

  const slideStyle = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <Head>
        <title>UBS | Executives</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <Container>
        {/* ====== logo */}
        <LogoDiv>
          <Image
            src={logoImg}
            alt=''
            priority
            objectFit='cover'
            placeholder='blur'
            layout='fill'
          />
        </LogoDiv>

        {/* ====== title */}
        <h1>
          The Right <b>PEOPLE</b> In The Right <b>JOBS!</b>
        </h1>
        <Separator
          width='120px'
          height='8px'
          top='-2.5vh'
          sx={{ backgroundColor: '#992DCC' }}
        />

        {/* ====== main */}
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          // effect='fade'
          navigation
          loop
          speed={2000}
          autoplay
          pagination
          style={swiperStyle}
        >
          {ExecutiveData &&
            ExecutiveData.map((data, index) => {
              return (
                <SwiperSlide style={slideStyle} key={index}>
                  <ExecCardComponent
                    image={data.image}
                    left={data.left}
                    color={data.color}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>

        {/* ====== back top site */}
        <Button text='Back to site' bg='red' color='white' />
      </Container>
    </div>
  );
};

export default Executives;
