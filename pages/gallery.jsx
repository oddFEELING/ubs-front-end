/** 🌹oddFEELING */

import AOS from 'aos';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import AppLayout from '../layout/AppLayout';
import Hero from '../components/lib/hero/Hero.component';
import { galleryStore } from '../global/gallery.global';
import TagComponent from '../components/lib/tag/Tag.component';
import BoothComponent from '../components/landing/gallery/photobooth/Booth.component';
import { Contaoiner, GalleryWrapper } from '../styles/Gallery.component';
import LoaderComponent from '../components/lib/loader/Loader.component';
import ErrorComponent from '../components/lib/error/Error.component';
import ImagePopover from '../components/landing/gallery/popovers/Image.popover';

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

  useEffect(() => {
    // Google tag (gtag.js)

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3JFLYDHTJ');
  }, []);

  return (
    <Contaoiner>
      <NextSeo
        title='UBS | Gallery'
        description='See us in glorious moments as we showcase some of our notable events, people, alumni and so much much!'
      />

      {/* ====== lottie files script */}
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />

      {/* ====== google analytics script */}
      <Script
        async
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

      <Hero
        title='Picture Gallery'
        desc='Capturing events in the moment'
        btn_1_txt='enquiries'
        btn_2_txt='Admission'
        img='/gallery/gallery-hero.webp'
      />
      <GalleryWrapper>
        <h1>Image categories</h1>

        <div className='gap-4 grid grid-cols-4 items-center justify-center justify-items-center max-w-[80%] py-[10px] mb-16'>
          <TagComponent text='all' />
          {Categories &&
            Categories.data.data.map((tag, index) => {
              return <TagComponent text={tag.attributes.Title} key={index} />;
            })}
        </div>

        {isSuccess && <BoothComponent images={Images} />}
        {isLoading && <LoaderComponent />}
        {isError && <ErrorComponent />}
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;

Gallery.layout = AppLayout;
