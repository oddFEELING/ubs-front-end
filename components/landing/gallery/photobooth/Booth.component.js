/** 🌹oddFEELING */

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useMobile from '../../../../hooks/useMobile';
import { galleryStore } from '../../../../global/gallery.global';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import ImagePopover from '../popovers/Image.popover';

//=============================================>  RENDER
const BoothComponent = ({ images }) => {
  const mobile = useMobile();
  const { selected } = galleryStore();
  const [selectedImage, setSelectedImage] = useState('');
  const [showImage, setShowImage] = useState(false);
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

  return (
    <ImageList
      sx={{ ...ListProps.style }}
      cols={ListProps.cols}
      gap={8}
      rowHeight={ListProps.rowHeight}
    >
      {showImage && (
        <ImagePopover
          state={showImage}
          setState={setShowImage}
          image={selectedImage}
        />
      )}
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
                  onClick={() => {
                    setSelectedImage(
                      image.attributes.Photo.data.attributes.url
                    );
                    setShowImage((state) => !state);
                  }}
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
