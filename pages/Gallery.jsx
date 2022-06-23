/** 🌹oddFEELING */

import AOS from 'aos';
import axios from 'axios';
import Script from 'next/script';
import { useQuery } from 'react-query';
import React, { useEffect } from 'react';
import useMobile from '../hooks/useMobile';
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
import ErrorComponent from '../components/lib/error/Error.Component';

const Gallery = () => {
  const { selected } = galleryStore();
  const mobile = useMobile();

  // ======= get category data -->
  const { data: Categories } = useQuery(
    'gallery-key',
    () => {
      return axios.get(
        'https://ubs-cms-strapi.herokuapp.com/api/photo-categories',
        {
          headers: {
            authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        }
      );
    },
    3000
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  });

  return (
    <Contaoiner>
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
      <Hero
        title='Picture Gallery'
        desc='Capturing events in the moment'
        btn_1_txt='enquiries'
        btn_2_txt='Admission'
        img='/gallery/gallery-hero.jpg'
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

        <BoothComponent mobile={mobile} />
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;
