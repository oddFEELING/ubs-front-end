/** 🌹oddFEELING */

import AOS from 'aos';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import Hero from '../components/lib/hero/Hero.component';
import { galleryStore } from '../context/gallery.context';
import TagComponent from '../components/lib/tag/Tag.component';
import BoothComponent from '../components/gallery/photobooth/Booth.component';
import {
  Contaoiner,
  GalleryWrapper,
  TagWrapper,
} from '../styles/Gallery.component';
import LoaderComponent from '../components/lib/loader/Loader.component';
import ErrorComponent from '../components/lib/error/Error.component';
import useFetch from '../hooks/useFetch';
import AppLayout from '../layout/AppLayout';

const Gallery = () => {
  const { selected } = galleryStore();

  // ======= get category data -->
  const { data: Categories } = useFetch('photo-categories');
  // ======= get gallery data -->
  const { data: Images, isLoading, isError, isSuccess } = useFetch('images');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  });

  return (
    <Contaoiner>
      <NextSeo
        title='UBS | Gallery'
        description='See us in glorious moments as we showcase some of our notable events, people, alumni and so much much!'
      />
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
      <Hero
        title='Picture Gallery'
        desc='Capturing events in the moment'
        btn_1_txt='enquiries'
        btn_2_txt='Admission'
        img='/gallery/gallery-hero.webp'
      />
      <GalleryWrapper>
        <h1>Image categories</h1>
        <TagWrapper>
          <TagComponent text='all' />
          {Categories &&
            Categories.data.data.map((tag, index) => {
              return <TagComponent text={tag.attributes.Title} key={index} />;
            })}
        </TagWrapper>

        {isSuccess && <BoothComponent images={Images} />}
        {isLoading && <LoaderComponent />}
        {isError && <ErrorComponent />}
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;

Gallery.getLayout = (page) => {
  return <AppLayout> {page}</AppLayout>;
};
