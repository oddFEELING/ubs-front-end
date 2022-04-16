/** 🌹oddFEELING */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './homeHero.component';
import Slide from './slide/Slide.component';
import { SlideData } from '../../../data/home.data';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

//=============================================>  COMPONENT
const HomeHero = () => {
  // ======= style for main swiper -->
  const SwiperStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(130,20,20,1)',
  };

  // ======= Swiper options-->
  const SwiperOpt = {
    autoplay: true,
    pagination: { clickable: true },
    loop: true,
    speed: 1500,
    navigation: true,
    allowTouchMove: false,
  };

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
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
