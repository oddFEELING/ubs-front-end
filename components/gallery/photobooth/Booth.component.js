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
          console.log(
            `${image.title} has ${image.columns} x ${image.rows} dimension`
          );
          return (
            <ImageListItem
              key={index}
              rows={image.rows}
              cols={image.columns}
              data-aos='fade-up'
            >
              <Image
                alt={image.img}
                layout='fill'
                loading='lazy'
                src={image.img}
                objectFit='cover'
                placeholder={image.img}
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
