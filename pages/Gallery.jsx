/** 🌹oddFEELING */

import React from 'react';
import Hero from '../components/lib/hero/Hero.component';

import { Contaoiner, GalleryWrapper } from '../styles/Gallery.component';

const Gallery = () => {
  return (
    <Contaoiner>
      <Hero
        title='Picture Gallery'
        desc='Capturing events in the moment'
        btn_1_txt='enquiries'
        btn_2_txt='Admission'
      />
      <GalleryWrapper>
        <h1>Gallery coming Soon!</h1>
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;
