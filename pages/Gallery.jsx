/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import { galleryStore } from '../context/gallery.context';
import Hero from '../components/lib/hero/Hero.component';
import TagComponent from '../components/lib/tag/Tag.component';
import { TagData } from '../data/gallery.data';
import {
  Contaoiner,
  GalleryWrapper,
  TagWrapper,
} from '../styles/Gallery.component';
import useMobile from '../hooks/useMobile';
import BoothComponent from '../components/gallery/photobooth/Booth.component';
import AOS from 'aos';
import axios from 'axios';

const Gallery = () => {
  const { selected } = galleryStore();
  const mobile = useMobile();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });

    (async function () {
      const data = await axios.get(
        'https://ubs-cms-strapi.herokuapp.com/api/photos?populate=*',
        {
          headers: {
            authorization:
              'BEARER 7c673500c38701dede0564355ada2ce530ceb211b59242b41193acce20c6d5e24ece35476add064dbdb3b38ad6aefc4334000916771d47a095b7c5fecf1333a8c24463ec4e7fc9834cee4e462b3831e0605aecb84529efa688bc576849dc23196ff7143876c8429cb88df85fb71bb57dfdfc88d88266942dacadd391e8801b55',
          },
        }
      );
      console.log(data.data.data);
    })();
  });
  return (
    <Contaoiner>
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
          {TagData &&
            TagData.map((tag, index) => {
              return <TagComponent text={tag.text} key={index} />;
            })}
        </TagWrapper>

        <BoothComponent mobile={mobile} />
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;
