/** 🌹oddFEELING */

import Image from 'next/image';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import useMobile from '../../../../hooks/useMobile';
import { ImageData } from '../../../../data/gallery.data';
import { galleryStore } from '../../../../global/gallery.global';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

//=============================================>  RENDER
const BoothComponent = ({ images }) => {
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
  let newImages = images && images.data.data;
  console.log(newImages[0]);
  return (
    <ImageList
      sx={{ ...ListProps.style }}
      cols={ListProps.cols}
      gap={8}
      rowHeight={ListProps.rowHeight}
    >
      {images &&
        newImages.map((image, index) => {
          return (
            <React.Fragment key={index}>
              {(image.attributes.photo_category?.data.attributes.Title ===
                selected ||
                selected === 'all') && (
                <ImageListItem
                  key={index}
                  rows={image.attributes.Rows}
                  cols={image.attributes.Columns}
                  data-aos='fade-up'
                >
                  <Image
                    alt={image.img}
                    layout='fill'
                    loading='lazy'
                    src={image.attributes.Photo.data.attributes.url}
                    objectFit='cover'
                    quality='100'
                    placeholder={
                      image.attributes.Photo.data.attributes.formats.thumbnail
                        .url
                    }
                    // placeholder = 'blur'
                  />

                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={`${image.attributes.Title} by @${image.attributes.Author?.data.attributes.username}`}
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
