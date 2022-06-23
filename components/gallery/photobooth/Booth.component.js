/** 🌹oddFEELING */

import Image from 'next/image';
import styled from 'styled-components';
import useMobile from '../../../hooks/useMobile';
import { galleryStore } from '../../../context/gallery.context';
import { ImageData } from '../../../data/gallery.data';
import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

//=============================================>  RENDER
const BoothComponent = ({ images }) => {
  console.log(images);
  const mobile = useMobile();
  const { selected } = galleryStore();
  const [ListProps, setListProps] = useState({
    style: { width: '90%', overflow: 'hidden' },
    cols: 4,
    gap: 8,
    rowHeight: 350,
  });

  // ======= set image dimensions state -->
  useEffect(() => {
    setListProps({
      style: {
        width: mobile && window.innerWidth <= 800 ? '100%' : '90%',
        overflow: 'hidden',
      },
      cols: mobile && window.innerWidth <= 800 ? 2 : 4,
      gap: 8,
      rowHeight: mobile && window.innerWidth <= 800 ? 200 : 350,
    });
  }, [mobile]);

  // ======= check the images passed through -->
  images && console.log(images);
  return (
    <ImageList
      sx={{ ...ListProps.style }}
      cols={ListProps.cols}
      gap={8}
      rowHeight={ListProps.rowHeight}
    >
      {ImageData &&
        ImageData.map((image, index) => {
          return (
            <React.Fragment key={index}>
              {(image.category === selected || selected === 'all') && (
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
              )}
            </React.Fragment>
          );
        })}
    </ImageList>
  );
};

export default BoothComponent;
