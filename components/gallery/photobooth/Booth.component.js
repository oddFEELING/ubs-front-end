/** 🌹oddFEELING */

import AOS from 'aos';
import Image from 'next/image';
import styled from 'styled-components';
import { ImageData } from '../../../data/gallery.data';
import React, { useEffect, useState } from 'react';
import useMobile from '../../../hooks/useMobile';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

//=============================================>  RENDER
const BoothComponent = () => {
  const mobile = useMobile();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  }, [mobile]);

  return (
    <ImageList
      sx={{ width: mobile ? '100%' : '90%', overflow: 'hidden' }}
      cols={mobile ? 2 : 4}
      gap={8}
      rowHeight={mobile ? 200 : 350}
    >
      {ImageData &&
        ImageData.map((image, index) => {
          const cols = image.featured ? 2 : 1;
          const rows = image.featured ? 2 : 1;
          return (
            <ImageListItem
              key={index}
              rows={rows}
              cols={cols}
              data-aos='fade-up'
            >
              <Image
                alt={image.img}
                layout='fill'
                loading='lazy'
                src={image.img}
                objectFit='cover'
              />

              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={`${image.title} by ${image.author}`}
                position='top'
              />
            </ImageListItem>
          );
        })}
    </ImageList>
  );
};

export default BoothComponent;

//=============================================>  COMPONENT
const Container = styled.div`
  width: 90%;
  display: flex;
`;
