/** 🌹oddFEELING */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './homeHero.component';
import Slide from './slide/Slide.component';
import { SlideData } from '../../../data/home.data';
import { Autoplay, EffectFade } from 'swiper';

//=============================================>  COMPONENT
const HomeHero = () => {
  // ======= style for main swiper -->
  const SwiperStyle = {
    width: '100%',
    height: '100%',
  };

  // ======= Swiper options-->
  const SwiperOpt = {
    autoplay: true,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
  };

  return (
    <Container>
      <Swiper
        modules={[Autoplay, EffectFade]}
        {...SwiperOpt}
        effect='fade'
        style={{ ...SwiperStyle }}
      >
        {SlideData &&
          SlideData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide
                  title={data.title}
                  desc={data.desc}
                  img={data.img}
                  buttons={data.buttons}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default HomeHero;
