/** 🌹oddFEELING */

import React from 'react';
import { galleryStore } from '../context/gallery.context';
import Hero from '../components/lib/hero/Hero.component';
import TagComponent from '../components/lib/tag/Tag.component';
import BoothComponent from '../components/gallery/photobooth/Booth.component';
import { TagData } from '../data/gallery.data';
import {
  Contaoiner,
  GalleryWrapper,
  TagWrapper,
} from '../styles/Gallery.component';

const Gallery = () => {
  const { selected } = galleryStore();
  return (
    <Contaoiner>
      <Hero
        title='Picture Gallery'
        desc='Capturing events in the moment'
        btn_1_txt='enquiries'
        btn_2_txt='Admission'
      />
      <GalleryWrapper>
        <h1>Image categories</h1>
        <TagWrapper>
          {TagData &&
            TagData.map((tag, index) => {
              return (
                <TagComponent text={tag.text} value={tag.value} key={index} />
              );
            })}
        </TagWrapper>

        <BoothComponent></BoothComponent>
      </GalleryWrapper>
    </Contaoiner>
  );
};

export default Gallery;
