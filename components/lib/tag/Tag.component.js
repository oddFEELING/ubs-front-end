/** 🌹oddFEELING */

import React from 'react';
import { galleryStore } from '../../../global/gallery.global';

//=============================================>  RENDER
const TagComponent = ({ text }) => {
  const { setSelected, selected } = galleryStore();

  // ======= Tag click -->
  const handleClick = () => {
    setSelected(text);
  };

  return (
    <span
      className={`col-span-2 lg:col-span-1 w-[150px] h-[50px] flex items-center justify-center cursor-pointer font-medium text-gray-700 bg-light-100 rounded-lg text-sm font-secondary border transition-all duration-300 border-gray-400 hover:shadow-lg ${
        selected === text && `bg-[#393939] text-light-200`
      }`}
      data-aos='slide-up'
      selected={selected === text ? true : false}
      onClick={handleClick}
    >
      {text.toUpperCase()}
    </span>
  );
};

export default TagComponent;
